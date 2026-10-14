<!--
{
  "date": "2026-10-14",
  "image": "what-is-entity-seo",
  "imageAlt": "What is entity SEO? Optimizing a website so search engines identify its entities, their attributes and their relations.",
  "section": "Entity SEO",
  "keywords": ["entity SEO", "what is entity SEO", "entity-based SEO", "knowledge graph", "entity schema", "semantic SEO"],
  "about": [
    {"name": "Entity SEO"},
    {"name": "Search engine optimization", "sameAs": "https://www.wikidata.org/wiki/Q180711"}
  ],
  "mentions": [
    {"name": "Google Knowledge Graph", "sameAs": "https://www.wikidata.org/wiki/Q648625"},
    {"name": "Schema.org", "sameAs": "https://www.wikidata.org/wiki/Q3475322"},
    {"name": "Wikidata", "sameAs": "https://www.wikidata.org/wiki/Q2013"}
  ]
}
-->
# What Is Entity SEO? A Practical Guide

Meta Title: What Is Entity SEO? A Practical Guide
Meta Description: Entity SEO helps search engines identify the people, places, products and concepts on your site. Learn how it works and how to do it in 6 steps.

[[answer]]
Entity SEO is the practice of optimizing a website so search engines identify the entities on it, understand their attributes and relations, and connect the website to those entities. An entity is a single, identifiable thing, such as a person, a place, an organization, a product or a concept like the color blue.

Google announced the Knowledge Graph on 16 May 2012 under the title "things, not strings" ([Google, 2012](https://blog.google/products/search/introducing-knowledge-graph-things-not/)). The announcement marked a shift from matching keywords to understanding real-world things and the facts that connect them, such as the population of a city or the founder of a company. Search data shows the size of that shift: in a Yahoo! study of real web queries, 40.60% were entity queries, and over 70% contained an entity, a type, an attribute or a relation ([Pound, Mika and Zaragoza, 2010](https://archives.iw3c2.org/www2010/proceedings/www/p771.pdf)).

This guide covers entity SEO in 9 parts: the meaning of an entity, how search engines read entities, the difference from keyword SEO and semantic SEO, the core concepts, a 6-step method, recognition checks, examples by business type, the role of entities in AI search, and entity SEO services. Each part answers a question that people search for, such as "how to do entity SEO" or "entity SEO vs semantic SEO".

[[toc]]

## What Is an Entity in Entity SEO?

A Google patent defines an entity as "a thing or concept that is singular, unique, well-defined and distinguishable" ([US10339190B2](https://patents.google.com/patent/US10339190B2/en)). A related Google patent separates an entity from an entity reference, which is the text string that names the entity, such as "New York City" ([US11928168B2](https://patents.google.com/patent/US11928168B2/en)). Entity SEO optimizes for the entity itself, not only for the strings that point to it.

Business websites mention 5 common entity types:

1. **People**, such as Douglas Adams or the founder of a company
2. **Places**, such as Kathmandu or the service area of a plumber
3. **Organizations**, such as Google or a local dental clinic
4. **Products**, such as a running shoe model with its own GTIN
5. **Concepts**, such as entity SEO or the color blue

Every entity has a record and an ID in a knowledge base. Wikidata stores Douglas Adams, the British science fiction writer, under the ID [Q42](https://www.wikidata.org/wiki/Q42), and an American environmental engineer with the same name under [Q28421831](https://www.wikidata.org/wiki/Q28421831). The ID keeps two people with one name apart, and it connects every mention of the same person across languages and websites.

Wikidata holds over 120 million items, worked on by over 24,000 volunteers ([Wikimedia Deutschland, 2026](https://upload.wikimedia.org/wikipedia/commons/8/8f/Jahresbericht_2025_Wikimedia_Deutschland.pdf)). These items give websites and knowledge bases a shared set of IDs, such as Q42, for the same things.

[[figure:what-is-an-entity|1200x675|Card that asks what an entity is and answers with the patent definition, next to two Wikidata records named Douglas Adams: Q42, the British writer, and Q28421831, an American engineer.|One name, two entities: Wikidata keeps Douglas Adams the writer (Q42) and Douglas Adams the engineer (Q28421831) apart by ID.]]

### Entity vs Keyword

A keyword is a string of characters that a person types into a search box. An entity is a record that many strings point to, such as "NYC", "New York City" and "the Big Apple" for one city ([Search Engine Journal](https://www.searchenginejournal.com/entity-seo/492947/)).

Google's 2012 announcement used the query [taj mahal] to show the gap between strings and things. The query can mean a monument, a Grammy Award-winning musician, a casino in Atlantic City or, depending on context, the nearest Indian restaurant ([Google, 2012](https://blog.google/products/search/introducing-knowledge-graph-things-not/)).

Google's rater guidelines give a second example. The query [ada] has three common interpretations: the Americans with Disabilities Act, the American Dental Association and the American Diabetes Association ([Google, 2025](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)). The guidelines rate none of the three official homepages as Fully Meets, because no interpretation dominates. Entity SEO removes this doubt on a page by naming the entity clearly and stating the attributes that set it apart.

### Attributes, Values and Relationships

Search engines store facts about an entity as triples. Each triple joins an entity, an attribute and a value, such as Nepal, capital and Kathmandu. Holistic SEO calls this structure the entity-attribute-value (EAV) model ([Holistic SEO](https://www.holisticseo.digital/seo-research-study/entity-attribute-value)).

| Entity | Attribute | Value |
|---|---|---|
| Nepal | Capital | Kathmandu |
| Nepal | Highest point | Mount Everest |
| Nepal | Currency | Nepalese rupee |

A relationship links two entities, such as Kathmandu and Nepal through the attribute "capital". Holistic SEO notes that the attributes on a page define its context more than the entity name does. A page about the Nepalese rupee and a page about Mount Everest share the entity Nepal, but they serve different searches.

[[tool:triple]]

## How Search Engines Understand Entities in Entity SEO

Search engines process entities in 5 stages, and entity SEO supports each stage:

1. **Recognize:** find names in a text, such as "Kathmandu" or "Google"
2. **Link:** map each name to one record in a knowledge base
3. **Attach facts:** read the attributes and relations of the entity
4. **Rank:** compare pages on relevance, quality and trust
5. **Answer:** show a link, a knowledge panel or an AI summary

The [How Search Works guide](/how-search-works/) on this website shows these stages as a diagram. The sections below explain the knowledge base behind the stages, the recognition step, salience and the role of entities in answers.

### The Knowledge Graph

Google's Knowledge Graph is a knowledge base of entities and the facts that connect them. At launch in May 2012, it held more than 500 million objects and more than 3.5 billion facts, rooted in public sources such as Freebase, Wikipedia and the CIA World Factbook ([Google, 2012](https://blog.google/products/search/introducing-knowledge-graph-things-not/)). By December 2012, Google reported 570 million entities and 18 billion facts, as listed in its Knowledge Vault paper ([Dong et al., 2014](https://lunadong.com/publication/kv_kdd.pdf)).

By 2020, the graph held over 500 billion facts about five billion entities ([Google, 2020](https://blog.google/products/search/about-knowledge-graph-and-knowledge-panels/)). Microsoft's Bing graph held over one billion entities and more than 21 billion facts in 2015 ([Dagstuhl Manifesto, 2023](https://arxiv.org/pdf/2308.04161)).

[[chart:timeline]]

Web pages feed these graphs with facts. Google's Knowledge Vault research extracted about 1.6 billion candidate facts from the web, and about one third of its 271 million confident facts were new to Freebase ([Dong et al., 2014](https://lunadong.com/publication/kv_kdd.pdf)). The same paper found that 71% of people in Freebase had no known place of birth in October 2013, which shows how many facts a curated knowledge base can miss.

Knowledge panels show these facts in search results. Google describes knowledge panels as elements that give context and basic information about people, places or things that Google knows about ([Google, 2019](https://storage.googleapis.com/gweb-uniblog-publish-prod/documents/How_Google_Fights_Disinformation.pdf)). In a Google eye-tracking study, mean satisfaction rose from 5.28 to 5.69 on a 7-point scale when a Knowledge Graph panel appeared ([Lagun et al., 2014](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43224.pdf)).

### Entity Recognition and Entity Linking

Named entity recognition finds the names of people, places and organizations in a text, such as "Mercury" in a sentence about planets. Entity linking maps each name to one record in a knowledge base, so "Mercury" points to the planet and not to the chemical element ([Holistic SEO](https://www.holisticseo.digital/theoretical-seo/named-entity-recognition/)). Google holds patents on models that predict which entity a text refers to, such as [US9251141B1](https://patents.google.com/patent/US9251141B1/en), although a patent shows a method and does not prove that Search uses it.

Entities fill most search queries. The Yahoo! study labeled 40.60% of sampled queries as entity queries and 12.13% as type queries ([Pound, Mika and Zaragoza, 2010](https://archives.iw3c2.org/www2010/proceedings/www/p771.pdf)). A Microsoft study of 200 query-click pairs found an entity in 43% of queries and an entity category in another 14% ([Lin et al., 2012](https://patrickpantel.com/download/papers/2012/www12.pdf)).

[[chart:queries]]

A 2009 study reported named entities in 71% of queries, but Lin et al. note that it does not state whether repeated queries were counted. Entity SEO answers this demand by matching each page to one main entity and its attributes.

### Entity Salience

Salience measures how central an entity is to a text. Google's Cloud Natural Language API scores salience in a range from 0 to 1.0, and scores close to 1.0 mark highly salient entities ([Google Cloud](https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Entity)).

Research by Carnegie Mellon University and Google on 110,639 New York Times articles found that only about 14% of mentioned entities were salient ([Dunietz and Gillick, 2014](https://aclanthology.org/E14-4040.pdf)). A rule that marked entities in the first sentence as salient reached an F1 score of 46.2, and a model that also counted repeated mentions reached 61.6. Entity SEO applies the finding in 2 ways: the main entity appears in the title, the H1 and the first sentence, and the page keeps naming it in later paragraphs.

### Entities in Answers and AI Results

A Google patent describes a system that answers "who" questions by choosing the entity reference that appears most often in the top search results ([US11928168B2](https://patents.google.com/patent/US11928168B2/en)). Answers built this way depend on pages that name entities clearly.

Google's Knowledge-Based Trust research scored 119 million webpages by the correctness of their facts ([Dong et al., 2015](https://arxiv.org/pdf/1502.03519)). The score barely tracked PageRank: 14 of 15 known gossip websites ranked in the top 15% by PageRank but in the bottom 50% by factual trust. Google has not confirmed this method as a ranking factor, so entity SEO treats it as research context and not as a rule.

## Entity SEO vs Keyword SEO vs Semantic SEO

Entity SEO, keyword SEO and semantic SEO overlap, but each approach optimizes a different unit. The table compares the 3 approaches on 5 points.

| Point | Keyword SEO | Entity SEO | Semantic SEO |
|---|---|---|---|
| Unit of optimization | A query string, such as "dentist kathmandu" | A thing with an ID, such as a dental clinic | A topic and its network of meanings |
| Relevance signal | Matching words and close variants | Clear entities, attributes and relations | Coverage, context and links between pages |
| Planning tool | Keyword list | Entity and attribute map | Topical map |
| Typical output | One page per keyword group | Pages and markup that define entities | A connected set of pages around a topic |
| The query [ada] | One string to match | Three separate entities to tell apart | Context that shows which meaning a page serves |

Holistic SEO treats entities as one layer of semantic SEO, next to context, topical maps and query networks ([Holistic SEO](https://www.holisticseo.digital/theoretical-seo/semantic/)). Ahrefs argues that entity SEO is simply good SEO ([Ahrefs](https://ahrefs.com/blog/entity-seo/)). Both views lead to the same practice: name entities clearly, state their facts and connect related pages.

## Core Concepts Behind Entity SEO

Entity SEO rests on 5 concepts from semantic SEO, most of them defined by Koray Tugberk Gubur of Holistic SEO. The concepts decide which entity a website centers on, which attributes it covers and how its pages connect.

### Central Entity and Source Context

The central entity is the main entity that a website covers, such as books for a bookstore or dental care for a clinic. Source context is the purpose of the website and the way it earns, such as selling books online ([Holistic SEO](https://www.holisticseo.digital/seo-research-study/topical-map)).

Holistic SEO uses a book e-commerce website as its example of source context. A bookstore covers the attributes that help a buyer choose, such as author, genre, format and price, because its source context is selling books.

### Attribute Prominence, Relatedness and Popularity

Holistic SEO ranks the attributes of an entity by prominence, relatedness and popularity ([Holistic SEO](https://www.holisticseo.digital/seo-research-study/entity-seo/)). Prominence measures how much an attribute defines the entity, relatedness measures how close it sits to the source context, and popularity measures how often people search for it. For a dental clinic, the attribute "treatment price" scores high on all 3 measures, while "year founded" scores low on popularity.

### Topical Map and Contextual Bridges

A topical map is a plan of the topics, subtopics and query networks that a website covers for its central entity ([Holistic SEO](https://www.holisticseo.digital/seo-research-study/topical-map)). The map grows in 3 directions: more entities, more attributes or deeper context. A contextual bridge is a passage or link that connects two related topics, such as a link from a page about teeth whitening to a page about whitening costs.

### Entity Authority and Topical Authority

Topical authority describes how much a search engine trusts a source on a topic. Koray Tugberk Gubur frames topical authority as topical coverage multiplied by historical data ([Oncrawl](https://www.oncrawl.com/technical-seo/importance-topical-authority-semantic-seo/)).

Entity authority adds the real-world side. Google's rater guidelines apply reputation research to both the website and the actual company, organization or entity behind it, and they call Trust the most important member of the E-E-A-T family ([Google, 2025](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)). Entity SEO supports trust by keeping the facts about an entity consistent on every page and profile.

### Cost of Retrieval

Cost of retrieval is the effort a search engine spends to crawl, process and rank content ([Holistic SEO](https://www.holisticseo.digital/seo-research-study/entity-attribute-value)). Duplicate pages and unneeded URLs, such as filter combinations and thin tag pages, raise that cost. Entity SEO lowers it by giving each entity and attribute one clear page or section.

## How to Do Entity SEO in 6 Steps

Entity SEO follows 6 steps, from mapping the entity to building its identity across the web. Each step below names the action, the method, an example and one mistake to avoid.

[[figure:entity-seo-steps|1200x675|Card that asks how to do entity SEO and lists 6 steps: map the entity, plan the topical map, write for entity clarity, link entities, add structured data and build the entity identity.|The 6 steps of entity SEO, from entity mapping to entity building.]]

### Step 1. Map the Central Entity and Its Attributes

Entity mapping lists the central entity, its type, its attributes and its related entities in one sheet. The sheet holds 6 columns: entity, type, attribute, value, source and ID, such as a Wikidata Q-ID when one exists.

A dental clinic in Kathmandu maps its services, dentists, location, opening hours and prices as attributes. The mistake to avoid is mapping keyword variants, such as "dentist near me" and "dentist nearby", as separate attributes.

### Step 2. Plan a Topical Map From the Attributes

A topical map turns the attribute list into pages and sections. Each core attribute gets a page or a section in order of prominence, relatedness and popularity, and contextual bridges connect the pages ([Holistic SEO](https://www.holisticseo.digital/seo-research-study/topical-map)).

The dental clinic gives each treatment, such as root canal treatment and braces, its own page, and it covers opening hours in a section of the contact page. The mistake to avoid is one page per keyword variant, which raises the cost of retrieval.

### Step 3. Optimize Content for Entity Clarity

Entity optimization makes each entity easy to recognize on a page. The page uses one consistent name per entity, places the main entity early and names co-entities that remove doubt, such as "NASA" and "the Sun" next to "Mercury" the planet ([Search Engine Journal](https://www.searchenginejournal.com/entity-seo/492947/)).

Facts belong in plain sentences, lists and tables, because even large knowledge bases miss many facts, as the Freebase gap above shows. The mistake to avoid is hiding core facts, such as prices or service areas, in images or vague marketing copy.

### Step 4. Link Entities Inside the Site and to Trusted References

Entity linking connects each entity mention to its best page on the site and, where it removes doubt, to one trusted reference outside it, such as an official website or a Wikidata item. The anchor text names the entity, such as "root canal treatment" instead of "click here".

Internal links to the entity home, such as the About page of a person or the homepage of a company, help search engines identify the URL that represents the entity. The mistake to avoid is generic anchors, which carry no entity meaning.

### Step 5. Mark Up Entities With Structured Data

Structured data describes an entity in a format that machines read directly. Google recommends JSON-LD and documents Organization markup for details such as a logo, an address and contact points ([Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data); [Organization markup](https://developers.google.com/search/docs/appearance/structured-data/organization)). The schema.org property [sameAs](https://schema.org/sameAs) connects an entity to its profiles, such as Wikidata, LinkedIn and GitHub.

Most websites leave part of this gap open. JSON-LD appears on 43% of home pages, but Organization markup appears on 26.2% and Person markup on 5.9% of mobile home pages ([HTTP Archive, 2025](https://docs.google.com/spreadsheets/d/1MoWoxogYWH6fv5r485EttvVgJuw7dMzzcot66X3MWu4/edit#gid=943142477)).

[[chart:markup]]

Wikidata links are rarer still: only 0.2% of mobile pages used sameAs to link to wikidata.org in 2024, against 4.5% for facebook.com ([HTTP Archive, 2024](https://docs.google.com/spreadsheets/d/1GWniSGupK6KgME7urV7ff0iWStzopGXqnQvJ3_-ynD4/edit#gid=560419533)). Markup also grew more detailed: the average JSON-LD page carried 52 RDF quads, or machine-readable statements, in 2022, up from 10 in 2015 ([Brinkmann, Primpeli and Bizer, 2023](https://www.uni-mannheim.de/media/Einrichtungen/dws/Files_Research/Web-based_Systems/pub/Brinkmann-etal-TheWDCSchemaorgDataSetSeries-WWW2023.pdf)).

Markup must match the visible page. Google found that pages from 61% of hosts with Dataset markup did not describe datasets, and it filters them with a classifier ([Alrashed et al., 2021](https://people.csail.mit.edu/tarfah/papers/dataset.pdf)). In Google's Knowledge Vault research, only 0.25 million of 140 million facts read from markup alone reached high confidence ([Dong et al., 2014](https://lunadong.com/publication/kv_kdd.pdf)). The mistake to avoid is markup that claims facts the page does not show.

[[tool:schema]]

### Step 6. Build a Consistent Entity Identity Across the Web

Entity building repeats the same core facts about an entity on trusted sources, such as business profiles, directories and Wikidata. Google generates knowledge panels automatically, and the subject of a panel can claim it after verification ([Google, 2020](https://blog.google/products/search/about-knowledge-graph-and-knowledge-panels/); [Knowledge panel help](https://support.google.com/knowledgepanel/answer/9787176)).

The source of a fact decides whether a knowledge base accepts it. When Google offered machine-extracted facts to Wikidata, the facts were usually accurate, but many source pages failed the reliability rules of Wikidata, such as pages from social network sites and reviews on shopping sites ([Pellissier Tanon et al., 2016](https://archives.iw3c2.org/www2016/WWW2016-Proceedings/proceedings/p1419.pdf)).

Knowledge panels often carry Wikipedia links. In one study, Wikipedia appeared on 58% of Google results pages, and on 69% when Knowledge Panel links were counted ([Vincent et al., 2019](https://arxiv.org/pdf/1906.08576)). The mistake to avoid is inconsistent facts, such as two different founding years on two profiles.

An entity map and a topical map turn these 6 steps into a page plan for one website.

[[cta:inline]]

## How to Check Whether Google Recognizes Your Entity

Entity SEO needs a baseline before the work starts and a comparison after it ends. Six free checks show whether Google and Wikidata recognize an entity:

1. **Knowledge Graph Search API:** a lookup returns the ID, type, description and result score of an entity ([Google for Developers](https://developers.google.com/knowledge-graph))
2. **Knowledge panel:** a search for the brand or person name shows whether a panel appears and which facts it shows
3. **Natural Language API demo:** a sample text returns the entities that Google's model recognizes and their salience scores
4. **Rich Results Test and Schema Markup Validator:** both tools read the structured data on a page and report errors
5. **Wikidata search:** a search shows whether the entity has a Q-ID and which facts the item holds
6. **Search Console:** the Performance report shows the queries that contain the brand name and the entity names

[[tool:check]]

Repeating the same 6 checks every quarter shows whether entity SEO work changes recognition over time.

## Entity SEO Examples by Business Type

Entity SEO looks different for each business model. Three examples show the entity, its attributes and its markup for a local service business, an e-commerce store and a personal brand.

**Local service business.** A plumbing company is an organization entity with attributes such as services, service areas and opening hours. The company keeps these facts identical on its website and its Google Business Profile, and it marks up its homepage with LocalBusiness markup. Websites with LocalBusiness markup grew from 386,000 to 1.2 million in the five years to 2022, yet the markup appears on only 5.0% of mobile home pages ([Brinkmann, Primpeli and Bizer, 2023](https://www.uni-mannheim.de/media/Einrichtungen/dws/Files_Research/Web-based_Systems/pub/Brinkmann-etal-TheWDCSchemaorgDataSetSeries-WWW2023.pdf); [HTTP Archive, 2025](https://docs.google.com/spreadsheets/d/1MoWoxogYWH6fv5r485EttvVgJuw7dMzzcot66X3MWu4/edit#gid=943142477)).

**E-commerce store.** An online store sells product entities, each with a brand, a model and identifiers such as a GTIN or an MPN. Product markup carries these identifiers, but few websites fill them: 98.67% of websites that mark up products include the product name, while 4.06% include gtin13 and 8.59% include mpn ([Brinkmann, Primpeli and Bizer, 2023](https://www.uni-mannheim.de/media/Einrichtungen/dws/Files_Research/Web-based_Systems/pub/Brinkmann-etal-TheWDCSchemaorgDataSetSeries-WWW2023.pdf)). Category pages group the products by attributes, such as size or material.

**Personal brand.** A consultant is a person entity with attributes such as a job title, skills and credentials. This website, dilbdrbk.com.np, uses its [About page](/about/) as the entity home, and its Person markup lists 11 sameAs profiles, such as LinkedIn and GitHub, under one consistent name. Person markup appears on 5.9% of mobile home pages ([HTTP Archive, 2025](https://docs.google.com/spreadsheets/d/1MoWoxogYWH6fv5r485EttvVgJuw7dMzzcot66X3MWu4/edit#gid=943142477)).

## Why Entity SEO Matters for AI Search

AI search reads entities before it writes an answer. Google states that AI Overviews and AI Mode may use a "query fan-out" technique, issuing multiple related searches across subtopics and data sources to develop a response ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). Each related search gives an entity-clear page another chance to appear as a supporting link.

Entity SEO affects AI answers in 3 ways:

1. **Models learn frequent entities better.** BLOOM-176B answered questions with 25% accuracy when about 10 training documents contained both the question entity and the answer entity, and with above 55% accuracy at about 10,000 documents ([Kandpal et al., 2023](https://arxiv.org/pdf/2211.08411)).
2. **Knowledge graphs ground answers.** Google's DataGemma research raised the factual accuracy of a model's statistics from a range of 5% to 17% to about 58% by grounding the model in Data Commons, a knowledge graph built with Schema.org ([Radhakrishnan et al., 2024](https://arxiv.org/pdf/2409.13741)).
3. **Entity hubs now serve AI builders.** Wikimedia Deutschland released a Wikidata vector database for AI developers in autumn 2025, with about 23 million items in its first phase and 100,000 to 150,000 accesses a month ([Wikimedia Deutschland, 2026](https://upload.wikimedia.org/wikipedia/commons/8/8f/Jahresbericht_2025_Wikimedia_Deutschland.pdf)).

Consistent entity facts give AI systems the same answer from every source they read. The [GEO and AEO section](/expertise/#geo-aeo) of the Expertise page shows how this website approaches AI search.

## Entity SEO Services: Get an Entity Map for Your Site

Entity SEO services turn the method above into a plan for one website. I deliver 4 outputs in an entity SEO project:

1. **Entity and attribute map:** the central entity, its attributes, its related entities and their IDs
2. **Topical map:** a page-or-section decision for every core attribute
3. **Structured data plan:** Organization, Person, LocalBusiness or Product markup with sameAs links
4. **Entity identity audit:** a check of the facts on the website, its profiles and knowledge bases such as Wikidata

The service fits local service businesses, e-commerce stores and B2B companies, such as the 25+ industries on the [Industries page](/industries/).

[[cta:services]]

## Sources

These sources support the entity SEO facts in this guide, listed in order of first use.

- [Google: Introducing the Knowledge Graph: things, not strings (Amit Singhal, 16 May 2012)](https://blog.google/products/search/introducing-knowledge-graph-things-not/)
- [Pound, Mika and Zaragoza: Ad-hoc Object Retrieval in the Web of Data, WWW 2010 (PDF)](https://archives.iw3c2.org/www2010/proceedings/www/p771.pdf)
- [Google patent US10339190B2](https://patents.google.com/patent/US10339190B2/en)
- [Google patent US11928168B2: Question answering using entity references in unstructured data](https://patents.google.com/patent/US11928168B2/en)
- [Wikidata: Douglas Adams (Q42)](https://www.wikidata.org/wiki/Q42) and [Douglas Adams (Q28421831)](https://www.wikidata.org/wiki/Q28421831)
- [Wikimedia Deutschland: Jahresbericht 2025, annual report (PDF, German)](https://upload.wikimedia.org/wikipedia/commons/8/8f/Jahresbericht_2025_Wikimedia_Deutschland.pdf)
- [Search Engine Journal: Entity SEO](https://www.searchenginejournal.com/entity-seo/492947/)
- [Google: Search Quality Rater Guidelines, 11 September 2025 (PDF)](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)
- [Holistic SEO: Entity-Attribute-Value](https://www.holisticseo.digital/seo-research-study/entity-attribute-value)
- [Dong et al.: Knowledge Vault, KDD 2014 (PDF)](https://lunadong.com/publication/kv_kdd.pdf)
- [Google: A reintroduction to our Knowledge Graph and knowledge panels (Danny Sullivan, 20 May 2020)](https://blog.google/products/search/about-knowledge-graph-and-knowledge-panels/)
- [Current and Future Challenges in Knowledge Representation and Reasoning, Dagstuhl Manifesto (PDF)](https://arxiv.org/pdf/2308.04161)
- [Google: How Google Fights Disinformation, February 2019 (PDF)](https://storage.googleapis.com/gweb-uniblog-publish-prod/documents/How_Google_Fights_Disinformation.pdf)
- [Lagun, Hsieh, Webster and Navalpakkam: Towards Better Measurement of Attention and Satisfaction in Mobile Search, SIGIR 2014 (PDF)](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43224.pdf)
- [Holistic SEO: Named Entity Recognition](https://www.holisticseo.digital/theoretical-seo/named-entity-recognition/)
- [Google patent US9251141B1](https://patents.google.com/patent/US9251141B1/en)
- [Lin, Pantel, Gamon, Kannan and Fuxman: Active Objects: Actions for Entity-Centric Search, WWW 2012 (PDF)](https://patrickpantel.com/download/papers/2012/www12.pdf)
- [Google Cloud: Natural Language API, Entity reference](https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Entity)
- [Dunietz and Gillick: A New Entity Salience Task with Millions of Training Examples, EACL 2014 (PDF)](https://aclanthology.org/E14-4040.pdf)
- [Dong et al.: Knowledge-Based Trust: Estimating the Trustworthiness of Web Sources, PVLDB 2015 (PDF)](https://arxiv.org/pdf/1502.03519)
- [Holistic SEO: Semantic SEO](https://www.holisticseo.digital/theoretical-seo/semantic/)
- [Ahrefs: Entity SEO](https://ahrefs.com/blog/entity-seo/)
- [Holistic SEO: Topical Map](https://www.holisticseo.digital/seo-research-study/topical-map)
- [Holistic SEO: Entity SEO](https://www.holisticseo.digital/seo-research-study/entity-seo/)
- [Oncrawl: Importance of Topical Authority: A Semantic SEO Case Study (Koray Tuğberk Gübür)](https://www.oncrawl.com/technical-seo/importance-topical-authority-semantic-seo/)
- [Google Search Central: Introduction to structured data markup](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Search Central: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Schema.org: sameAs](https://schema.org/sameAs)
- [HTTP Archive: Web Almanac 2025 results sheet, schema.org types and formats (Google Sheet)](https://docs.google.com/spreadsheets/d/1MoWoxogYWH6fv5r485EttvVgJuw7dMzzcot66X3MWu4/edit#gid=943142477)
- [HTTP Archive: Web Almanac 2024 Structured Data results sheet (Google Sheet)](https://docs.google.com/spreadsheets/d/1GWniSGupK6KgME7urV7ff0iWStzopGXqnQvJ3_-ynD4/edit#gid=560419533)
- [Brinkmann, Primpeli and Bizer: The Web Data Commons Schema.org Data Set Series, WWW 2023 (PDF)](https://www.uni-mannheim.de/media/Einrichtungen/dws/Files_Research/Web-based_Systems/pub/Brinkmann-etal-TheWDCSchemaorgDataSetSeries-WWW2023.pdf)
- [Alrashed et al.: Dataset or Not? A Study on the Veracity of Semantic Markup for Dataset Pages, ISWC 2021 (PDF)](https://people.csail.mit.edu/tarfah/papers/dataset.pdf)
- [Google: Knowledge panel help](https://support.google.com/knowledgepanel/answer/9787176)
- [Pellissier Tanon et al.: From Freebase to Wikidata: The Great Migration, WWW 2016 (PDF)](https://archives.iw3c2.org/www2016/WWW2016-Proceedings/proceedings/p1419.pdf)
- [Vincent, Johnson, Sheehan and Hecht: Measuring the Importance of User-Generated Content to Search Engines, ICWSM 2019 (PDF)](https://arxiv.org/pdf/1906.08576)
- [Google for Developers: Knowledge Graph Search API](https://developers.google.com/knowledge-graph)
- [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Kandpal, Deng, Roberts, Wallace and Raffel: Large Language Models Struggle to Learn Long-Tail Knowledge, ICML 2023 (PDF)](https://arxiv.org/pdf/2211.08411)
- [Radhakrishnan et al.: Knowing When to Ask: Bridging Large Language Models and Data (DataGemma), 2024 (PDF)](https://arxiv.org/pdf/2409.13741)
