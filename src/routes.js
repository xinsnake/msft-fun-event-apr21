import VueRouter from 'vue-router'

import TitlePage from "@/components/RouterPages/TitlePage";
import IntroPage from "@/components/RouterPages/IntroPage";
import Section1Page from "@/components/RouterPages/Section1Page";
import Section1SelectionPage from "@/components/RouterPages/Section1SelectionPage";
import Section2Page from "@/components/RouterPages/Section2Page";
import Section3Page from "@/components/RouterPages/Section3Page";
import Section3SelectionPage from "@/components/RouterPages/Section3SelectionPage";
import Section4Page from "@/components/RouterPages/Section4Page";
import SingleQuestionPage from "@/components/RouterPages/SingleQuestionPage";
import ReadAndGuessPage from "@/components/RouterPages/ReadAndGuessPage";
import ThankYouPage from "@/components/RouterPages/ThankYouPage";
import ResetPage from "@/components/RouterPages/ResetPage";

const routes = [
  { path: '/title', component: TitlePage },
  { path: '/intro', component: IntroPage },
  { path: '/section-1', component: Section1Page },
  { path: '/section-1-selection', component: Section1SelectionPage },
  { path: '/section-2', component: Section2Page },
  { path: '/section-3', component: Section3Page },
  { path: '/section-3-selection', component: Section3SelectionPage },
  { path: '/section-4', component: Section4Page },
  { path: '/section-1/:qid', component: SingleQuestionPage },
  { path: '/section-2/:qid', component: ReadAndGuessPage },
  { path: '/section-3/:qid', component: SingleQuestionPage },
  { path: '/section-4/:qid', component: SingleQuestionPage },
  { path: '/thank-you', component: ThankYouPage },
  { path: '/reset', component: ResetPage },
]

export const Router = new VueRouter({
  routes
})
