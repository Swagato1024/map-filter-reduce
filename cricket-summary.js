const calculateExtraRuns = function(events) {
  return events.reduce(function(extraRuns, event) {
    if(event === 'NB' || event === 'WD') {
      extraRuns = extraRuns + 1;
    }

    return extraRuns;
  }, 0);
}

const calculateWickets = function(events) {
  return events.reduce(function(wickets, event) {
    if(event === 'W') {
      wickets =  wickets + 1;
    }

    return wickets;
  }, 0);
}

const isSpecialRun = function(event) {
  return event === 4 || event === 6; 
}

const summarize = function(overs) {
  const result = overs.flatMap(function(ball) {
    return ball;
  });

  const summary = result.reduce(function(summary, ball) {
    if(isSpecialRun(ball)) {
      const count = summary[ball] || 0;
      summary[ball] = count + 1;
    }
    return summary;
  }, {});

  summary['extraRuns'] = calculateExtraRuns(result);
  summary['wickets'] = calculateWickets(result);

  return summary;

}
console.log(summarize([[1, 'W', 4, 'WD', 6, 3], [2, 5, 'NB']]));
