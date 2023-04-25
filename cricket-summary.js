const generateEventSheet = function(match) {
  return match.flatMap(function(event) {
    return event;
  });
}

const getSummaryFormat = function() {
  return {
    'total_runs': 0,
    'fours': 0,
    'sixes': 0,
    'wickets': 0,
    'wides': 0,
    'no_ball': 0
  }
}

const get_contribution = function (delivery) {
  const contribution = {
    '1': {'entry': 'ones', 'runs': 1, 'extra_runs': 0},
    '2': {'entry': 'twos', 'runs': 2, 'extra_runs': 0},
    '3': {'entry': 'threes', 'runs': 3, 'extra_runs': 0},
    '4': {'entry': 'fours', 'runs': 4, 'extra_runs': 0},
    '6': {'entry': 'sixes', 'runs': 6, 'extra_runs': 0},
    'W': {'entry': 'wickets', 'runs': 0, 'extra_runs': 0},
    'WD': {'entry': 'wides', 'runs': 0, 'extra_runs': 1},
    'NB': {'entry': 'no_ball', 'runs': 0, 'extra_runs': 1},
  }

  return contribution[delivery];
}

const generateSummary = function(eventSheet) {
  const summary = {};

  return eventSheet.reduce(function(summary, event) {
    const deliveryResult = get_contribution(event);

    summary.total_runs += deliveryResult.runs + deliveryResult.extra_runs;

    if(deliveryResult.entry in summary) { 
      summary[deliveryResult.entry] += 1;
    }

    return summary;
  },  getSummaryFormat());
} 

const summarize = function(overs) {
  const eventSheet = generateEventSheet(overs);
  const summary = generateSummary(eventSheet);

  return summary;
}

console.log(summarize([[1, 'W', 4, 'WD', 6, 3], [2, 4, 6, 'NB']]));

