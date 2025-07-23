import Frontend from '../../images/Frontend.png';
import ReactImg from '../../images/ReactImg.jpg';
import nextjs from '../../images/nextjs.png';
import Angular from '../../images/Angular.jpg';
import Backend from '../../images/Backend.jpg';
import php2 from '../../images/php2.jpg';
import DB1 from '../../images/DB1.jpg';
import laravel from '../../images/laravel.jpg';
import Symfony from '../../images/Symfony.jpg';
import wordpress from '../../images/wordpress.png';
import GraphicDesign from '../../images/graphic.jpg';
import SEO from '../../images/seo1.jpeg';
import WebHosting from '../../images/WebHosting.jpg';
import DigitalMarketing from '../../images/digitalMarketing.webp';
import MobileApp from '../../images/MobileApp.jpg';
import courseimg3new from '../../images/courseimg3new.jpeg';
const CourseData = () => {
  const coursesData = {
    frontend: {
      title: 'Frontend Web Development',
      desc: 'Learn HTML, CSS, JavaScript, and popular UI libraries. Build responsive, interactive websites. Practice real-world frontend projects.',
      longDesc: 'This comprehensive frontend development course covers everything from basic HTML/CSS to modern JavaScript frameworks. You\'ll learn to create responsive layouts, implement interactive features, and optimize web performance. The course includes hands-on projects to build your portfolio.',
      img: Frontend,
      duration: '3 Months',
      schedule: [
        { day: 'Tuesday', time: '5:00 PM - 7:00 PM' },
        { day: 'Thursday', time: '5:00 PM - 7:00 PM' }
      ],
      fee: '30,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments',
      ],
      prerequisites: 'Basic computer skills',
      outcomes: [
        'Build responsive websites with HTML/CSS',
        'Implement interactive features with JavaScript',
        'Work with CSS frameworks like Bootstrap',
        'Understand modern frontend workflows',
        'Deploy websites to production'
      ],
      syllabus: [
        {
          week: 'Week 1-4',
          title: 'HTML & CSS Fundamentals',
          topics: [
            'HTML5 semantic elements',
            'CSS selectors and specificity',
            'Flexbox and Grid layouts',
            'Responsive design principles',
            'CSS animations and transitions'
          ]
        },
        {
          week: 'Week 5-8',
          title: 'JavaScript Essentials',
          topics: [
            'Variables and data types',
            'Functions and scope',
            'DOM manipulation',
            'Event handling',
            'ES6+ features'
          ]
        },
        {
          week: 'Week 9-12',
          title: 'Advanced Topics',
          topics: [
            'CSS preprocessors (SASS)',
            'JavaScript frameworks overview',
            'Web performance optimization',
            'Accessibility best practices',
            'Final project development'
          ]
        }
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Senior Frontend Developer with 8 years of experience working with international clients. Specializes in responsive design and performance optimization.',
        expertise: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'UI/UX']
      }
    },
    react: {
      title: 'React JS Masterclass',
      desc: 'Understand React core concepts like hooks, components, props, and state. Build SPAs with routing and API integration. Project-based learning.',
      longDesc: 'This comprehensive React JS course takes you from fundamental concepts to advanced patterns used in modern web development. You\'ll start with JSX syntax and component architecture, then progress to state management with hooks, context API, and Redux. The course includes building multiple real-world projects including a full e-commerce application with Firebase backend.',
      img: ReactImg,
      duration: '3 Months',
      schedule: [
        { day: 'Monday', time: '6:00 PM - 8:00 PM' },
        { day: 'Wednesday', time: '6:00 PM - 8:00 PM' },
        { day: 'Friday', time: '6:00 PM - 8:00 PM' }
      ],
      fee: '25,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments',
      ],
      prerequisites: 'Basic JavaScript knowledge, HTML/CSS fundamentals',
      outcomes: [
        'Build complex single-page applications with React',
        'Implement state management solutions',
        'Integrate with REST APIs and GraphQL',
        'Optimize React application performance',
        'Deploy React apps to production'
      ],
      syllabus: [
        {
          week: 'Week 1-2',
          title: 'React Fundamentals',
          topics: [
            'React ecosystem overview',
            'JSX syntax and components',
            'Props and state',
            'Handling events',
            'Conditional rendering'
          ]
        },
        {
          week: 'Week 3-4',
          title: 'React Hooks',
          topics: [
            'useState and useEffect',
            'Custom hooks',
            'useContext for global state',
            'useReducer pattern',
            'Performance optimization'
          ]
        },
        {
          week: 'Week 5-6',
          title: 'Routing and Data Fetching',
          topics: [
            'React Router v6',
            'Dynamic routing',
            'Fetching data with useEffect',
            'Axios library',
            'Loading states and error handling'
          ]
        },
        {
          week: 'Week 7-8',
          title: 'Advanced Patterns',
          topics: [
            'Context API for state management',
            'Introduction to Redux',
            'Higher-order components',
            'Render props pattern',
            'Code splitting'
          ]
        },
        {
          week: 'Week 9-12',
          title: 'Capstone Project',
          topics: [
            'Project planning and setup',
            'Implementing core features',
            'Testing strategies',
            'Performance optimization',
            'Deployment to Vercel/Netlify'
          ]
        }
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Senior React developer with 7+ years of experience building enterprise applications. Worked with companies like Systems Ltd and Techlogix. Certified React trainer with 3 years of teaching experience.',
        expertise: ['React', 'Next.js', 'TypeScript', 'State Management']
      }
    },
    nextjs: {
      title: 'Next JS Bootcamp',
      desc: 'Master server-side rendering with Next.js. Learn routing, API routes, dynamic pages. Build production-ready apps using React + Next.js.',
      longDesc: 'This intensive Next.js bootcamp takes you from zero to production-ready applications. You\'ll learn how to leverage Next.js features like server-side rendering, static site generation, and API routes to build ultra-fast, SEO-friendly web applications. The course includes building a complete full-stack application with authentication, database integration, and deployment to Vercel.',
      img: nextjs,
      duration: '3 Months',
      schedule: [
        { day: 'Tuesday', time: '7:00 PM - 9:00 PM' },
        { day: 'Saturday', time: '10:00 AM - 12:00 PM' }
      ],
      fee: '30,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments ',
      ],
      prerequisites: 'Basic React knowledge, JavaScript ES6+ concepts',
      outcomes: [
        'Build SSR and SSG applications with Next.js',
        'Implement API routes for backend functionality',
        'Optimize Next.js applications for performance',
        'Handle authentication in Next.js apps',
        'Deploy Next.js applications to Vercel and other platforms',
        'Implement incremental static regeneration',
        'Work with Next.js image optimization'
      ],
      syllabus: [
        {
          week: 'Week 1-2',
          title: 'Next.js Fundamentals',
          topics: [
            'Next.js vs traditional React apps',
            'File-based routing system',
            'Pages and Layouts',
            'Built-in CSS and Sass support',
            'Image optimization with next/image',
            'Font optimization'
          ]
        },
        {
          week: 'Week 3-4',
          title: 'Rendering Strategies',
          topics: [
            'Static Site Generation (SSG)',
            'Server-Side Rendering (SSR)',
            'Client-Side Rendering (CSR)',
            'Incremental Static Regeneration',
            'When to use each strategy',
            'Hybrid approaches'
          ]
        },
        {
          week: 'Week 5-6',
          title: 'Data Fetching',
          topics: [
            'getStaticProps and getStaticPaths',
            'getServerSideProps',
            'API routes',
            'SWR for client-side data fetching',
            'Database integration',
            'Caching strategies'
          ]
        },
        {
          week: 'Week 7-8',
          title: 'Advanced Features',
          topics: [
            'Dynamic routes and catch-all routes',
            'Middleware implementation',
            'Authentication patterns',
            'Internationalization (i18n)',
            'Environment variables',
            'Custom server configuration'
          ]
        },
        {
          week: 'Week 9-12',
          title: 'Full-Stack Project',
          topics: [
            'Project architecture planning',
            'Implementing authentication',
            'Building API endpoints',
            'Database integration',
            'State management with Context API',
            'Performance optimization',
            'Testing and deployment'
          ]
        }
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Senior Full-Stack Developer with 5+ years of Next.js experience. Has built scalable applications for startups and enterprises. Certified Vercel expert with focus on performance optimization.',
        expertise: ['Next.js', 'React', 'Node.js', 'Performance Optimization', 'Vercel']
      }
    },
    angular: {
      title: 'Angular Framework Essentials',
      desc: 'Learn Angular structure, components, and services. Use RxJS for state and HTTP handling. Build scalable enterprise-level applications.',
      longDesc: 'This comprehensive Angular course provides in-depth training on one of the most powerful frontend frameworks. You\'ll master Angular architecture, components, directives, services, and RxJS for reactive programming. Through hands-on projects, you\'ll learn to build complex, maintainable applications with proper state management, form handling, and API integration. The course includes building a complete enterprise dashboard with authentication and real-time features.',
      img: Angular,
      duration: '3 Months',
      schedule: [
        { day: 'Monday', time: '6:00 PM - 8:00 PM' },
        { day: 'Thursday', time: '6:00 PM - 8:00 PM' }
      ],
      fee: '30,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments',
        
      ],
      prerequisites: 'JavaScript fundamentals, basic TypeScript knowledge preferred',
      outcomes: [
        'Build scalable Angular applications using best practices',
        'Implement component-based architecture',
        'Master RxJS for state management',
        'Create reactive forms with validation',
        'Implement authentication and route guards',
        'Integrate with REST APIs and WebSockets',
        'Optimize Angular application performance',
        'Deploy Angular apps to production'
      ],
      syllabus: [
        {
          week: 'Week 1-2',
          title: 'Angular Fundamentals',
          topics: [
            'Angular architecture overview',
            'Components and templates',
            'Directives and pipes',
            'Dependency injection',
            'Modules and lazy loading',
            'TypeScript for Angular'
          ]
        },
        {
          week: 'Week 3-4',
          title: 'Data Binding and Services',
          topics: [
            'Component communication',
            'Template-driven forms',
            'Reactive forms',
            'Form validation',
            'Creating and using services',
            'HTTP client and API integration'
          ]
        },
        {
          week: 'Week 5-6',
          title: 'RxJS and State Management',
          topics: [
            'Observables and observers',
            'RxJS operators',
            'Subjects and multicasting',
            'State management patterns',
            'NgRx store (introduction)',
            'Handling side effects'
          ]
        },
        {
          week: 'Week 7-8',
          title: 'Advanced Angular Features',
          topics: [
            'Routing and navigation',
            'Route guards and authentication',
            'Dynamic components',
            'Content projection',
            'Internationalization (i18n)',
            'Angular animations'
          ]
        },
        {
          week: 'Week 9-12',
          title: 'Enterprise Project',
          topics: [
            'Project setup and architecture',
            'Authentication implementation',
            'API integration strategies',
            'Performance optimization',
            'Testing with Jasmine and Karma',
            'Deployment and CI/CD',
            'Real-time features with WebSockets'
          ]
        }
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Angular specialist with 6+ years of experience building enterprise applications. Former Angular team member at a Fortune 500 company. Google Developer Expert (GDE) for Angular.',
        expertise: ['Angular', 'TypeScript', 'RxJS', 'State Management', 'Performance Optimization']
      },
      certification: {
        description: 'Graduates receive an Angular Framework Essentials certification recognized by industry partners.',
        benefits: [
          'Validates Angular proficiency',
          'Enhances job prospects',
          'Recognized by hiring partners'
        ]
      }
    },
    backend: {
      title: 'Backend Development with PHP & Laravel',
      desc: 'Master server-side programming with PHP and Laravel. Build RESTful APIs, work with databases, and implement authentication for modern web applications.',
      longDesc: 'This comprehensive backend development course takes you from PHP fundamentals to building professional-grade applications with Laravel. You\'ll learn to create robust server-side logic, design efficient databases, develop RESTful APIs, and implement security best practices. Through hands-on projects, you\'ll build a complete e-commerce backend with user authentication, payment processing, and admin dashboard.',
      img: Backend,
      duration: '4 Months',
      schedule: [
        { day: 'Tuesday', time: '7:00 PM - 9:00 PM' },
        { day: 'Friday', time: '4:00 PM - 6:00 PM' }
      ],
      fee: '35,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments',
        
      ],
      prerequisites: 'Basic programming concepts, familiarity with HTML/CSS',
      outcomes: [
        'Build secure and scalable backend systems',
        'Develop RESTful APIs with Laravel',
        'Implement authentication (JWT, Sanctum)',
        'Design and optimize database schemas',
        'Process payments and handle transactions',
        'Write automated tests for backend code',
        'Deploy applications to cloud servers',
        'Implement caching for performance'
      ],
      syllabus: [
        {
          week: 'Week 1-4',
          title: 'PHP Fundamentals',
          topics: [
            'PHP syntax and OOP concepts',
            'Working with forms and data',
            'Sessions and cookies',
            'File handling and uploads',
            'MySQL database integration',
            'PDO and security best practices'
          ]
        },
        {
          week: 'Week 5-8',
          title: 'Laravel Basics',
          topics: [
            'Laravel installation and setup',
            'MVC architecture',
            'Routing and controllers',
            'Blade templating engine',
            'Eloquent ORM basics',
            'Middleware implementation'
          ]
        },
        {
          week: 'Week 9-12',
          title: 'Advanced Laravel',
          topics: [
            'RESTful API development',
            'Authentication (Sanctum, Passport)',
            'API resource controllers',
            'Validation and error handling',
            'File storage and manipulation',
            'Task scheduling and queues'
          ]
        },
        {
          week: 'Week 13-16',
          title: 'Database & Performance',
          topics: [
            'Database migrations and seeding',
            'Eloquent relationships',
            'Query optimization',
            'Redis caching',
            'Full-text search implementation',
            'WebSockets with Laravel Echo'
          ]
        },
        {
          week: 'Week 17-20',
          title: 'Capstone Project',
          topics: [
            'E-commerce backend architecture',
            'Payment gateway integration',
            'Order processing system',
            'Admin dashboard development',
            'Automated testing (PHPUnit)',
            'Deployment to AWS/DigitalOcean',
            'CI/CD pipeline setup'
          ]
        }
      ],
      tools: [
        'PHP 8.x',
        'Laravel 9.x',
        'MySQL/PostgreSQL',
        'Redis',
        'Postman',
        'Docker (Introduction)',
        'Git/GitHub'
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Senior Backend Architect with 8+ years of Laravel experience. Built backend systems for 50+ clients worldwide. Laravel certification evaluator and open-source contributor.',
        expertise: ['Laravel', 'API Development', 'Database Optimization', 'Cloud Deployment', 'Microservices']
      },
      certification: {
        description: 'Graduates receive a PHP/Laravel Developer Certification endorsed by the Laravel community.',
        benefits: [
          'Industry-recognized credential',
          'Showcase capstone project in portfolio',
          'Access to exclusive job opportunities'
        ]
      },
      projects: [
        'RESTful API for mobile app',
        'Multi-vendor e-commerce platform',
        'Real-time chat application',
        'CRM system with analytics'
      ]
    },
    php: {
      title: 'Professional PHP Development',
      desc: 'Master PHP from fundamentals to advanced concepts. Build dynamic websites, handle forms, work with databases, and create secure web applications.',
      longDesc: 'This intensive PHP course takes you from complete beginner to professional PHP developer. You\'ll learn to build dynamic, database-driven websites while following modern security practices. Through hands-on projects, you\'ll create a complete content management system (CMS) with user authentication, CRUD operations, and AJAX functionality. The course emphasizes writing clean, maintainable code and prepares you for real-world PHP development.',
      img: php2,
      duration: '3 Months',
      schedule: [
        { day: 'Wednesday', time: '6:00 PM - 8:00 PM' },
        { day: 'Saturday', time: '3:00 PM - 5:00 PM' }
      ],
      fee: '25,000 PKR',
      paymentOptions: [
        'Full payment (5% discount )',
        '2 installments',
      ],
      prerequisites: 'Basic HTML/CSS knowledge, no prior PHP experience required',
      outcomes: [
        'Build dynamic, database-driven websites',
        'Process forms and handle file uploads securely',
        'Work with MySQL databases using PDO',
        'Implement user authentication and sessions',
        'Create RESTful APIs with PHP',
        'Use AJAX for seamless user experiences',
        'Follow PHP security best practices',
        'Deploy PHP applications to live servers'
      ],
      syllabus: [
        {
          week: 'Week 1-4',
          title: 'PHP Fundamentals',
          topics: [
            'PHP syntax and variables',
            'Control structures and loops',
            'Functions and arrays',
            'Working with forms (GET/POST)',
            'File handling and uploads',
            'Error handling and debugging'
          ]
        },
        {
          week: 'Week 5-8',
          title: 'Database Integration',
          topics: [
            'MySQL database fundamentals',
            'PDO for secure database access',
            'CRUD operations with PHP',
            'Prepared statements',
            'Database relationships',
            'Basic database optimization'
          ]
        },
        {
          week: 'Week 9-12',
          title: 'Advanced PHP Concepts',
          topics: [
            'Object-Oriented PHP',
            'MVC architecture pattern',
            'User authentication systems',
            'Session management',
            'Working with APIs (consuming and creating)',
            'AJAX with PHP'
          ]
        },
        {
          week: 'Week 13-16',
          title: 'Security & Performance',
          topics: [
            'PHP security best practices',
            'Input validation and sanitization',
            'Password hashing',
            'CSRF protection',
            'Caching strategies',
            'Basic performance optimization'
          ]
        },
        {
          week: 'Week 17-20',
          title: 'Capstone Project',
          topics: [
            'Building a custom CMS',
            'Admin panel development',
            'Role-based access control',
            'Image processing with GD Library',
            'Deployment to shared hosting/VPS',
            'Final project presentation'
          ]
        }
      ],
      tools: [
        'PHP 8.x',
        'MySQL/MariaDB',
        'phpMyAdmin',
        'Composer (Introduction)',
        'Git/GitHub Basics',
        'Postman for API testing',
        'XAMPP/WAMP stack'
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Senior PHP Developer with 10+ years experience. Has built enterprise solutions for banks and government organizations. Zend Certified PHP Engineer and open-source contributor.',
        expertise: ['Core PHP', 'Security', 'Performance Tuning', 'Legacy System Migration', 'API Development']
      },
      certification: {
        description: 'Graduates receive a PHP Developer Certification recognized by local IT industry partners.',
        benefits: [
          'Validates professional PHP skills',
          'Includes project portfolio review',
          'Access to exclusive job board'
        ]
      },
      projects: [
        'Blog system with admin panel',
        'E-commerce product catalog',
        'Student management system',
        'RESTful API for mobile apps',
        'AJAX-based chat application'
      ],
      careerPaths: [
        'PHP Developer',
        'Backend Engineer',
        'WordPress Developer',
        'Laravel Developer (with further training)',
        'API Specialist'
      ]
    },
    database: {
      title: 'Professional Database Management',
      desc: 'Master SQL for relational databases and NoSQL fundamentals. Learn data modeling, optimization, and administration for robust database solutions.',
      longDesc: 'This intensive database course covers both relational (MySQL) and NoSQL (MongoDB) database systems. You\'ll learn to design efficient database schemas, write complex queries, optimize performance, and ensure data integrity. Through hands-on projects, you\'ll build a complete database system for an e-commerce platform with transactions, user management, and analytics capabilities. The course prepares you for real-world database administration and development roles.',
      img: DB1,
      duration: '3 Months',
      schedule: [
        { day: 'Monday', time: '5:00 PM - 7:00 PM' },
        { day: 'Thursday', time: '5:00 PM - 7:00 PM' }
      ],
      fee: '25,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments',
      ],
      prerequisites: 'Basic computer skills, no prior database experience required',
      outcomes: [
        'Design efficient database schemas',
        'Write complex SQL queries and joins',
        'Implement stored procedures and triggers',
        'Optimize database performance',
        'Work with both SQL and NoSQL databases',
        'Ensure data security and integrity',
        'Perform database backups and recovery',
        'Design data warehouses for analytics'
      ],
      syllabus: [
        {
          week: 'Week 1-4',
          title: 'SQL Fundamentals',
          topics: [
            'Relational database concepts',
            'MySQL installation and setup',
            'CRUD operations',
            'Data types and constraints',
            'Basic queries with SELECT',
            'Filtering and sorting data'
          ]
        },
        {
          week: 'Week 5-8',
          title: 'Advanced SQL',
          topics: [
            'Table joins (INNER, LEFT, RIGHT)',
            'Subqueries and derived tables',
            'Aggregate functions',
            'Views and indexes',
            'Transactions and ACID properties',
            'User management and permissions'
          ]
        },
        {
          week: 'Week 9-12',
          title: 'Database Design & Optimization',
          topics: [
            'Normalization (1NF to 3NF)',
            'ER diagramming',
            'Stored procedures and functions',
            'Triggers and events',
            'Query optimization techniques',
            'EXPLAIN and performance tuning'
          ]
        },
        {
          week: 'Week 13-16',
          title: 'NoSQL & Advanced Concepts',
          topics: [
            'Introduction to MongoDB',
            'Document database design',
            'MongoDB CRUD operations',
            'Aggregation framework',
            'Database security practices',
            'Backup and recovery strategies'
          ]
        },
        {
          week: 'Week 17-20',
          title: 'Capstone Project',
          topics: [
            'E-commerce database design',
            'Implementing complex relationships',
            'Analytics and reporting queries',
            'Database migration planning',
            'Performance benchmarking',
            'Final project presentation'
          ]
        }
      ],
      tools: [
        'MySQL 8.0',
        'MySQL Workbench',
        'MongoDB Atlas',
        'MongoDB Compass',
        'phpMyAdmin',
        'TablePlus',
        'DBDiagram.io'
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Senior Database Architect with 12+ years experience. Designed database systems for banking, healthcare, and e-commerce platforms. Oracle Certified Professional and MongoDB Certified Developer.',
        expertise: ['Database Design', 'Query Optimization', 'Data Warehousing', 'Cloud Databases', 'ETL Processes']
      },
      certification: {
        description: 'Graduates receive a Database Professional Certification recognized by top IT companies in Pakistan.',
        benefits: [
          'Dual certification in SQL and NoSQL',
          'Includes capstone project review',
          'Access to database job portal'
        ]
      },
      projects: [
        'Library management system',
        'Hospital patient records database',
        'E-commerce analytics warehouse',
        'Social media data model',
        'IoT sensor data collection system'
      ],
      careerPaths: [
        'Database Administrator',
        'SQL Developer',
        'Data Analyst',
        'Backend Developer',
        'Data Engineer'
      ],
      labSetup: [
        'Real-world dataset exercises',
        'Query optimization challenges',
        'Database recovery simulations',
        'Cloud database deployments',
        'Performance tuning workshops'
      ]
    },
    laravel: {
      title: 'Laravel Framework Mastery',
      desc: 'Build modern web applications with Laravel. Master MVC architecture, Eloquent ORM, and build RESTful APIs with industry best practices.',
      longDesc: 'This comprehensive Laravel course takes you from fundamentals to advanced application development. You\'ll learn to build secure, scalable web applications using Laravel\'s powerful features including Eloquent ORM, Blade templating, and the Artisan CLI. Through hands-on projects, you\'ll create a complete SaaS application with multi-tenancy, payment integration, and real-time features using Laravel Echo.',
      img: laravel,
      duration: '4 Months',
      schedule: [
        { day: 'Tuesday', time: '6:30 PM - 9:00 PM' },
        { day: 'Saturday', time: '10:00 AM - 1:00 PM' }
      ],
      fee: '35,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments ',
      ],
      prerequisites: 'PHP fundamentals, basic OOP concepts',
      outcomes: [
        'Build production-ready Laravel applications',
        'Implement authentication with Sanctum',
        'Develop RESTful APIs with proper documentation',
        'Work with Eloquent ORM and relationships',
        'Process payments with Stripe integration',
        'Implement queue workers for background jobs',
        'Deploy Laravel applications with CI/CD',
        'Write tests with PHPUnit'
      ],
      syllabus: [
        {
          module: 'Module 1',
          title: 'Laravel Fundamentals',
          weeks: 'Week 1-4',
          topics: [
            'Laravel installation & environment setup',
            'MVC architecture deep dive',
            'Routing & middleware',
            'Blade templating engine',
            'Basic CRUD operations',
            'Form validation'
          ],
          project: 'Blog CMS with user management'
        },
        {
          module: 'Module 2',
          title: 'Database & Eloquent',
          weeks: 'Week 5-8',
          topics: [
            'Migrations & seeders',
            'Eloquent ORM basics',
            'Model relationships (1:1, 1:M, M:M)',
            'Query Builder vs Eloquent',
            'Eager loading optimization',
            'Scopes & accessors'
          ],
          project: 'E-commerce product catalog'
        },
        {
          module: 'Module 3',
          title: 'Advanced Features',
          weeks: 'Week 9-12',
          topics: [
            'API development with Sanctum',
            'File storage & manipulation',
            'Task scheduling',
            'Queue workers',
            'Notifications & mailing',
            'Localization'
          ],
          project: 'Task management API with React frontend'
        },
        {
          module: 'Module 4',
          title: 'Application Security',
          weeks: 'Week 13-16',
          topics: [
            'Authentication (Breeze, Jetstream)',
            'Authorization with Gates/Policies',
            'CSRF protection',
            'SQL injection prevention',
            'XSS protection',
            'Rate limiting'
          ],
          project: 'Secure admin dashboard'
        },
        {
          module: 'Module 5',
          title: 'Production Ready Apps',
          weeks: 'Week 17-20',
          topics: [
            'Performance optimization',
            'Caching strategies',
            'Payment gateway integration',
            'Deployment to Forge/Vapor',
            'Monitoring & debugging',
            'CI/CD pipelines'
          ],
          project: 'Complete SaaS application'
        }
      ],
      toolsStack: [
        'Laravel 10',
        'PHP 8.2',
        'MySQL 8',
        'Redis',
        'Stripe API',
        'Docker',
        'Git/GitHub Actions'
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Laravel Certified Developer with 7+ years experience. Built enterprise applications for Fortune 500 clients. Creator of popular Laravel packages with 5K+ GitHub stars.',
        expertise: ['Laravel Architecture', 'API Development', 'Performance Tuning', 'Microservices', 'DevOps']
      },
      certification: {
        title: 'Certified Laravel Developer',
        benefits: [
          'Official Laravel certification exam voucher',
          'GitHub portfolio review',
          'Job placement assistance',
          'Access to private Laravel community'
        ]
      },
      projects: [
        {
          title: 'Multi-vendor Marketplace',
          features: [
            'Role-based authentication',
            'Product management',
            'Order processing system',
            'Vendor payout system',
            'Review system'
          ]
        },
        {
          title: 'Laravel Vue SPA',
          features: [
            'JWT authentication',
            'Real-time notifications',
            'File uploads to S3',
            'PDF report generation',
            'API documentation'
          ]
        }
      ],
      careerSupport: [
        'Resume building workshop',
        'Technical interview preparation',
        'Freelancing guidance',
        'LinkedIn profile optimization',
        'Mock technical interviews'
      ]
    },
    symfony: {
      title: 'Enterprise Symfony Development',
      desc: 'Master Symfony framework for building scalable enterprise applications. Learn professional PHP development with design patterns and best practices.',
      longDesc: 'This expert-level Symfony course trains you to build complex, maintainable web applications using Symfony 6 components. You\'ll learn professional development workflows with Doctrine ORM, API Platform, and Symfony Flex. Through building a complete enterprise project, you\'ll implement microservices architecture, event-driven programming, and automated testing.',
      img: Symfony,
      duration: '4 Months',
      schedule: [
        { day: 'Monday', time: '6:00 PM - 9:00 PM' },
        { day: 'Thursday', time: '6:00 PM - 9:00 PM' }
      ],
      fee: '35,000 PKR',
      paymentOptions: [
        'Full payment (10% discount )',
        '2 installments ',
      ],
      prerequisites: 'Strong PHP OOP skills, basic command line familiarity',
      outcomes: [
        'Build enterprise-grade Symfony applications',
        'Implement Domain-Driven Design',
        'Create high-performance APIs with API Platform',
        'Master Doctrine ORM advanced features',
        'Implement event-driven architecture',
        'Set up CI/CD pipelines',
        'Write unit and functional tests',
        'Deploy Symfony apps to cloud'
      ],
      syllabus: [
        {
          phase: 'Foundation',
          weeks: 'Week 1-4',
          topics: [
            'Symfony architecture overview',
            'Service container & dependency injection',
            'Configuration with YAML/XML/PHP',
            'Routing & controllers',
            'Twig templating engine',
            'Forms & validation'
          ],
          project: 'Corporate intranet portal'
        },
        {
          phase: 'Database & ORM',
          weeks: 'Week 5-8',
          topics: [
            'Doctrine ORM deep dive',
            'Entity relationships & inheritance',
            'DQL vs Query Builder',
            'Migrations & fixtures',
            'Caching with Symfony',
            'Performance optimization'
          ],
          project: 'Inventory management system'
        },
        {
          phase: 'Advanced Patterns',
          weeks: 'Week 9-12',
          topics: [
            'Event dispatcher & subscribers',
            'Service layer architecture',
            'API Platform configuration',
            'JWT authentication',
            'Command bus pattern',
            'Asynchronous messaging'
          ],
          project: 'RESTful API for mobile apps'
        },
        {
          phase: 'Quality Assurance',
          weeks: 'Week 13-16',
          topics: [
            'PHPUnit & PHPSpec testing',
            'Behat for BDD',
            'Static analysis tools',
            'Continuous integration',
            'Dockerizing Symfony apps',
            'Monitoring & logging'
          ],
          project: 'Test suite for existing project'
        },
        {
          phase: 'Production Deployment',
          weeks: 'Week 17-20',
          topics: [
            'Performance profiling',
            'Horizontal scaling',
            'Blue-green deployment',
            'Kubernetes basics',
            'Microservices architecture',
            'Legacy Symfony migration'
          ],
          project: 'Cloud-native enterprise application'
        }
      ],
      enterprisePatterns: [
        'CQRS implementation',
        'Event sourcing',
        'Hexagonal architecture',
        'Domain-Driven Design',
        'Repository pattern',
        'DTO pattern implementation'
      ],
      tools: [
        'Symfony 6',
        'PHP 8.2+',
        'Doctrine ORM 3',
        'API Platform',
        'Docker/Kubernetes',
        'Blackfire.io',
        'GitLab CI/CD'
      ],
      instructor: {
        name: 'Muhammad Bilal',
        bio: 'Symfony Core Contributor with 10+ years enterprise experience. Architect of banking systems handling 1M+ daily transactions. Certified Symfony Expert and trainer.',
        expertise: ['Enterprise Architecture', 'Performance Optimization', 'Security Hardening', 'Legacy Modernization', 'Microservices']
      },
      certification: {
        title: 'Symfony Professional Certification',
        features: [
          'Includes Symfony certification exam attempt',
          'Code review by Symfony core team members',
          'Verified skill badge on LinkedIn',
          'Access to Symfony enterprise job network'
        ]
      },
      caseStudies: [
        {
          title: 'Banking Transaction System',
          stack: ['Symfony', 'API Platform', 'RabbitMQ'],
          features: [
            '10,000+ TPS capacity',
            'Event-driven architecture',
            'PCI-DSS compliance'
          ]
        },
        {
          title: 'Government Portal Migration',
          stack: ['Symfony', 'Elasticsearch', 'Kubernetes'],
          features: [
            'Legacy Zend to Symfony migration',
            'Zero-downtime deployment',
            'Multi-lingual support'
          ]
        }
      ],
      careerServices: [
        'Whiteboard architecture sessions',
        'System design interview prep',
        'Enterprise project simulations',
        'Tech lead mentorship program',
        'Corporate networking events'
      ]
    },
    wordpress: {
      title: 'WordPress Development Mastery',
      desc: 'Learn to build professional WordPress websites, create custom themes and plugins, and optimize for performance and SEO.',
      longDesc: 'This comprehensive WordPress course takes you from beginner to advanced WordPress development. You\'ll learn to create custom themes, develop plugins, and build fully functional websites with WordPress. The course covers essential PHP for WordPress, Gutenberg block development, and WooCommerce integration, culminating in a capstone project of a custom e-commerce website.',
      img: wordpress,
      duration: '3 Months',
      schedule: [
        { day: 'Monday', time: '5:30 PM - 7:30 PM' },
        { day: 'Wednesday', time: '5:30 PM - 7:30 PM' }
      ],
      fee: '20,000 PKR',
      paymentOptions: [
        'Full payment',
      ],
      prerequisites: 'Basic HTML/CSS knowledge, familiarity with PHP recommended',
      outcomes: [
        'Build professional WordPress websites from scratch',
        'Create custom WordPress themes and plugins',
        'Develop custom Gutenberg blocks',
        'Set up and customize WooCommerce stores',
        'Optimize WordPress sites for performance and SEO',
        'Implement secure user authentication',
        'Deploy WordPress sites to live servers'
      ],
      syllabus: [
        {
          week: 'Week 1-3',
          title: 'WordPress Fundamentals',
          topics: [
            'WordPress setup and configuration',
            'Understanding the WordPress dashboard',
            'Working with themes and plugins',
            'Content management with posts and pages',
            'Menus and widgets',
            'User roles and permissions'
          ]
        },
        {
          week: 'Week 4-6',
          title: 'Custom Theme Development',
          topics: [
            'PHP essentials for WordPress',
            'Creating custom themes',
            'Template hierarchy and files',
            'Custom page templates',
            'Working with the WordPress loop',
            'Theme customization with Customizer API'
          ]
        },
        {
          week: 'Week 7-9',
          title: 'Plugin Development',
          topics: [
            'Building custom plugins',
            'Hooks: actions and filters',
            'Creating shortcodes',
            'Custom post types and taxonomies',
            'Admin panel enhancements',
            'Secure plugin development practices'
          ]
        },
        {
          week: 'Week 10-12',
          title: 'Advanced WordPress Development',
          topics: [
            'Gutenberg block development',
            'REST API integration',
            'WooCommerce setup and customization',
            'SEO optimization with Yoast/Rank Math',
            'Performance optimization techniques',
            'Caching and CDN integration'
          ]
        },
        {
          week: 'Week 13-15',
          title: 'Capstone Project',
          topics: [
            'Planning a custom e-commerce site',
            'Custom theme and plugin development',
            'WooCommerce integration',
            'SEO and performance optimization',
            'Deployment to shared hosting/VPS',
            'Final project presentation'
          ]
        }
      ],
      tools: [
        'WordPress 6.x',
        'PHP 8.x',
        'MySQL',
        'LocalWP/XAMPP',
        'Yoast SEO',
        'WooCommerce',
        'Git/GitHub'
      ],
      instructor: {
        name: 'Saqlain Ahmad',
        bio: 'WordPress developer with 6+ years of experience building custom websites for global clients. Specializes in WooCommerce solutions and custom plugin development.',
        expertise: ['WordPress', 'WooCommerce', 'PHP', 'SEO', 'Theme Development']
      },
      certification: {
        description: 'Graduates receive a WordPress Developer Certification recognized by local and international WordPress communities.',
        benefits: [
          'Validates WordPress development skills',
          'Portfolio review for job applications',
          'Access to WordPress job boards'
        ]
      },
      projects: [
        'Custom portfolio website',
        'E-commerce store with WooCommerce',
        'Custom plugin for user reviews',
        'Gutenberg block for dynamic content',
        'Blog with advanced SEO features'
      ],
      careerPaths: [
        'WordPress Developer',
        'WooCommerce Specialist',
        'Freelance Web Developer',
        'Theme/Plugin Developer',
        'Web Consultant'
      ]
    },
    graphic: {
      title: 'Professional Graphic Design',
      desc: 'Master Adobe Photoshop, Illustrator and design principles to create stunning visuals for print and digital media.',
      longDesc: 'This comprehensive graphic design course covers design theory, color psychology, typography, and hands-on training with industry-standard tools. You\'ll work on real-world projects including logo design, branding packages, marketing materials, and digital illustrations.',
      img: GraphicDesign,
      duration: '3 Months',
      schedule: [
        { day: 'Monday', time: '4:00 PM - 6:00 PM' },
        { day: 'Wednesday', time: '4:00 PM - 6:00 PM' }
      ],
      fee: '40,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments',
      ],
      prerequisites: 'Basic computer skills',
      outcomes: [
        'Master Adobe Photoshop and Illustrator',
        'Create professional logos and branding',
        'Design marketing materials',
        'Understand color theory and typography',
        'Prepare files for print and digital',
        'Build a professional design portfolio'
      ],
      syllabus: [
        {
          module: 'Design Fundamentals',
          topics: [
            'Principles of design',
            'Color theory and psychology',
            'Typography essentials',
            'Composition techniques',
            'Design thinking process'
          ]
        },
        {
          module: 'Adobe Photoshop',
          topics: [
            'Photo editing and manipulation',
            'Layer styles and masks',
            'Digital painting techniques',
            'Social media graphics',
            'Web design mockups'
          ]
        },
        {
          module: 'Adobe Illustrator',
          topics: [
            'Vector graphics fundamentals',
            'Logo and icon design',
            'Brand identity systems',
            'Illustration techniques',
            'Print production setup'
          ]
        },
        {
          module: 'Practical Projects',
          topics: [
            'Complete branding package',
            'Marketing collateral design',
            'Packaging design',
            'Portfolio development',
            'Client presentation skills'
          ]
        }
      ],
      instructor: {
        name: 'Husnain Lodhi',
        bio: 'Creative Director with 8+ years experience in branding and digital design. Worked with major Pakistani brands and international clients.',
        expertise: ['Brand Identity', 'Print Design', 'Digital Illustration', 'Adobe Creative Suite']
      },
      certification: {
        description: 'Graduates receive a Graphic Design Professional Certification with portfolio review.',
        benefits: [
          'Validates design skills',
          'Showcase portfolio to potential clients',
          'Access to design job opportunities'
        ]
      },
      projects: [
        'Corporate identity package',
        'Product packaging design',
        'Social media campaign graphics',
        'Website UI mockups',
        'Print advertisement designs'
      ],
      careerPaths: [
        'Graphic Designer',
        'Brand Identity Specialist',
        'Digital Illustrator',
        'Marketing Designer',
        'Freelance Designer'
      ]
    },
    seo: {
      title: 'SEO & Digital Marketing',
      desc: 'Master search engine optimization techniques, Google Analytics, and content marketing strategies to drive organic traffic.',
      longDesc: 'This comprehensive SEO course covers technical SEO, on-page optimization, content strategy, and performance measurement. You\'ll learn to rank websites higher in search results, analyze traffic patterns, and develop data-driven marketing strategies.',
      img: SEO,
      duration: '2 Months',
      schedule: [
        { day: 'Tuesday', time: '3:00 PM - 5:00 PM' },
        { day: 'Friday', time: '3:00 PM - 5:00 PM' }
      ],
      fee: '30,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments',
      ],
      prerequisites: 'Basic understanding of websites',
      outcomes: [
        'Perform comprehensive SEO audits',
        'Optimize websites for search engines',
        'Use Google Analytics and Search Console',
        'Develop content marketing strategies',
        'Execute local and international SEO',
        'Measure and improve ROI'
      ],
      syllabus: [
        {
          module: 'SEO Fundamentals',
          topics: [
            'How search engines work',
            'Keyword research strategies',
            'On-page optimization',
            'Technical SEO essentials',
            'SEO tools overview'
          ]
        },
        {
          module: 'Content Marketing',
          topics: [
            'Content strategy development',
            'Blogging for SEO',
            'Link building techniques',
            'Guest posting outreach',
            'Content performance analysis'
          ]
        },
        {
          module: 'Analytics & Measurement',
          topics: [
            'Google Analytics setup',
            'Search Console mastery',
            'Tracking conversions',
            'SEO reporting',
            'Competitor analysis'
          ]
        },
        {
          module: 'Advanced Strategies',
          topics: [
            'Local SEO optimization',
            'E-commerce SEO',
            'International SEO',
            'Voice search optimization',
            'SEO for mobile apps'
          ]
        }
      ],
      instructor: {
        name: 'Saqlain Ahmad',
        bio: 'SEO Consultant with 7+ years experience helping businesses increase organic traffic by 300-500%. Certified Google Analytics and Ads expert.',
        expertise: ['Technical SEO', 'Content Strategy', 'Data Analytics', 'Conversion Optimization']
      },
      certification: {
        description: 'Graduates receive an SEO Professional Certification with practical project evaluation.',
        benefits: [
          'Validates SEO expertise',
          'Includes website audit project',
          'Access to SEO job opportunities'
        ]
      },
      projects: [
        'Complete website SEO audit',
        'Keyword research and strategy',
        'Content marketing plan',
        'Local SEO implementation',
        'Analytics dashboard setup'
      ],
      careerPaths: [
        'SEO Specialist',
        'Digital Marketing Executive',
        'Content Strategist',
        'Search Marketing Manager',
        'Freelance SEO Consultant'
      ]
    },
    hosting: {
      title: 'Web Hosting & Server Management',
      desc: 'Learn to deploy, manage and optimize web servers with cPanel, WHM, CloudLinux and security best practices.',
      longDesc: 'This technical course covers everything from shared hosting setup to cloud server management. You\'ll gain hands-on experience with cPanel/WHM, DNS management, email servers, security hardening, and performance optimization for web hosting environments.',
      img: WebHosting,
      duration: '6 Weeks',
      schedule: [
        { day: 'Saturday', time: '10:00 AM - 1:00 PM' }
      ],
      fee: '10,000 PKR',
      paymentOptions: [
        'Full payment only'
      ],
      prerequisites: 'Basic Linux command line knowledge',
      outcomes: [
        'Configure and manage web servers',
        'Set up hosting accounts in WHM',
        'Implement security best practices',
        'Optimize server performance',
        'Troubleshoot common hosting issues',
        'Migrate websites between servers'
      ],
      syllabus: [
        {
          module: 'Hosting Fundamentals',
          topics: [
            'Web hosting types explained',
            'DNS and domain management',
            'cPanel/WHM overview',
            'Email server setup',
            'FTP and file management'
          ]
        },
        {
          module: 'Server Management',
          topics: [
            'Linux server administration',
            'Apache/Nginx configuration',
            'MySQL database management',
            'PHP version control',
            'Backup strategies'
          ]
        },
        {
          module: 'Security & Optimization',
          topics: [
            'SSL certificate installation',
            'Firewall configuration',
            'Malware scanning & removal',
            'Resource usage monitoring',
            'CloudLinux implementation'
          ]
        },
        {
          module: 'Advanced Topics',
          topics: [
            'Cloud server deployment',
            'Load balancing basics',
            'WHMCS billing system',
            'Reseller hosting setup',
            'Troubleshooting common issues'
          ]
        }
      ],
      instructor: {
        name: 'Asmat Zara',
        bio: 'Senior Systems Administrator with 10+ years experience managing high-traffic hosting environments. Certified cPanel and CloudLinux expert.',
        expertise: ['Server Security', 'Performance Tuning', 'Hosting Automation', 'Cloud Infrastructure']
      },
      certification: {
        description: 'Graduates receive a Web Hosting Administrator Certification with practical server setup evaluation.',
        benefits: [
          'Validates server management skills',
          'Includes practical server configuration project',
          'Access to hosting job opportunities'
        ]
      },
      projects: [
        'cPanel/WHM server setup',
        'Email server configuration',
        'Security hardening implementation',
        'Website migration project',
        'Performance optimization'
      ],
      careerPaths: [
        'Web Hosting Administrator',
        'Systems Administrator',
        'DevOps Engineer',
        'Cloud Infrastructure Specialist',
        'Hosting Support Engineer'
      ]
    },
    marketing: {
      title: 'Digital Marketing Professional',
      desc: 'Master social media marketing, Google Ads, content strategy and analytics to create effective digital campaigns.',
      longDesc: 'This comprehensive digital marketing course covers all major channels including social media, search ads, email marketing and analytics. You\'ll learn to create data-driven marketing strategies, execute campaigns, and measure ROI across multiple digital platforms.',
      img: DigitalMarketing,
      duration: '3 Months',
      schedule: [
        { day: 'Monday', time: '6:00 PM - 8:00 PM' },
        { day: 'Thursday', time: '6:00 PM - 8:00 PM' }
      ],
      fee: '30,000 PKR',
      paymentOptions: [
        'Full payment (5% discount)',
        '2 installments',
      ],
      prerequisites: 'Basic computer and internet skills',
      outcomes: [
        'Develop complete digital marketing strategies',
        'Run effective social media campaigns',
        'Manage Google and Facebook ad campaigns',
        'Create conversion-optimized content',
        'Analyze campaign performance data',
        'Optimize marketing ROI'
      ],
      syllabus: [
        {
          module: 'Digital Marketing Foundations',
          topics: [
            'Digital marketing ecosystem',
            'Customer journey mapping',
            'Content marketing strategy',
            'Brand positioning online',
            'Marketing funnel optimization'
          ]
        },
        {
          module: 'Social Media Marketing',
          topics: [
            'Facebook/Instagram advertising',
            'LinkedIn marketing strategies',
            'Twitter and Pinterest marketing',
            'Influencer marketing',
            'Community management'
          ]
        },
        {
          module: 'Search Marketing',
          topics: [
            'Google Ads campaign setup',
            'Keyword research for PPC',
            'Display advertising',
            'Remarketing strategies',
            'Shopping ads'
          ]
        },
        {
          module: 'Analytics & Optimization',
          topics: [
            'Google Analytics mastery',
            'Conversion tracking',
            'A/B testing methodologies',
            'Marketing automation',
            'ROI measurement'
          ]
        }
      ],
      instructor: {
        name: 'Saqlain Ahmad',
        bio: 'Digital Marketing Director with 8+ years experience managing million-rupee ad budgets. Certified in Google Ads, Facebook Blueprint and HubSpot marketing.',
        expertise: ['Paid Advertising', 'Social Media Strategy', 'Marketing Analytics', 'Conversion Optimization']
      },
      certification: {
        description: 'Graduates receive a Digital Marketing Professional Certification with campaign project evaluation.',
        benefits: [
          'Validates digital marketing skills',
          'Includes complete campaign project',
          'Access to marketing job opportunities'
        ]
      },
      projects: [
        'Social media campaign strategy',
        'Google Ads campaign setup',
        'Content marketing plan',
        'Marketing analytics dashboard',
        'Conversion optimization project'
      ],
      careerPaths: [
        'Digital Marketing Specialist',
        'Social Media Manager',
        'PPC Specialist',
        'Content Marketing Manager',
        'Digital Marketing Consultant'
      ]
    },
    mobileApp: {
      title: 'Mobile App Development',
      desc: 'Learn to build native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      longDesc: 'This comprehensive mobile development course covers both React Native and Flutter frameworks. You\'ll learn to build, test and publish mobile apps for both iOS and Android platforms, with focus on UI design, API integration, state management and performance optimization.',
      img: MobileApp,
      duration: '4 Months',
      schedule: [
        { day: 'Wednesday', time: '5:00 PM - 8:00 PM' },
        { day: 'Saturday', time: '2:00 PM - 5:00 PM' }
      ],
      fee: '70,000 PKR',
      paymentOptions: [
        'Full payment (10% discount)',
        '2 installments',
      ],
      prerequisites: 'Basic JavaScript knowledge',
      outcomes: [
        'Build cross-platform mobile apps',
        'Develop with React Native and Flutter',
        'Implement responsive UI designs',
        'Integrate with REST APIs',
        'Manage app state effectively',
        'Publish to App Store and Play Store'
      ],
      syllabus: [
        {
          module: 'React Native Fundamentals',
          topics: [
            'React Native architecture',
            'Components and styling',
            'Navigation solutions',
            'State management',
            'Device API integration'
          ]
        },
        {
          module: 'Flutter Development',
          topics: [
            'Dart programming language',
            'Widget tree and layouts',
            'State management solutions',
            'Platform-specific code',
            'Performance optimization'
          ]
        },
        {
          module: 'App Features',
          topics: [
            'User authentication',
            'Offline data sync',
            'Push notifications',
            'In-app purchases',
            'Analytics integration'
          ]
        },
        {
          module: 'Publishing & Maintenance',
          topics: [
            'App store guidelines',
            'Build and release process',
            'App store optimization',
            'Crash reporting',
            'Update strategies'
          ]
        }
      ],
      instructor: {
        name: 'Muzammil Amin',
        bio: 'Senior Mobile Developer with 6+ years experience building apps with 1M+ downloads. Worked with startups and enterprises across US, Europe and Middle East markets.',
        expertise: ['React Native', 'Flutter', 'Mobile UI/UX', 'Performance Optimization', 'App Publishing']
      },
      certification: {
        description: 'Graduates receive a Mobile App Developer Certification with app project evaluation.',
        benefits: [
          'Validates mobile development skills',
          'Includes published app project',
          'Access to mobile development jobs'
        ]
      },
      projects: [
        'E-commerce mobile app',
        'Social media app',
        'Fitness tracking app',
        'Food delivery app',
        'Task management app'
      ],
      careerPaths: [
        'Mobile App Developer',
        'React Native Developer',
        'Flutter Developer',
        'UI/UX Mobile Designer',
        'Freelance App Developer'
      ]
    },
   fullStack : {
  title: "Full Stack Development with React & Laravel",
  desc: "Master both frontend and backend development by building modern web applications with React for the frontend and Laravel for the backend.",
  longDesc: "This comprehensive full stack course teaches you to build complete, production-ready web applications using React for the frontend and Laravel PHP framework for the backend. You'll learn to create responsive UIs with React, build robust APIs with Laravel, and connect them seamlessly. Through hands-on projects, you'll implement authentication, real-time features, and database operations while following industry best practices for security, testing, and deployment.",
  img: courseimg3new, 
  duration: '6 Months',
  schedule: [
    { day: 'Monday', time: '6:00 PM - 8:00 PM' },
    { day: 'Thursday', time: '6:00 PM - 8:00 PM' }
  ],
  fee: '70,000 PKR',
  paymentOptions: [
    'Full payment (10% discount)',
    '3 monthly installments',
  ],
  prerequisites: 'Basic HTML/CSS/JavaScript knowledge, no prior React or Laravel experience required',
  outcomes: [
    'Build complete full stack applications from scratch',
    'Create responsive UIs with React and Tailwind CSS',
    'Develop RESTful APIs with Laravel',
    'Implement JWT authentication',
    'Connect frontend and backend seamlessly',
    'Work with databases using Eloquent ORM',
    'Deploy applications to cloud platforms',
    'Write unit and feature tests',
    'Implement real-time features with WebSockets',
    'Follow security best practices'
  ],
  syllabus: [
    {
      month: 'Month 1-2',
      title: 'Frontend Foundations with React',
      topics: [
        'React fundamentals (components, props, state)',
        'React hooks (useState, useEffect, etc.)',
        'React Router for navigation',
        'Context API for state management',
        'Tailwind CSS for styling',
        'Component libraries (Material UI, Headless UI)',
        'Form handling with Formik',
        'API consumption with Axios'
      ]
    },
    {
      month: 'Month 3',
      title: 'Backend Development with Laravel',
      topics: [
        'Laravel MVC architecture',
        'Routing and controllers',
        'Eloquent ORM for databases',
        'Migrations and seeders',
        'API resource controllers',
        'Request validation',
        'Middleware and authentication',
        'File storage handling'
      ]
    },
    {
      month: 'Month 4',
      title: 'Full Stack Integration',
      topics: [
        'JWT authentication flow',
        'Protected routes in React',
        'API error handling',
        'State management with Redux Toolkit',
        'Form submission with validation',
        'File uploads (frontend + backend)',
        'Pagination implementation',
        'Search and filtering'
      ]
    },
    {
      month: 'Month 5',
      title: 'Advanced Concepts',
      topics: [
        'Real-time features with Laravel Echo',
        'WebSockets with Pusher',
        'Testing (PHPUnit, Pest, Jest)',
        'Performance optimization',
        'Caching strategies',
        'Deployment to VPS (DigitalOcean, AWS)',
        'CI/CD pipelines',
        'Docker basics'
      ]
    },
    {
      month: 'Month 6',
      title: 'Capstone Project',
      topics: [
        'Project planning and architecture',
        'Building a complete SaaS application',
        'Role-based access control',
        'Payment integration (Stripe)',
        'Email notifications',
        'Performance monitoring',
        'Final deployment',
        'Project presentation'
      ]
    }
  ],
  tools: [
    'React 18',
    'Laravel 10',
    'Tailwind CSS',
    'Redux Toolkit',
    'MySQL',
    'Postman',
    'Git/GitHub',
    'VS Code',
    'Docker',
    'DigitalOcean/AWS'
  ],
  instructor: {
    name: 'Ahmed Khan',
    bio: 'Full Stack Architect with 8+ years experience building enterprise applications. Specializes in React and Laravel stack with expertise in microservices and cloud deployment.',
    expertise: ['React Optimization', 'Laravel Architecture', 'API Design', 'Cloud Deployment', 'Performance Tuning']
  },
  certification: {
    description: 'Graduates receive a Full Stack Developer Certification with React & Laravel specialization, recognized by tech industry partners.',
    benefits: [
      'Portfolio-ready projects',
      'LinkedIn profile review',
      'Access to exclusive job network',
      'Interview preparation sessions'
    ]
  },
  projects: [
    'E-commerce platform with admin dashboard',
    'Task management application with real-time updates',
    'Social media platform with authentication',
    'CRM system with reporting',
    'Booking/reservation system'
  ],
  careerPaths: [
    'Full Stack Developer',
    'Frontend Developer (React)',
    'Backend Developer (Laravel)',
    'API Developer',
    'Technical Lead',
    'Solutions Architect'
  ]
}
  };

  return coursesData;
};

export default CourseData;