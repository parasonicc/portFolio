export const personalInfo = {
  name: 'Paras Yadav',
  title: 'Business Analyst & ML Engineer',
  subtitle: 'MSc Business Analytics · University of Nottingham',
  bio: "I build machine learning systems and analytics pipelines that turn messy business data into decisions. From churn models catching 5 in 6 at-risk customers, to NLP pipelines tracking brand sentiment across social networks — I focus on work that's rigorous, reproducible, and grounded in real business context.",
  location: 'Nottingham, UK',
  email: 'yadavparas.28py@gmail.com',
  phone: '07887150165',
  linkedin: 'https://www.linkedin.com/in/parasyadav28/',
  github: 'https://github.com/parasyadav28',
  initials: 'PY',
};

export const stats = [
  { value: '5', label: 'Analytics projects' },
  { value: '88.1%', label: 'Best model AUC' },
  { value: '26K+', label: 'Data observations' },
  { value: '1', label: 'Published paper' },
];

export const skills = [
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'SQL', icon: '🗄️', category: 'language' },
  { name: 'Tableau', icon: '📊', category: 'tool' },
  { name: 'Scikit-learn', icon: '🤖', category: 'library' },
  { name: 'NLP / VADER / BERT', icon: '💬', category: 'library' },
  { name: 'Random Forest', icon: '🌲', category: 'technique' },
  { name: 'K-Means / PCA', icon: '🔵', category: 'technique' },
  { name: 'Pandas / NumPy', icon: '📐', category: 'library' },
  { name: 'Matplotlib / Seaborn', icon: '🎨', category: 'library' },
  { name: 'Spark SQL', icon: '⚡', category: 'tool' },
  { name: 'API Integration', icon: '🔗', category: 'skill' },
  { name: 'Excel', icon: '📋', category: 'tool' },
];

/*
  ── PROJECT DETAIL STRUCTURE ─────────────────────────────────────────
  Each project has a `detail` object rendered as tabs in the modal:

    detail: {
      brief:           '...'        → "The Brief"  (what was there to do)
      approach:        ['...', ...] → "What I Did"
      results:         ['...', ...] → "Results"
      recommendations: ['...', ...] → "Recommendations"
    }

  And an `evidence.images` array (charts/visuals shown in the Gallery tab):

    evidence: {
      images: [{ src: '/evidence/churn/chart-1.png', caption: '...' }],
    }

  Files live in `public/`, so public/evidence/churn/chart-1.png
  is referenced as /evidence/churn/chart-1.png
  → Rename the image entries below to match YOUR actual files.
  Broken paths are hidden automatically. If a project has no working
  images, the Gallery tab simply doesn't appear.
  ─────────────────────────────────────────────────────────────────────
*/

export const projects = [
  {
    id: 'churn',
    title: 'Customer churn prediction — FoodCorp',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    module: 'Machine Learning & Predictive Analytics',
    date: 'May 2026',
    description:
      'A temporal Random Forest pipeline to flag supermarket customers at risk of silently disengaging — before they stop coming. Deployed at 28-day intervals against a live customer base.',
    highlights: [
      '26,454 customer-date observations across 18 temporal reference points (Oct 2020–Feb 2022)',
      '18 engineered features: recency, frequency windows, spend, basket diversity, trend signals',
      'Strict out-of-time split — no data leakage between training and test periods',
      '4 models benchmarked; RF selected: AUC 88.1%, recall 83.4% — catches 5 in 6 true churners',
    ],
    metrics: [
      { value: '88.1%', label: 'ROC-AUC' },
      { value: '83.4%', label: 'Churn recall' },
      { value: '78.6%', label: 'Accuracy' },
      { value: '+10.7pp', label: 'vs baseline' },
    ],
    tags: ['Random Forest', 'sklearn Pipeline', 'Temporal CV', 'Feature engineering', 'Python', 'Imbalanced data'],
    featured: true,
    detail: {
      brief:
        "A large proportion of FoodCorp's supermarket customers stop returning without any warning — they don't complain or formally leave, they simply go quiet. Once a customer has fully disengaged, winning them back is far harder than keeping them. The task: build a machine learning system that flags customers likely to churn before it happens, so retention teams can intervene early. Churn was defined as no purchase in the 28 days following a prediction date — a threshold that aligns with a four-week marketing cycle and produced a meaningful ~31% churn rate.",
      approach: [
        'Built a temporal labelling framework: 18 prediction reference dates between Oct 2020 and Feb 2022, producing 26,454 labelled customer-date observations — each a snapshot of the previous 90 days of shopping behaviour',
        'Engineered 18 behavioural features covering recency, visit frequency across multiple time windows, spend, basket diversity, preferred-store usage, and recent trend changes in activity',
        'Used a strict out-of-time validation design that mirrors real deployment — information from future dates never leaked into model training',
        'Benchmarked four approaches (Logistic Regression, Random Forest, AdaBoost, calibrated Linear SVM) and tuned the winner: a Random Forest with 200 trees, max depth 6',
      ],
      results: [
        'ROC-AUC of 0.881 and churn recall of 83.4% on held-out test periods — the model catches roughly 5 in 6 customers who later churn',
        'Performance stayed stable across all four test periods, suggesting it generalises over time rather than fitting one historical window',
        'Visit-frequency features account for 57% of total feature importance; churners visit 70–80% less often than loyal customers, and the decline is gradual, not sudden',
        "The standout insight: churners are not low spenders. Their average basket (£16.34) almost matches retained customers' (£17.28) — they just stop showing up",
      ],
      recommendations: [
        'Aim retention activity at visit frequency — comeback nudges and offers timed to a four-week campaign cycle — rather than trying to grow basket size',
        'Re-score customers daily in production instead of at fixed 28-day intervals, so declining behaviour is caught earlier',
        "Explore a customer-relative churn definition: a weekly shopper turning monthly is already disengaging even if they haven't crossed the global threshold",
        'Cap extreme transaction values in production — a single £20M erroneous receipt distorted one trend feature in this dataset',
      ],
    },
    evidence: {
      images: [
        { src: '/evidence/churn/ROC.png', caption: 'Model benchmarking — ROC curves' },
        { src: '/evidence/churn/featureimp.png', caption: 'Feature importance — visit frequency dominates' },
        { src: '/evidence/churn/churnVSnonchurn.png', caption: 'Churner vs loyal customer behaviour' },
      ],
    },
  },
  {
    id: 'segmentation',
    title: 'Retail customer segmentation for data-driven marketing',
    category: 'seg',
    categoryLabel: 'Segmentation',
    module: 'Analytics Specialisations & Applications',
    date: 'Mar 2026',
    description:
      'Segmented 3,000 retail customers into 5 behavioural archetypes using RFM + category-spend features, enabling precision-targeted marketing campaigns.',
    highlights: [
      '27 engineered features: RFM metrics, basket behaviour, 20-category spend shares',
      'PCA dimensionality reduction — 9 components retaining ~85% variance',
      'K-Means clustering → 5 named segments validated by silhouette score',
      'Family Bulk Buyers & Regular Shoppers identified as most profitable segments',
    ],
    metrics: [
      { value: '27', label: 'Features built' },
      { value: '5', label: 'Segments' },
      { value: '~85%', label: 'PCA variance' },
      { value: '3,000', label: 'Customers' },
    ],
    tags: ['K-Means', 'PCA', 'RFM', 'Unsupervised ML', 'Python'],
    featured: true,
    detail: {
      brief:
        'A retail firm wanted to move away from one-size-fits-all marketing and instead target groups of customers who genuinely shop alike. Using six months of transaction data for 3,000 customers — basket composition, item quantities, product categories, and visit frequency — the task was to discover natural behavioural segments and translate them into marketing strategy.',
      approach: [
        'Engineered 27 behavioural features across four dimensions: RFM (recency, frequency, monetary), basket behaviour, and spend shares across 20 product categories',
        'Applied log transformation and robust scaling to tame heavily skewed spending distributions and outliers',
        'Reduced dimensionality with PCA — 9 principal components retaining roughly 85% of variance',
        'Ran K-Means clustering, selecting k = 5 via silhouette score (~0.35), then profiled and named each cluster from its purchasing habits',
      ],
      results: [
        'Five distinct archetypes emerged: Convenience Purchasers (9%), Regular Shoppers (7%), Lottery-Focused Customers (1.5%), Family Bulk Buyers (74%), and Seasonal Shoppers (8.6%)',
        'Family Bulk Buyers dominate the customer base — large multi-category baskets driving the bulk of revenue',
        'Regular Shoppers are the most engaged group, visiting most frequently and showing the strongest loyalty signals',
        'Together these two segments were identified as the most commercially valuable on basket size, frequency, and total revenue contribution',
      ],
      recommendations: [
        'Target Regular Shoppers with loyalty schemes and personalised offers on frequently bought products to grow customer lifetime value',
        'Offer Family Bulk Buyers bundled deals and bulk-purchase schemes that play to their multi-category shopping style',
        'Replace blanket campaigns with segment-specific messaging — the behavioural diversity makes a strong business case for it',
        'Extend the analysis with time-based shopping patterns and demographic data to sharpen the segments further',
      ],
    },
    evidence: {
      images: [
        { src: '/evidence/segmentation/chart-1.png', caption: 'PCA explained variance' },
        { src: '/evidence/segmentation/chart-2.png', caption: 'Cluster visualisation in PCA space' },
        { src: '/evidence/segmentation/chart-3.png', caption: 'Segment profiles — size & spend' },
      ],
    },
  },
  {
    id: 'bank',
    title: 'Predictive modelling for bank marketing campaign response',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    module: 'Foundational Business Analytics',
    date: 'Jan 2026',
    description:
      'Predicted product subscription likelihood on a heavily imbalanced 4,000-record bank dataset, selecting the model that best surfaces genuine potential subscribers over noise.',
    highlights: [
      '80/20 class imbalance — F1-score chosen over accuracy as success metric',
      'Call duration excluded from training to prevent data leakage in deployment',
      '4 classifiers compared: LR, Decision Tree, kNN, Random Forest',
      'Random Forest: 0.85 accuracy, F1 0.49 — highest minority-class detection',
    ],
    metrics: [
      { value: '0.85', label: 'Accuracy' },
      { value: '0.49', label: 'F1-score' },
      { value: '4,000', label: 'Records' },
    ],
    tags: ['Classification', 'Imbalanced data', 'Random Forest', 'sklearn', 'Python'],
    featured: false,
    detail: {
      brief:
        "A bank's outbound marketing campaigns reach thousands of customers, but only a small fraction ever subscribe to the promoted product. With a 4,000-record campaign dataset where roughly 80% of customers said no, the task was to build a classifier that identifies the customers genuinely likely to subscribe — so call time is spent where it counts.",
      approach: [
        'Explored and preprocessed the campaign dataset, handling categorical encoding and the severe 80/20 class imbalance',
        'Deliberately excluded call duration from training — it is only known after a call ends, so using it would leak future information into a model meant to run before calls are made',
        'Chose F1-score over raw accuracy as the success metric, since a model predicting "no" for everyone would already score 80% accuracy while being useless',
        'Trained and compared four classifiers: Logistic Regression, Decision Tree, k-Nearest Neighbours, and Random Forest',
      ],
      results: [
        'Random Forest delivered the best balance: 0.85 accuracy with an F1-score of 0.49 on the subscriber class',
        'It detected substantially more genuine subscribers than the alternatives, which tended to collapse toward the majority "no" class',
        'The leakage-free design means the model can genuinely be used to prioritise call lists before campaigns run',
      ],
      recommendations: [
        'Rank outbound call lists by model score so agents contact the highest-probability subscribers first',
        'Enrich the feature set with pre-call customer attributes (product history, engagement signals) to lift minority-class detection further',
        'Experiment with resampling techniques and decision-threshold tuning to push F1 beyond 0.49 on the imbalanced class',
      ],
    },
    evidence: {
      images: [
        { src: '/evidence/bank/chart-1.png', caption: 'Model comparison — accuracy vs F1' },
        { src: '/evidence/bank/chart-2.png', caption: 'Confusion matrix — Random Forest' },
      ],
    },
  },
  {
    id: 'bluesky',
    title: 'Brand analytics on BlueSky: Ryanair vs Wizz Air',
    category: 'nlp',
    categoryLabel: 'NLP',
    module: 'Analytics Specialisations & Applications',
    date: 'Mar 2026',
    description:
      'End-to-end social listening pipeline for KantarIQ — from API collection to dual-engine sentiment, topic modelling, consumer perceptual mapping, and network-based influencer scoring.',
    highlights: [
      '26,265 posts collected via BlueSky API → 3,368 clean working dataset (1,240 authors)',
      'TextBlob + VADER composite sentiment; LDA (k=4) + BERTopic topic modelling',
      'TF-IDF / PCA consumer perceptual map; KMeans audience segmentation (3 tiers)',
      'Bipartite-projection network centrality for micro-influencer candidate ranking',
    ],
    metrics: [
      { value: '3,368', label: 'Posts analysed' },
      { value: '4', label: 'LDA topics' },
      { value: '1,240', label: 'Authors' },
    ],
    tags: ['NLP', 'VADER', 'BERTopic', 'LDA', 'Network analysis', 'API scraping'],
    featured: true,
    detail: {
      brief:
        'Market research firm KantarIQ commissioned a pilot study to map how the public discusses two rival low-cost European airlines — Ryanair and Wizz Air — on the BlueSky social network. The deliverables: how much each brand is talked about, in what tone, around which themes, by which audiences, and which micro-influencers each brand should consider engaging.',
      approach: [
        'Collected 26,265 raw posts via paginated calls to the BlueSky search API — five search terms per brand, cursor-based pagination with rate-limit handling',
        'Cleaned aggressively: deduplication, regex filtering of bot/bridge/tracker accounts, aviation-tracker removal, and per-brand balancing → a working dataset of 3,368 posts from 1,240 authors',
        'Ran dual-engine sentiment (TextBlob + VADER composite) plus two topic models — LDA (k=4) and BERTopic — to surface discussion themes per brand',
        'Built a TF-IDF/PCA perceptual map of brand positioning, segmented authors into 3 engagement tiers with KMeans, and scored micro-influencer candidates using bipartite-projection network centrality combined with posting frequency and sentiment',
      ],
      results: [
        'Both airlines attract neutral-to-positive sentiment, with Wizz Air slightly ahead (+0.049) — but Ryanair posts earn over 3× the engagement (avg 4.94 likes vs 1.42)',
        "Topics split cleanly: Ryanair conversation centres on operations, pricing, and CEO Michael O'Leary; Wizz Air's on route development, its Abu Dhabi business, and competitive comparisons",
        'Network analysis surfaced credible micro-influencer candidates per brand after filtering out news outlets, official accounts, and bots',
      ],
      recommendations: [
        'Ryanair: engage @garius.bsky.social (29,784 followers, composite score 0.446) — mid-sized reach with consistently positive brand-relevant posting',
        'Wizz Air: engage @margareterosali.bsky.social (composite score 0.538) to amplify the already-positive route-development narrative',
        "Ryanair should lean into its outsized engagement-per-post; Wizz Air should convert its sentiment edge into reach as BlueSky's user base grows",
      ],
    },
    evidence: {
      images: [
        { src: '/evidence/bluesky/chart-1.png', caption: 'Sentiment over time — Ryanair vs Wizz Air' },
        { src: '/evidence/bluesky/chart-2.png', caption: 'Perceptual map (TF-IDF / PCA)' },
        { src: '/evidence/bluesky/chart-3.png', caption: 'Influencer network graph' },
      ],
    },
  },
  {
    id: 'tableau',
    title: 'Retail store performance analytics dashboard',
    category: 'viz',
    categoryLabel: 'Visualisation',
    module: 'Data at Scale',
    date: 'Dec 2025',
    description:
      'Multi-KPI Tableau dashboard analysing revenue, basket value, and customer behaviour across 4 retail stores. Individual analysis contributed to the group final investment recommendation.',
    highlights: [
      'KPIs: monthly revenue per store, avg basket value (£22–£59), revenue/active customer (up to £70)',
      'Store 2 identified as dominant — highest revenue, basket value, and visit frequency',
      'Department revenue share analysis ruled out product mix as performance driver',
      'Peak revenue £384K; recommended Store 2 for prioritised investment',
    ],
    metrics: [
      { value: '4', label: 'KPIs tracked' },
      { value: '£384K', label: 'Peak revenue' },
      { value: '~£70', label: 'Revenue/customer' },
    ],
    tags: ['Tableau', 'KPI design', 'Retail analytics', 'Business insight'],
    featured: false,
    detail: {
      brief:
        'Four retail stores, one investment decision. Working from large-scale transactional data, the task was to design a Tableau dashboard that compares store performance across meaningful KPIs and feeds a clear, evidence-based recommendation on where the business should prioritise investment — my individual analysis contributing to the group verdict.',
      approach: [
        'Designed a focused KPI set: monthly revenue per store, average basket value, revenue per active customer, and visit frequency',
        'Built interactive Tableau dashboards comparing all four stores across each KPI over time',
        'Ran a department-level revenue share analysis to test whether differences in product mix explained the performance gap',
        'Synthesised the individual findings into the group investment recommendation',
      ],
      results: [
        'Store 2 dominated every KPI — highest monthly revenue (peaking at £384K), highest basket value, and the most frequent customer visits',
        'Average basket values ranged from £22 to £59 across stores; revenue per active customer reached roughly £70 at the top',
        'Department revenue shares were broadly similar across stores — ruling out product mix and pointing to customer behaviour as the real performance driver',
      ],
      recommendations: [
        'Prioritise Store 2 for investment — it compounds advantages across revenue, basket value, and loyalty',
        'Study what drives Store 2 visit frequency (location, layout, service) and replicate it at underperforming stores',
        'Track basket value monthly at weaker stores as the leading indicator of whether interventions are working',
      ],
    },
    evidence: {
      images: [
        { src: '/evidence/tableau/dashboard-1.png', caption: 'Main KPI dashboard' },
        { src: '/evidence/tableau/dashboard-2.png', caption: 'Monthly revenue per store' },
      ],
    },
  },
  {
    id: 'starbucks',
    title: 'VASP-N Consultancy — Starbucks big data engagement',
    category: 'big',
    categoryLabel: 'Big Data',
    module: 'Leading Big Data Business Projects',
    date: 'May 2026',
    description:
      'Senior Data Scientist in a 5-person consultancy delivering a big data strategy and segmentation proposal for Starbucks across 14 structured team meetings.',
    highlights: [
      'Led company research, project planning, and Gantt chart (waterfall + agile sprint hybrid)',
      'Co-developed ethics framework covering privacy, fairness, and governance (Cavoukian 2009)',
      "Applied Tuckman's model to team dynamics; resolved methodology disagreements at Meeting 4",
    ],
    metrics: [
      { value: '14', label: 'Meetings' },
      { value: '5', label: 'Team members' },
    ],
    tags: ['Big data strategy', 'Project management', 'Data ethics', 'Consultancy'],
    featured: false,
    detail: {
      brief:
        'As Senior Data Scientist in VASP-N, a five-person student consultancy, the engagement was to pitch a big data and customer segmentation strategy to Starbucks — delivered as a recorded client pitch after a fourteen-meeting project running from late January to early May, governed by a signed Collaborative Working Agreement and weekly Tuesday team meetings.',
      approach: [
        "Owned the company research stream — including digging through Starbucks' investor material, which surfaced the Lieberman quote that anchored the final pitch",
        "Designed the project Gantt chart around the team's work-package model: a waterfall backbone with quality gates, combined with short agile sprint cycles where the work suited it (following Wysocki's principle that method should match the work)",
        'Built the branding template used across the deck and co-developed the data ethics framework, reshaping it from a compliance checklist into a principle-led framework covering privacy, fairness, and governance (Cavoukian, 2009)',
        "Navigated team dynamics through Tuckman's forming–storming–norming–performing stages — including the Meeting 4 'storming' debate over whether external review data met our evidence standards",
      ],
      results: [
        'Delivered the full client pitch on schedule in early May after 14 structured meetings',
        'The hybrid waterfall–agile plan kept work packages on track with clear quality gates',
        'The ethics framework matured significantly through team feedback — from checklist to principles backed by academic and real-world examples',
        'Honest self-evaluation using Gibbs (1988): strengths in research and visual presentation; growth areas in seeking feedback earlier and contributing more assertively in methodology debates',
      ],
      recommendations: [
        'Design privacy and ethics in from day one rather than treating them as a late slide — exactly what Cavoukian argues',
        'Build the project plan off the critical path as soon as it is agreed, not a meeting later',
        'Lock the visual brand template early — settling it at Meeting 10 cost the team rework',
      ],
    },
    evidence: {
      images: [
        { src: '/evidence/starbucks/chart-1.png', caption: 'Project Gantt chart — waterfall + sprint hybrid' },
      ],
    },
  },
];

export const publication = {
  title: 'The Impacts of Social Media on Youth',
  conference: '5th International Conference on ICT for Digital, Smart & Sustainable Development',
  date: 'Jun 2025',
  institution: 'Maharaja Surajmal Institute, India',
  description:
    'Survey-based study of 600+ youths (age 14–25), achieving a 95% response rate. Applied statistical methods improving data accuracy by 20%; visualisations enhanced insight clarity by 25%. Authored the full research paper and presented findings at a peer-reviewed international conference.',
  tags: ['Survey research', 'Statistical analysis', 'Data visualisation', 'Peer-reviewed', 'Conference paper'],
};

export const filterOptions = [
  { value: 'all', label: 'All projects' },
  { value: 'ml', label: 'Machine learning' },
  { value: 'nlp', label: 'NLP' },
  { value: 'seg', label: 'Segmentation' },
  { value: 'viz', label: 'Visualisation' },
  { value: 'big', label: 'Big data' },
];
