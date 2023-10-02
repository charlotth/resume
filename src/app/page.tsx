import Experience from '@/components/Experience'
import Header from '@/components/Header'
import { GithubIcon, LocationIcon, MailIcon, PhoneIcon } from '@/components/Icons'
import Page from '@/components/Page'
import SkillGroup from '@/components/SkillGroup'
import Title from '@/components/Title'

export default function Home() {
  return (
    <>
      <Page
        header={
          <Header
            name="Thomas Charlot"
            title="Architecte logiciel senior"
            description="Fort de 15 ans d'expérience, dont 7 ans en tant que CTO et principal artisan de Datasweet, j'ai acquis une vision globale du métier d'architecte logiciel. Fédérateur, polyvalent, autonome et rigoureux, je saurai vous apporter les clefs pour réussir le développement de vos projets."
            avatar='https://media.licdn.com/dms/image/D4E03AQEYVx8kFjZZHQ/profile-displayphoto-shrink_200_200/0/1692695262237?e=1701907200&v=beta&t=wkWlrVZnAnOkHQkxNZIQsY5qGTihte7fxDBUwAXHl7s'
            items={[
              { icon: (<MailIcon />), label: "thomas.charlot@gmail.com" },
              { icon: (<PhoneIcon />), label: "06.38.18.09.79" },
              { icon: (<LocationIcon />), label: "Houilles (78)" },
              { icon: (<GithubIcon />), label: "github.com/datasweet" },
            ]}
          />
        }
        sider={
          <section className="flex flex-col">
            <Title icon="https://d.novoresume.com/yna_pub/svg/section/skills/white.svg">Compétences</Title>
            <SkillGroup title='Langages' skills={['Go', 'C#', 'Typescript', 'Javascript (ES6+)', 'Shell', 'Java', 'Python']} />
            <SkillGroup title='Frameworks & Librairies' skills={['.NET', 'React', 'Next.js', 'Mobx', 'Antd', 'Mui', 'Tailwind']} />
            <SkillGroup title='Base de données' skills={['Oracle', 'Postgres', 'SQL Server', 'Elasticsearch', 'Redis', 'MongoDB', 'Hive']} />
            <SkillGroup title='Cloud' skills={['Docker', 'Swarm', 'Kubernetes', 'Azure', 'GCP', 'IaC', 'Nats.io', 'RabbitMQ', 'Keycloak']} />
            <SkillGroup title='Pratiques' skills={['Software craftsmanship', 'Agilité', 'CI/CD', 'Micro service', 'OAuth', 'Design patterns', 'Clean architecture', 'CQRS', 'DDD', 'TDD']} />
            <SkillGroup title='Médias' skills={['Photoshop', 'Premiere', 'After Effect', 'Soundbooth', 'Image Magick']} />
          </section>
        }
      >
        <Title icon="https://d.novoresume.com/yna_pub/svg/section/work/white.svg">Expériences</Title>
        <Experience
          title="Practise Leader Data"
          society="Capfi"
          date="Mars 2023 à aujourd'hui"
          contact="Damien Beaudrey"
          description="Urbanisation SI. Projet basé sur le socle technique Datasweet (Go / React)"
          tasks={[
            "Ingestion des appels d'offres de différentes plateformes clientes : BNP, Natixis, SG, Engie, etc. Codé en Python",
            "Enrichissement des offres via OpenAI",
            "Orchestration, centralisation et réconciliation des données d'Hubspot, Strapi et Fitnet",
            "Création de dashboards analytiques",
          ]}
        />
        <Experience
          title="TechLead .NET"
          society="Société Générale"
          date="Novembre 2022 à mars 2023"
          contact="Marc Girollet"
          tasks={[
            "XOne : migration de projets .NET 4 vers .NET 7."
          ]}
        />
        <Experience
          title="TechLead .NET / Data engineer"
          society="Natixis"
          date="Mai 2021 à octobre 2022"
          contact="Geoffrey Lardé"
          description="Optimisation du processus de calcul d'observabilité des deals en J+1 (stock 1M de deals / jour)"
          tasks={[
            "Profiling .NET via les API Windows (C++)",
            "Réarchitecture du projet : CQRS, Producer / consumer pattern",
            "Correction des erreurs techniques (Linq, XmlSerializer, etc.)",
            "Gain obtenu : 66% sur le traitement global",
          ]}
        />
        <Experience
          title="TechLead Go / Data engineer"
          society="Figaro Classifieds"
          date="Décembre 2020 à avril 2021"
          description="Ingestion des annonces d'emploi de plateformes publiques"
          tasks={[
            "ETL : flow pattern en Go",
            "Contraintes fortes : ingérer plusieurs centaines de milliers d'annonces par jour dans des ressources limitées (proc / mémoire GCP)",
          ]}
        />
        <Experience
          title="Co-founder & CTO"
          society="Datasweet"
          date="Juillet 2016 à aujourd'hui"
          contact="Lionel Froment"
          description="Datasweet est une data-plateforme reposant sur Elasticsearch et couvrant toute la chaîne de valorisation de données : de la collecte des données brutes à la diffusion d'informations prêtes à l'emploi."
          tasks={[
            "Conception et développement de la plateforme en Go / React",
            "Micro (web) services avec Role Based Access Control",
            "ETL permettant la préparation automatisée de données",
            "API de search & query utilisée par des composants graphiques",
            "CI/CD avec Github Actions, Docker, Docker swarm"
          ]}
        />
      </Page>

      <Page
        header={
          <Header
            name="Thomas Charlot"
            title="Architecte logiciel senior"
          />
        }
        sider={
          <>
          <section className="flex flex-col">
            <Title icon="https://d.novoresume.com/yna_pub/svg/section/lang/white.svg">Langues</Title>
          <ul className="flex flex-col gap-4 text-md leading-relaxed -mr-2 mb-2">
            <li className="flex flex-col">Français<span className="italic text-sm">Maternelle</span></li>
            <li className="flex flex-col">Anglais<span className="italic text-sm">Intermédiaire (B2)</span></li>
            <li className="flex flex-col">Allemand<span className="i  talic text-sm">Basique (A1)</span></li>
          </ul>
        </section>
        <section className="flex flex-col">
          <Title icon="https://d.novoresume.com/yna_pub/svg/section/interests/white.svg">Loisirs</Title>
          <ul className="flex flex-wrap text-md leading-relaxed -mr-2 mb-2">
            <li className="px-2 mr-2 mb-2 text-sm text-primary-600 bg-white rounded">Vélo</li>
            <li className="px-2 mr-2 mb-2 text-sm text-primary-600 bg-white rounded">Running</li>
            <li className="px-2 mr-2 mb-2 text-sm text-primary-600 bg-white rounded">Escalade</li>
            <li className="px-2 mr-2 mb-2 text-sm text-primary-600 bg-white rounded">Judo</li>
            <li className="px-2 mr-2 mb-2 text-sm text-primary-600 bg-white rounded">Jeux vidéo</li>
            <li className="px-2 mr-2 mb-2 text-sm text-primary-600 bg-white rounded">Piano</li>
          </ul>
        </section>
        </>
        }
      >
        <Experience
          title="TechLead .NET"
          society="Natixis Asset Management"
          date="Janvier 2015 à juillet 2016"
          contact="Guillaume Lavergne"
          description="Conception et développement autour de Titan, framework en .NET 3.5/4 permettant à des clients lourds ou web de passer des ordres, calculer des positions, rapprocher les flux, etc."
          tasks={[
            "Conception et développement d'un service de centralisation de configuration",
            "Mise en place de logs via ETW",
            "Migration du composant CRD (envoi d'ordres) avec une contrainte forte : permettre l'utilisation des deux versions de la dll"
          ]}
          className="mt-4"
        />
        <Experience
          title="Développeur .NET"
          society="Société Générale CIB"
          date="Mai 2013 à janvier 2015"
          contact="Arnaud Tamaillon"
          description="Projet XOne : SI front-to-back MultiAssets (Fx, IRD, Crédits, Equity, Prêts / Emprunt Cash & Titres). Projet conduit en méthodes agiles avec une fréquence de release majeure mensuelle."
          tasks={[
            "Enrichissement du framework XOne Generic permettant la création de produits dont les caractéristiques peuvent évoluer à tout moment",
            "Conception et développement d'un service de booking automatique de produits structurés via messages TibcoEMS",
          ]}
        />
        <Experience
          title="Développeur .NET / Javascript"
          society="Éditions Larousse"
          date="Octobre 2008 à mai 2013"
          contact="Vincent Baugé"
          tasks={[
            "Refonte complète du site www.larousse.fr : SEO, moteur de recherche Lucene, .NET 4, HTML5, CSS3",
            "Batchs pour le traitement massif de textes & images",
            "Applications mobiles : iPhone, iPad, Android, WinJS, Windows Phone",
            "Ingénieur son et monteur vidéo",
          ]}
        />

        <Title icon="https://d.novoresume.com/yna_pub/svg/section/edu/white.svg">Formations</Title>
        <Experience
          title="Fondamentaux des marchés financiers"
          society="First Finance"
          date="2013"
        />
        <Experience
          title="Ingénieur en informatique - Génie Logiciel"
          society="UTBM"
          date="2008"
          description="Mineur : stratégie d'innovation et choix technologiques"
        />
        <Experience
          title="Baccalauréat Scientifique"
          society="Lycée Richelieu (92)"
          date="2002"
          description="Mention assez bien"
        />
      </Page>
    </>
  )
}