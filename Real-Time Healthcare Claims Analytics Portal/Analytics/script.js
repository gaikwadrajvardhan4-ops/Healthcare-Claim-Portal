script.js


const claimsChart = document.getElementById('claimsChart');

new Chart(claimsChart,{
    type:'doughnut',
    data:{
        labels:['Approved','Pending','Rejected'],
        datasets:[{
            data:[8950,2300,1200],
            backgroundColor:[
                '#0d6efd',
                '#4da3ff',
                '#99c2ff'
            ]
        }]
    },
    options:{
        responsive:true
    }
});

const trendChart = document.getElementById('trendChart');

new Chart(trendChart,{
    type:'line',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun'],
        datasets:[{
            label:'Claims Processed',
            data:[1200,1500,1800,2200,2600,3150],
            borderColor:'#0d6efd',
            fill:false,
            tension:0.4
        }]
    },
    options:{
        responsive:true
    }
});