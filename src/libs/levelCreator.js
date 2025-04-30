const urlQueryString = new URLSearchParams(window.location.search);

function parseQueryParamAsInt(param) {
  return parseInt(urlQueryString.get(param), 10);
}

// 안전하게 정수 파라미터 파싱 (0도 유효하게 처리)
function parseOrDefault(param, fallback) {
  const parsed = parseQueryParamAsInt(param);
  return Number.isNaN(parsed) ? fallback : parsed;
}

module.exports.parseLevelQueryString = function() {
  return {
    id: -1,
    title: urlQueryString.get('title') || 'Generated Level',
    waves: parseOrDefault('waves', 3),           // 라운드 수
    ducks: parseOrDefault('ducks', 5),           // 한 라운드 당 오리 수
    pointsPerDuck: parseOrDefault('points', 150),// 오리 당 점수
    speed: parseOrDefault('speed', 5),          // 오리 속도
    bullets: parseOrDefault('bullets', 80),      // 총알 수
    radius: parseOrDefault('radius', 60),        // 맞는 판정 범위
    time: parseOrDefault('time', 30)             // 라운드 제한 시간 (초)
  };
};

module.exports.urlContainsLevelData = function() {
  return window.location.href.indexOf('?') !== -1;
};