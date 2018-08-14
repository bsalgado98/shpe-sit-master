var config = {
                
                labels: 'yes',
                datasets: [{
                    label: "E-Board Members",
                    fill: false,
                    data: ['Athina', 'Aolanie', 'Bruno', 'Christina', 'Concetta', 'Eric', 'Gio', 'Gurpreet', 'Ivette', 'Ivy', 'Tiffany'],
                    yAxisID: "Headshots",
                    borderWidth: 8,
                }]
            };

                
            var ctx = document.getElementById('joke').getContext('2d');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: config,
                        options: {
                            responsive: true,
                            hoverMode: 'index',
                            stacked: false,
                            title:{
                                display: true,
                                text:'People who have given me headshots'
                            },
                            scales: {
                                yAxes: [{
                                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                    display: true,
                                    position: "left",
                                    id: "TestTime Y",
                                }],
                            }
                        }
                    });