$(window).on('load', function() {
	var $primary = '#7367F0';
	var $success = '#28C76F';
	var $danger = '#EA5455';
	var $warning = '#FF9F43';
	var $info = '#00cfe8';
	var $primary_light = '#A9A2F6';
	var $danger_light = '#f29292';
	var $success_light = '#55DD92';
	var $warning_light = '#ffc085';
	var $info_light = '#1fcadb';
	var $strok_color = '#b9c3cd';
	var $label_color = '#e7e7e7';
	var $white = '#fff';


	// Line Area Chart - 1
	// ----------------------------------

	var revenueChartoptions = {
		chart: {
			height: 270,
			toolbar: { show: false },
			type: 'line',
		},
		stroke: {
			curve: 'smooth',
			dashArray: [0, 8],
			width: [4, 2],
		},
		grid: {
			borderColor: $label_color,
		},
		legend: {
			show: false,
		},
		colors: [$danger_light, $strok_color],

		fill: {
			type: 'gradient',
			gradient: {
				shade: 'dark',
				inverseColors: false,
				gradientToColors: [$primary, $strok_color],
				shadeIntensity: 1,
				type: 'horizontal',
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100, 100, 100]
			},
		},
		markers: {
			size: 0,
			hover: {
				size: 5
			}
		},
		xaxis: {
			labels: {
				style: {
					colors: $strok_color,
				}
			},
			axisTicks: {
				show: false,
			},
			categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
			axisBorder: {
				show: false,
			},
			tickPlacement: 'on',
		},
		yaxis: {
			tickAmount: 5,
			labels: {
				style: {
					color: $strok_color,
				},
				formatter: function (val) {
					return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
				}
			}
		},
		tooltip: {
			x: { show: false }
		},
		series: [{
			name: "This Month",
			data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
		},
		{
			name: "Last Month",
			data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
		}
		],

	}

	var revenueChart = new ApexCharts(
		document.querySelector("#revenue-chart"),
		revenueChartoptions
	);

	revenueChart.render();
});