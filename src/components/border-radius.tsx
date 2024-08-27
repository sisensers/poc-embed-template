export function modifyChartStyle(options: any) {

    let newOptions = {
        ...options,
        "plotOptions": {
            ...options.plotOptions,
            "column": {
                borderRadius: `10px`,
                borderWidth: 0,
                groupPadding: 0.1,
                pointPadding: 0.12,
            },
        },
        "yAxis": [{
            ...options.yAxis[0],
            gridLineWidth: 0,
            offset: 10,
        }],
        "xAxis": [{
            ...options.xAxis[0],
            offset: 10,
        }]
    }

    return newOptions;
}