new Chart(document.getElementById("predominance"), {

    type: 'doughnut',
    data: {
    labels: [
        'CP - Professional Development',
        'X5 - UX Design'
        ],
        datasets: [{
        label: ' Module Contribution (%)',
        data: [33.3, 66.67],
        backgroundColor: [
            '#393E46',
            '#0E5E6F'
        ],
        hoverOffset: 4
        }]
    }
});
