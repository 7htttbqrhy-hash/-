// Case Detail Renderer
// Renders standardized case study cards from case schema

function renderCaseDetail(caseData) {
  return {
    title: caseData.name,
    overview: caseData.overview || {},
    background: caseData.background || '',
    concept: caseData.concept || '',
    features: caseData.features || [],
    examValue: caseData.examValue || {}
  };
}

function getCaseExamTips(caseData) {
  return caseData.examValue?.answerTemplate || [];
}

export { renderCaseDetail, getCaseExamTips };
