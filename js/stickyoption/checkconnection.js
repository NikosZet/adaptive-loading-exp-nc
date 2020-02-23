// Adaptive-loading util
var adaptiveLoading = {
    effectiveType: navigator.connection.effectiveType,
    deviceMemory: navigator.deviceMemory,
    logicalProcessors: navigator.hardwareConcurrency,

    networkCases: ['slow-2g', '2g', '3g', '4g'],
    memoryCases: ['0.25', '0.5', '1', '2', '4', '8'],
    processorCases: []
}

function isGoodConnection() {
    if (adaptiveLoading.effectiveType === adaptiveLoading.networkCases[0] ||
        adaptiveLoading.effectiveType === adaptiveLoading.networkCases[1] ||
        adaptiveLoading.effectiveType === adaptiveLoading.networkCases[2]) {
        return false;
    } else {
        return true;
    }
}
