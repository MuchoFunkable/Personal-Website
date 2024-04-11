import { NextPage } from 'next';
import Head from "next/head";
import Menu from "./components/menu";
import Layout from './components/layout';
import styles from "styles/global.css";

const Projects: NextPage = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Projects</title>
          <meta name="description" content="Mick Kalle Mickelborg's technical, strategy, and personal projects, as well as his publications and research." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main">
          <div className="contentBlock">
            <div>
              <h2>Technical Projects</h2>
              <div className="divider"></div>
              <ul>
                <li>
                  <a
href="https://github.com/MuchoFunkable/Interactive-Framework-model">Interactive Recursive Framework for organizational and business modelling</a>
                </li>
                <ul>
                  <li>
                    <a href="https://interactive-framework-model-mick-kalle-mkal.replit.app/">Live Deployment of Prototype</a>
                  </li>
                </ul>
                <li>
                  <a href="https://github.com/MuchoFunkable/Open-Access-Research-Scraper---NER-Fine-tuning">Open Access Research Scraper & NER Model Fine-tuning for accurate text extraction</a>
                </li>
                <li>
                  <a
                href="https://github.com/JonathanIsTheCoolest/WisdmNewsAPI">Using Agentic Language Models to Disseminate Adverse Political Perspectives on Contentious Topics</a>
                </li>
                  <ul>
                    <li>
                      <a href="https://dirt-windscreen-7fd.notion.site/Wisdm-DSDP-0ce27e35335d4def9653b53d52053de4?pvs=74">Notion page for Project Management</a>
                    </li>
                  </ul>
              </ul>
            </div>
            <div>
              <h2>Publications</h2>
              <div className="divider"></div>
              <ul>
                <li>
                  <a href="https://siliconvalley.um.dk/insights/the-future-of-entrepreneurship">Future of Entrepreneurship</a>
                </li>
                <li>
                  <a href="https://siliconvalley.um.dk/insights/future-of-resilience">Future of Resilience</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Strategy Projects</h2>
              <div className="divider"></div>
              <ul>
                <li>
                  <a href="https://samarbejde.ku.dk/innovation/dokumenter/UCPH_innovation_strategy.pdf">Innovation Strategy for University of Copenhagen</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Research</h2>
              <div className="divider"></div>
              <ul>
                <li>
                  <a href="https://research-api.cbs.dk/ws/portalfiles/portal/98734239/1655977_Master_Thesis_The_Entrepreneurial_University_Mick_Kalle_Mickelborg_140646_.pdf">The Entrepreneurial University: An Exploration of the Approaches to Fostering Entrepreneurship at Educational Institutions at the University of California, Berkeley, and Copenhagen Business School, and the Implications for Aspiring Student Entrepreneurs</a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Projects;