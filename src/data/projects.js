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

export const projects = [
  {
    id: 'churn',
    title: 'Customer churn prediction — FoodCorp',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    module: 'BUSI4373 · Machine Learning & Predictive Analytics',
    date: 'May 2026',
    description:
      'A temporal Random Forest pipeline to flag supermarket customers at risk of silently disengaging — before they stop coming. Deployed at 28-day intervals against a live customer base.',
    highlights: [
      '26,454 customer-date observations across 18 temporal reference points (Oct 2020–Feb 2022)',
      '18 engineered features: recency, frequency windows, spend, basket diversity, trend signals',
      'Strict out-of-time split — no data leakage between training and test periods',
      '4 models benchmarked; RF selected: AUC 88.1%, recall 83.4% — catches 5 in 6 true churners',
      'Key insight: churners stop visiting, not spending per trip (only 5% lower spend/visit)',
    ],
    metrics: [
      { value: '88.1%', label: 'ROC-AUC' },
      { value: '83.4%', label: 'Churn recall' },
      { value: '78.6%', label: 'Accuracy' },
      { value: '+10.7pp', label: 'vs baseline' },
    ],
    tags: ['Random Forest', 'sklearn Pipeline', 'Temporal CV', 'Feature engineering', 'Python', 'Imbalanced data'],
    featured: true,
  },
  {
    id: 'segmentation',
    title: 'Retail customer segmentation for data-driven marketing',
    category: 'seg',
    categoryLabel: 'Segmentation',
    module: 'BUSI4370 · Analytics Specialisations & Applications',
    date: 'Mar 2026',
    description:
      'Segmented 3,000 retail customers into 5 behavioural archetypes using RFM + category-spend features, enabling precision-targeted marketing campaigns.',
    highlights: [
      '27 engineered features: RFM metrics, basket behaviour, 20-category spend shares',
      'Robust Scaler pre-processing to handle spending outliers',
      'PCA dimensionality reduction — 9 components retaining ~85% variance',
      'K-Means clustering → 5 named segments (Convenience Purchasers, Bulk Shoppers, etc.)',
    ],
    metrics: [
      { value: '27', label: 'Features built' },
      { value: '5', label: 'Segments' },
      { value: '~85%', label: 'PCA variance' },
      { value: '3,000', label: 'Customers' },
    ],
    tags: ['K-Means', 'PCA', 'RFM', 'Unsupervised ML', 'Python'],
    featured: true,
  },
  {
    id: 'bank',
    title: 'Predictive modelling for bank marketing campaign response',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    module: 'BUSI4371 · Foundational Business Analytics',
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
  },
  {
    id: 'bluesky',
    title: 'Brand analytics on BlueSky: Ryanair vs Wizz Air',
    category: 'nlp',
    categoryLabel: 'NLP',
    module: 'BUSI4370 · Analytics Specialisations & Applications',
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
  },
  {
    id: 'tableau',
    title: 'Retail store performance analytics dashboard',
    category: 'viz',
    categoryLabel: 'Visualisation',
    module: 'BUSI4369 · Data at Scale',
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
  },
  {
    id: 'starbucks',
    title: 'VASP-N Consultancy — Starbucks big data engagement',
    category: 'big',
    categoryLabel: 'Big Data',
    module: 'BUSI4372 · Leading Big Data Business Projects',
    date: 'May 2026',
    description:
      'Senior Data Scientist in a 5-person consultancy delivering a big data strategy and segmentation proposal for Starbucks across 14 structured team meetings.',
    highlights: [
      'Led company research, project planning, and Gantt chart (waterfall + agile sprint hybrid)',
      'Co-developed ethics framework covering privacy, fairness, and governance (Cavoukian 2009)',
      'Applied Tuckman\'s model to team dynamics; resolved methodology disagreements at Meeting 4',
    ],
    metrics: [
      { value: '14', label: 'Meetings' },
      { value: '5', label: 'Team members' },
    ],
    tags: ['Big data strategy', 'Project management', 'Data ethics', 'Consultancy'],
    featured: false,
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
