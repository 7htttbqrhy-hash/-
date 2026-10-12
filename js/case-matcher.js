// Case Matcher
// Connects exam topics with reusable design-history cases.

const CASE_RULES = {
  "现代主义设计": ["包豪斯校舍", "巴塞罗那椅"],
  "功能主义": ["巴塞罗那椅", "瓦西里椅"],
  "工艺美术运动": ["红屋", "威廉·莫里斯"],
  "设计教育": ["包豪斯校舍", "包豪斯基础课程"],
  "设计与社会责任": ["约翰·拉斯金", "威廉·莫里斯"]
};

function matchCases(keyword) {
  const result = [];
  Object.keys(CASE_RULES).forEach(topic => {
    if (keyword.includes(topic)) {
      result.push(...CASE_RULES[topic]);
    }
  });
  return [...new Set(result)];
}

window.CaseMatcher = {
  matchCases
};
