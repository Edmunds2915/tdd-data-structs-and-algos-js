//Source: https://gist.github.com/UsabilityEtc/09305c0186509a6e05efe318983c2879s

export function randomDataSet(dataSetSize, minValue, maxValue) {
    return new Array(dataSetSize).fill(0).map(function(n) {
      return Math.random() * (maxValue - minValue) + minValue;
    });
  }