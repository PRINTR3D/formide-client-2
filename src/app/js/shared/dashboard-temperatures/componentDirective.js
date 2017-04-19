/*
 *	This code was created for Printr B.V. It is open source under the formide-client package.
 *	Copyright (c) 2017, All rights reserved, http://printr.nl
 */

/*
 * Component for creating a slice details list.
 */

(function () {
  function dashboardTemperatures() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'dashboard-temperatures/componentTemplate.html',
        scope: {
			//
		},
        transclude: true,
        controller: MainController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
  }


  function MainController(Printer, $filter, $socket, $rootScope, $timeout, $scope) {
	  var vm = this;

	  vm.chart = {};

	  function setupChart(){
		  vm.chart.labels = [];
		  vm.chart.series = [];
		  vm.chart.data = [];

		  var maxTemp = Printer.$active.maxTemperature + 50 || 450;

		  if (Printer.$active.bed && Printer.$active.bed.heated) {
			  vm.chart.series.push('Bed');
			  vm.chart.data.push([]);
			  vm.chart.series.push('Target');
			  vm.chart.data.push([]);

			  vm.chart.colors = ['#F7464A','#FBC1C3','#46BFBD','#C2E9E9','#FDB45C','#FDE6CA', '#D473AC', '#EFD0E3', '#46b1e6', '#CAC7D9', '#615892', '#CAC7D9'];
		  }
		  else {
		  	  vm.chart.colors = ['#46BFBD','#C2E9E9','#FDB45C','#FDE6CA', '#D473AC', '#EFD0E3', '#46b1e6', '#CAC7D9', '#615892', '#CAC7D9'];
		  }

		  if (Printer.$active.extruders) {
			  for (var i = 0; i < Printer.$active.extruders.length; i++) {
    			  vm.chart.series.push('Ext ' + (i+1));
    			  vm.chart.data.push([]);
    			  vm.chart.series.push('Target');
    			  vm.chart.data.push([]);
    		  }
		  }
		  else {
			  vm.chart.series.push('Ext 1');
			  vm.chart.data.push([]);
			  vm.chart.series.push('Target');
			  vm.chart.data.push([]);
		  }

		  vm.chart.options = {
			  scales: {
				  yAxes: [{
					  id: 'y-axis-1',
					  type: 'linear',
					  display: true,
					  position: 'left',
					  ticks: {
						  min: 0,
						  max: maxTemp,
						  beginAtZero: true
					  }
				  }],
				  xAxes: [{
					  ticks: {
						  autoSkip:true,
						  maxTicksLimit:11
					  }
				 }]
			  },
			  datasetFill : false,
			  elements: {
				  point: { radius: 0, hitRadius: 10, hoverRadius: 3 },
				  line: { fill: false }
		  	  },
			  animation : false,
			  responsive: true,
			  maintainAspectRatio: false
		  };
	  }

	  function populateChart(resource){

		  var b = 0;
		  var n = vm.chart.data[0].length;
		  var time = (new Date()).getTime();

		  if (n == 0) {
			  if (Printer.$active.statusTemperatures.length > 0) {
				  // if data has been saved, populate the chart with this first

				  for (var i = 0; i < Printer.$active.statusTemperatures.length; i++) {
					  vm.chart.labels.push($filter('date')(Printer.$active.statusTemperatures[i].time, 'HH:mm:ss'));

					  if (Printer.$active.bed.heated) {
						  b = 2;
						  vm.chart.data[0].push(Printer.$active.statusTemperatures[i].bed.temp);
						  vm.chart.data[1].push(Printer.$active.statusTemperatures[i].bed.targetTemp);
					  }

					  for (var r = 0; r < resource.extruders.length; r++) {
						  if (vm.chart.data[r*2+b]) vm.chart.data[r*2+b].push(Printer.$active.statusTemperatures[i].extruders[r].temp);
						  if (vm.chart.data[r*2+b+1]) vm.chart.data[r*2+b+1].push(Printer.$active.statusTemperatures[i].extruders[r].targetTemp);
					  }
				  }
			  }

			  for (var i = 0; i < (31 - Printer.$active.statusTemperatures.length); i++) {
				  // if there was less than 60 seconds of data available, add the necessary labels for the x axis

				  var tempTime = time + (2000 * i);
				  vm.chart.labels.push($filter('date')(tempTime, 'HH:mm:ss'));
			  }


		  }
		  else if(n > 30){
			  // if there is more than 60 seconds of data, remove oldest and add new

			  vm.chart.labels.splice(0,1);
			  vm.chart.labels.push($filter('date')(time, 'HH:mm:ss'));
		  }


		  if (Printer.$active.bed.heated) {
			  b = 2;
			  vm.chart.data[0].push(resource.bed.temp);
			  vm.chart.data[1].push(resource.bed.targetTemp);

			  if(n > 30){
				  vm.chart.data[0].splice(0,1);
				  vm.chart.data[1].splice(0,1);
			  }
		  }

		  for (var i = 0; i < resource.extruders.length; i++) {
			  if (vm.chart.data[i*2+b]) vm.chart.data[i*2+b].push(resource.extruders[i].temp);
			  if (vm.chart.data[i*2+b+1]) vm.chart.data[i*2+b+1].push(resource.extruders[i].targetTemp);

			  if(n > 30){
				  if (vm.chart.data[i*2+b]) vm.chart.data[i*2+b].splice(0,1);
				  if (vm.chart.data[i*2+b+1]) vm.chart.data[i*2+b+1].splice(0,1);
			  }
		  }
	  }


	  Printer.resource.$promise.then(function (data) {
		  $timeout(function () {
		  	  setupChart();
		  });
	  });

	  $rootScope.$on("formide.printer:updated", function (event, resource) {
		  // if the printer is updated, clear the chart
    	  setupChart();
	  });

	  $rootScope.$on('formide.printer:selectedRemoved', function (event, state) {
		  setupChart()
	  });


	  $socket.socket.on('printer.status', function (resource) {
		  if (typeof resource.device == 'string') {
			  resource.device = resource.device.toLowerCase();
		  }
		  if (Printer.$active && Printer.$active.port == resource.port
			&& (resource.status !== 'offline' || resource.status !== 'connecting') ) {

			  populateChart(resource)
		  }
	  });


	  // exports
	  angular.extend(vm, {
		  //
	  });
  }

  MainController.$inject = [
	  'Printer', '$filter', '$socket', '$rootScope', '$timeout', '$scope'
  ];

  angular
    .module('shared.dashboardTemperatures', [
      //
    ])
    .directive('dashboardTemperatures', dashboardTemperatures);
})();
