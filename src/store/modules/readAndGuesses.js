const state = () => ({
  azure1: {
    1: 'It guaranteed speed at any scale – even through bursts – with instant, limitless elasticity.',
    2: 'It has fast, flexible app development with SDKs for popular languages and no-ETL (extract, transform, load) analytics.',
    3: 'It is ready for mission-critical applications with guaranteed business continuity, 99.999-per cent availability and enterprise-level security.',
    4: 'It ensure business continuity with turnkey multi-master replication and enterprise-grade security and compliance, including end-to-end encryption and access control.',
    5: 'It is a fully managed and cost-effective serverless database.',
    6: 'It has a native Core (SQL) API along with APIs for MongoDB, Cassandra and Gremlin.',
    answer: 'Azure Cosmos DB'
  },
  azure2: {
    1: 'It eliminates polling – and the associated cost and latency.',
    2: 'You can build better, more reliable applications through reactive programming, capitalising on guaranteed event delivery and the high availability of the cloud.',
    3: 'It is designed for high availability, consistent performance and dynamic scale, and lets you focus on your app logic rather than infrastructure.',
    4: 'It helps you to develop richer application scenarios by connecting multiple possible sources and destinations of events.',
    5: 'With this service, event publishers are decoupled from event subscribers using a pub/sub model and simple HTTP-based event delivery',
    6: 'It allows your business logic can be triggered by virtually all Azure services, as well as custom sources.',
    answer: 'Event Grid'
  },
  azure3: {
    1: 'It increases app responsiveness by leveraging performance routing.',
    2: 'It seamlessly combine on-premises systems and cloud systems.',
    3: 'You can get actionable insights based on user traffic volumes and patterns.',
    4: 'It provides you with Geographic routing capabilities to ensure content localisation and adherence to data sovereignty regulations.',
    5: 'It operates at the DNS layer to quickly and efficiently direct incoming DNS requests based on the routing method of your choice.',
    6: 'It can direct your customer traffic and distribute it across multiple locations, such as multiple cloud services or multiple Azure web apps.',
    answer: 'Traffic Manager'
  },
  azure4: {
    1: 'It is fully programmable and API-driven, and is synonymous with cloud native development.',
    2: 'You can use it to deliver and protect your global application close to your end users with a battle-tested service built on world-class Microsoft global network infrastructure.',
    3: 'It secure your private back-end services and harden your service using Microsoft managed and custom rule sets.',
    4: 'It always keep your traffic on the best path to your app, improve your service scale, reduce latency and increase throughput for your global users',
    5: 'It boosts your app reliability and performance – flexibly route your users to the closest available origin – with instant failover – for changes in availability or on-the-path performance from your users to your origin.',
    6: 'It integrates seamlessly with Azure Services, including Azure App Service, Media Services, Storage, Monitor, Cloud Services and Private Link.',
    answer: 'Azure Front Door'
  },
  azure5: {
    1: 'You can test your hypotheses and reveal hidden patterns using the advanced analytic engine.',
    2: 'It integrates with popular DevOps, issue management, IT service management, and security information and event management tools.',
    3: 'It helps you to maximise performance and availability of your applications and proactively identify problems in seconds.',
    4: 'It store and analyses all your operational telemetry in a centralised, fully managed, scalable data store.',
    5: 'It collects, analyses and acts on telemetry data from your Azure and on-premises environments.',
    6: 'You can use the powerful analytics platform and extensive query language to analyse, interact with and derive insights from huge volumes of operational data in seconds.',
    answer: 'Azure Monitor'
  },
  azure6: {
    1: 'It helps you stay ahead of new and evolving threats.',
    2: 'It provides multiple layers of protection to help guard devices against and respond to threats.',
    3: 'It makes it easy to add new features and improve performance throughout device lifecycles.',
    4: 'It helps protect your data, privacy, physical safety and infrastructure.',
    5: 'It helps you secure existing equipment and build protection into new IoT investments.',
    6: 'It is a comprehensive IoT security solution – including hardware (crossover microcontroller), OS and cloud components for IoT device security.',
    answer: 'Azure Sphere'
  },
})

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
