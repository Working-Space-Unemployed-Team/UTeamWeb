export interface SetupGuide {
  id: string
  title: string
  description: string
  youtubeLink: string
  steps: {
    number: number
    title: string
    description: string
  }[]
}

export type PlanType = 'home' | 'pro'
export type DurationType = '1-month' | '3-months' | '6-months' | 'lifetime'

export interface PlanPricing {
  '1-month': number
  '3-months': number
  '6-months': number
  'lifetime': number
}

export interface ToolPricing {
  home: PlanPricing
  pro: PlanPricing
}

export interface PlanFeature {
  text: string
  included: boolean
}

export interface PlanInfo {
  name: string
  description: string
  features: PlanFeature[]
}

export interface Tool {
  id: string
  slug: string
  name: string
  description: string
  fullDescription: string
  pricing: ToolPricing
  plans: {
    home: PlanInfo
    pro: PlanInfo
  }
  image: string
  demoVideoId: string
  setupGuides: SetupGuide[]
}

export const durationLabels: Record<DurationType, string> = {
  '1-month': '1 Tháng',
  '3-months': '3 Tháng',
  '6-months': '6 Tháng',
  'lifetime': 'Vĩnh viễn',
}

export function getLowestPrice(pricing: ToolPricing): number {
  const allPrices = [
    ...Object.values(pricing.home),
    ...Object.values(pricing.pro),
  ]
  return Math.min(...allPrices)
}

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'viking-rise-auto',
    name: 'Viking Rise Auto',
    description: 'Tự động hóa trò chơi Viking Rise của bạn với bot thông minh',
    fullDescription: 'Viking Rise Auto là một công cụ tự động hóa mạnh mẽ được thiết kế cho người chơi Viking Rise. Nó tự động xử lý các nhiệm vụ lặp đi lặp lại, tối ưu hóa tiến trình của bạn trong khi bạn tập trung vào chiến lược. Các tính năng bao gồm tự động farm, quản lý tài nguyên và AI ra quyết định thông minh.',
    pricing: {
      home: {
        '1-month': 9.99,
        '3-months': 24.99,
        '6-months': 44.99,
        'lifetime': 79.99,
      },
      pro: {
        '1-month': 19.99,
        '3-months': 49.99,
        '6-months': 89.99,
        'lifetime': 149.99,
      },
    },
    plans: {
      home: {
        name: 'Cơ bản',
        description: 'Tự động hóa cần thiết cho người chơi bình thường',
        features: [
          { text: 'Tự động farm cơ bản', included: true },
          { text: 'Thu thập tài nguyên', included: true },
          { text: 'Hỗ trợ 1 tài khoản', included: true },
          { text: 'Hỗ trợ qua Email', included: true },
          { text: 'Chiến lược AI nâng cao', included: false },
          { text: 'Quản lý nhiều tài khoản', included: false },
          { text: 'Tùy chỉnh quy tắc tự động', included: false },
          { text: 'Hỗ trợ ưu tiên 24/7', included: false },
        ],
      },
      pro: {
        name: 'Chuyên nghiệp',
        description: 'Đầy đủ sức mạnh cho người chơi cạnh tranh',
        features: [
          { text: 'Tự động farm cơ bản', included: true },
          { text: 'Thu thập tài nguyên', included: true },
          { text: 'Hỗ trợ 1 tài khoản', included: true },
          { text: 'Hỗ trợ qua Email', included: true },
          { text: 'Chiến lược AI nâng cao', included: true },
          { text: 'Quản lý nhiều tài khoản', included: true },
          { text: 'Tùy chỉnh quy tắc tự động', included: true },
          { text: 'Hỗ trợ ưu tiên 24/7', included: true },
        ],
      },
    },
    image: 'https://res.cloudinary.com/dkrrib3mb/image/upload/v1777108493/Untitled_vdwbze.jpg',
    demoVideoId: 'dQw4w9WgXcQ',
    setupGuides: [
      {
        id: 'g1',
        title: 'Initial Setup & Installation',
        description: 'Learn how to install Viking Rise Auto, configure your account connection, and set up basic automation parameters for your gaming style.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Download & Install', description: 'Download Viking Rise Auto from the official website and run the installer' },
          { number: 2, title: 'Connect Your Account', description: 'Link your Viking Rise game account using secure OAuth authentication' },
          { number: 3, title: 'Choose Gaming Style', description: 'Select your preferred playstyle: Aggressive, Balanced, or Conservative' },
          { number: 4, title: 'Start Automation', description: 'Launch the bot and let it run your first automated session' }
        ]
      },
      {
        id: 'g2',
        title: 'Advanced Bot Configuration',
        description: 'Master the advanced settings for optimal performance. Configure resource farming strategies, hero prioritization, and custom automation rules.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Access Settings Panel', description: 'Open the Advanced Settings tab in the main application window' },
          { number: 2, title: 'Configure Farming Strategy', description: 'Set resource farming priorities: gold, wood, food, stone ratios' },
          { number: 3, title: 'Prioritize Heroes', description: 'Rank your heroes by importance for automated team composition' },
          { number: 4, title: 'Create Custom Rules', description: 'Define custom automation rules based on game conditions and triggers' },
          { number: 5, title: 'Save & Apply', description: 'Save your configuration and apply settings to active bot sessions' }
        ]
      },
      {
        id: 'g3',
        title: 'Troubleshooting & Optimization',
        description: 'Solve common issues and optimize your bot for maximum efficiency. Learn about performance tuning and account safety best practices.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Enable Debug Mode', description: 'Turn on debug logging to identify issues in bot execution' },
          { number: 2, title: 'Check Logs', description: 'Review the detailed log files to troubleshoot specific problems' },
          { number: 3, title: 'Optimize CPU Usage', description: 'Adjust performance settings to reduce CPU and memory consumption' },
          { number: 4, title: 'Account Safety Check', description: 'Verify account security and update session tokens regularly' }
        ]
      }
    ]
  },
  {
    id: '2',
    slug: 'FC Mobile Auto',
    name: 'FC Mobile Auto',
    description: 'Bot Discord/Telegram quản lý cộng đồng và trả lời tự động',
    fullDescription: 'PingMe Network Bot là giải pháp toàn diện để quản lý cộng đồng Discord hoặc Telegram của bạn. Tự động hóa kiểm duyệt, xử lý hỗ trợ khách hàng, quản lý thông báo và tương tác với thành viên thông qua các phản hồi bot thông minh.',
    pricing: {
      home: {
        '1-month': 7.99,
        '3-months': 19.99,
        '6-months': 34.99,
        'lifetime': 59.99,
      },
      pro: {
        '1-month': 14.99,
        '3-months': 39.99,
        '6-months': 69.99,
        'lifetime': 119.99,
      },
    },
    plans: {
      home: {
        name: 'Cơ bản',
        description: 'Quản lý cộng đồng cơ bản',
        features: [
          { text: 'Tự động kiểm duyệt', included: true },
          { text: 'Lệnh cơ bản', included: true },
          { text: '1 máy chủ/nhóm', included: true },
          { text: 'Hỗ trợ qua Email', included: true },
          { text: 'Phân tích nâng cao', included: false },
          { text: 'Không giới hạn máy chủ', included: false },
          { text: 'Tích hợp tùy chỉnh', included: false },
          { text: 'Hỗ trợ ưu tiên 24/7', included: false },
        ],
      },
      pro: {
        name: 'Chuyên nghiệp',
        description: 'Trải nghiệm quản lý cộng đồng toàn diện',
        features: [
          { text: 'Tự động kiểm duyệt', included: true },
          { text: 'Lệnh cơ bản', included: true },
          { text: '1 máy chủ/nhóm', included: true },
          { text: 'Hỗ trợ qua Email', included: true },
          { text: 'Phân tích nâng cao', included: true },
          { text: 'Không giới hạn máy chủ', included: true },
          { text: 'Tích hợp tùy chỉnh', included: true },
          { text: 'Hỗ trợ ưu tiên 24/7', included: true },
        ],
      },
    },
    image: 'https://res.cloudinary.com/dkrrib3mb/image/upload/v1777112850/unnamed_z3pwpq.png',
    demoVideoId: 'dQw4w9WgXcQ',
    setupGuides: [
      {
        id: 'g1',
        title: 'Bot Installation & Discord/Telegram Setup',
        description: 'Step-by-step guide to installing PingMe Network Bot and integrating it with your Discord server or Telegram group. Configure permissions and basic settings.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Create Bot Account', description: 'Go to Discord Developer Portal or Telegram Bot Father and create a new bot' },
          { number: 2, title: 'Get API Token', description: 'Copy your bot token and add it to PingMe Network Bot settings' },
          { number: 3, title: 'Set Bot Permissions', description: 'Configure required permissions: Send Messages, Manage Messages, Read Histories' },
          { number: 4, title: 'Invite to Server', description: 'Invite the bot to your Discord server or add it to your Telegram group' }
        ]
      },
      {
        id: 'g2',
        title: 'Creating Custom Commands & Responses',
        description: 'Build custom commands tailored to your community. Learn how to set up automated responses, moderation rules, and engagement features.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Open Command Builder', description: 'Access the Command Builder dashboard in PingMe Network Bot' },
          { number: 2, title: 'Create New Command', description: 'Define command name, trigger keyword, and response message' },
          { number: 3, title: 'Add Conditions', description: 'Set up conditional logic for when commands should trigger' },
          { number: 4, title: 'Set Permissions', description: 'Choose which user roles can use each command' },
          { number: 5, title: 'Deploy', description: 'Save and deploy your commands to the live bot' }
        ]
      },
      {
        id: 'g3',
        title: 'Analytics & Community Insights',
        description: 'Monitor your community engagement with built-in analytics. Track member activity, message trends, and optimize your bot responses based on data.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Access Analytics Dashboard', description: 'Open the Analytics tab to view real-time community metrics' },
          { number: 2, title: 'Track Member Activity', description: 'Monitor active users, message counts, and engagement patterns' },
          { number: 3, title: 'View Command Usage', description: 'See which commands are most popular and how often they\'re used' },
          { number: 4, title: 'Generate Reports', description: 'Create detailed analytics reports for community insights' }
        ]
      },
      {
        id: 'g4',
        title: 'Advanced Security & Moderation',
        description: 'Set up advanced moderation features including spam detection, user verification, role management, and automated enforcement of community guidelines.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Enable Spam Detection', description: 'Turn on automatic spam filtering and rate limiting' },
          { number: 2, title: 'Configure Verification', description: 'Set up member verification requirements and welcome flows' },
          { number: 3, title: 'Create Moderation Rules', description: 'Define auto-moderation rules for violations and warnings' },
          { number: 4, title: 'Manage Roles', description: 'Set up automatic role assignment based on conditions' },
          { number: 5, title: 'Log Enforcement', description: 'Enable detailed logs for all moderation actions' }
        ]
      }
    ]
  },
  {
    id: '3',
    slug: 'FC Hàn Auto',
    name: 'FC Hàn Auto',
    description: 'Tự động hóa macro nâng cao cho trình giả lập game di động',
    fullDescription: 'FC Hàn Auto cung cấp khả năng tự động hóa và ghi macro mạnh mẽ cho các trình giả lập game di động. Tạo chuỗi thao tác phức tạp, xử lý vòng lặp gameplay lặp đi lặp lại và tự động farm với khả năng kiểm soát chính xác và độ tin cậy cao.',
    pricing: {
      home: {
        '1-month': 14.99,
        '3-months': 34.99,
        '6-months': 59.99,
        'lifetime': 99.99,
      },
      pro: {
        '1-month': 24.99,
        '3-months': 64.99,
        '6-months': 109.99,
        'lifetime': 199.99,
      },
    },
    plans: {
      home: {
        name: 'Cơ bản',
        description: 'Công cụ ghi macro thiết yếu',
        features: [
          { text: 'Ghi macro cơ bản', included: true },
          { text: 'Hỗ trợ 1 trình giả lập', included: true },
          { text: 'Lưu 5 macro', included: true },
          { text: 'Hỗ trợ qua Email', included: true },
          { text: 'Tạo script nâng cao', included: false },
          { text: 'Hỗ trợ nhiều trình giả lập', included: false },
          { text: 'Không giới hạn macro', included: false },
          { text: 'Hỗ trợ ưu tiên 24/7', included: false },
        ],
      },
      pro: {
        name: 'Chuyên nghiệp',
        description: 'Bộ tự động hóa chuẩn chuyên nghiệp',
        features: [
          { text: 'Ghi macro cơ bản', included: true },
          { text: 'Hỗ trợ 1 trình giả lập', included: true },
          { text: 'Lưu 5 macro', included: true },
          { text: 'Hỗ trợ qua Email', included: true },
          { text: 'Tạo script nâng cao', included: true },
          { text: 'Hỗ trợ nhiều trình giả lập', included: true },
          { text: 'Không giới hạn macro', included: true },
          { text: 'Hỗ trợ ưu tiên 24/7', included: true },
        ],
      },
    },
    image: 'https://res.cloudinary.com/dkrrib3mb/image/upload/v1777108568/Untitled_q1axcs.jpg',
    demoVideoId: 'dQw4w9WgXcQ',
    setupGuides: [
      {
        id: 'g1',
        title: 'Installation & Emulator Configuration',
        description: 'Install Emulator Macro Pro and configure it to work seamlessly with your chosen emulator. Includes compatibility checks and optimization settings.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Install Emulator Macro Pro', description: 'Download and install the application on your PC or Mac' },
          { number: 2, title: 'Select Emulator', description: 'Choose from BlueStacks, NoxPlayer, MEmu, or other supported emulators' },
          { number: 3, title: 'Run Compatibility Check', description: 'Let the application verify emulator compatibility and settings' },
          { number: 4, title: 'Optimize Performance', description: 'Configure CPU cores, RAM allocation, and resolution for best performance' }
        ]
      },
      {
        id: 'g2',
        title: 'Recording Your First Macro',
        description: 'Learn how to record macros effectively. Understand timing, touch coordinates, and how to create reliable automation sequences that work consistently.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Start Recording', description: 'Click the record button and the emulator window will show touch coordinates' },
          { number: 2, title: 'Perform Actions', description: 'Play through your gameplay sequence naturally, all actions are recorded' },
          { number: 3, title: 'Stop Recording', description: 'End the recording and save your macro with a meaningful name' },
          { number: 4, title: 'Review & Adjust', description: 'Playback the macro and adjust timing and click positions if needed' },
          { number: 5, title: 'Test Run', description: 'Run the macro multiple times to ensure it works consistently' }
        ]
      },
      {
        id: 'g3',
        title: 'Advanced Macro Scripting',
        description: 'Master advanced scripting techniques including conditional logic, loops, variables, and custom functions for complex automation scenarios.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Open Script Editor', description: 'Access the Advanced Script Editor for manual code editing' },
          { number: 2, title: 'Learn Macro Language', description: 'Understand the macro scripting syntax and available functions' },
          { number: 3, title: 'Add Loops & Conditions', description: 'Implement for loops, while loops, and if/else conditional logic' },
          { number: 4, title: 'Create Variables', description: 'Define and use variables to make macros more flexible and dynamic' },
          { number: 5, title: 'Test & Debug', description: 'Test your script with debug output and error handling' }
        ]
      },
      {
        id: 'g4',
        title: 'Game Integration & Anti-Detection',
        description: 'Integrate with specific games and learn anti-detection strategies. Ensure your automation stays undetectable while maintaining performance.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Game Database', description: 'Browse the game database to find pre-configured settings for your game' },
          { number: 2, title: 'Enable Anti-Detection', description: 'Turn on anti-detection features to avoid game ban systems' },
          { number: 3, title: 'Add Random Delays', description: 'Configure random delays between actions to mimic human behavior' },
          { number: 4, title: 'Screen Verification', description: 'Add screen checks to verify game state before executing actions' }
        ]
      },
      {
        id: 'g5',
        title: 'Performance Monitoring & Debugging',
        description: 'Monitor macro performance, troubleshoot issues, and optimize execution. Learn debugging techniques and performance profiling.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Open Performance Monitor', description: 'View real-time execution stats and performance metrics' },
          { number: 2, title: 'Check Execution Time', description: 'Analyze how long each macro action takes to execute' },
          { number: 3, title: 'Enable Debug Log', description: 'Turn on detailed logging to track macro execution step by step' },
          { number: 4, title: 'Troubleshoot Failures', description: 'Identify failed actions and adjust timing or coordinates' },
          { number: 5, title: 'Optimize Efficiency', description: 'Remove unnecessary delays and consolidate operations' }
        ]
      }
    ]
  },
  {
    id: '4',
    slug: 'Garena Auto Login',
    name: 'Garena Auto Login',
    description: 'Tự động hóa macro nâng cao cho trình giả lập game di động',
    fullDescription: 'Garena Auto Login cung cấp khả năng tự động hóa và ghi macro mạnh mẽ cho các trình giả lập game di động. Tạo chuỗi thao tác phức tạp, xử lý vòng lặp gameplay lặp đi lặp lại và tự động farm với khả năng kiểm soát chính xác và độ tin cậy cao.',
    pricing: {
      home: {
        '1-month': 14.99,
        '3-months': 34.99,
        '6-months': 59.99,
        'lifetime': 99.99,
      },
      pro: {
        '1-month': 24.99,
        '3-months': 64.99,
        '6-months': 109.99,
        'lifetime': 199.99,
      },
    },
    plans: {
      home: {
        name: 'Cơ bản',
        description: 'Công cụ ghi macro thiết yếu',
        features: [
          { text: 'Ghi macro cơ bản', included: true },
          { text: 'Hỗ trợ 1 trình giả lập', included: true },
          { text: 'Lưu 5 macro', included: true },
          { text: 'Hỗ trợ qua Email', included: true },
          { text: 'Tạo script nâng cao', included: false },
          { text: 'Hỗ trợ nhiều trình giả lập', included: false },
          { text: 'Không giới hạn macro', included: false },
          { text: 'Hỗ trợ ưu tiên 24/7', included: false },
        ],
      },
      pro: {
        name: 'Chuyên nghiệp',
        description: 'Bộ tự động hóa chuẩn chuyên nghiệp',
        features: [
          { text: 'Ghi macro cơ bản', included: true },
          { text: 'Hỗ trợ 1 trình giả lập', included: true },
          { text: 'Lưu 5 macro', included: true },
          { text: 'Hỗ trợ qua Email', included: true },
          { text: 'Tạo script nâng cao', included: true },
          { text: 'Hỗ trợ nhiều trình giả lập', included: true },
          { text: 'Không giới hạn macro', included: true },
          { text: 'Hỗ trợ ưu tiên 24/7', included: true },
        ],
      },
    },
    image: 'https://res.cloudinary.com/dkrrib3mb/image/upload/v1777108583/Untitled_p7h9uk.png',
    demoVideoId: 'dQw4w9WgXcQ',
    setupGuides: [
      {
        id: 'g1',
        title: 'Installation & Emulator Configuration',
        description: 'Install Emulator Macro Pro and configure it to work seamlessly with your chosen emulator. Includes compatibility checks and optimization settings.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Install Emulator Macro Pro', description: 'Download and install the application on your PC or Mac' },
          { number: 2, title: 'Select Emulator', description: 'Choose from BlueStacks, NoxPlayer, MEmu, or other supported emulators' },
          { number: 3, title: 'Run Compatibility Check', description: 'Let the application verify emulator compatibility and settings' },
          { number: 4, title: 'Optimize Performance', description: 'Configure CPU cores, RAM allocation, and resolution for best performance' }
        ]
      },
      {
        id: 'g2',
        title: 'Recording Your First Macro',
        description: 'Learn how to record macros effectively. Understand timing, touch coordinates, and how to create reliable automation sequences that work consistently.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Start Recording', description: 'Click the record button and the emulator window will show touch coordinates' },
          { number: 2, title: 'Perform Actions', description: 'Play through your gameplay sequence naturally, all actions are recorded' },
          { number: 3, title: 'Stop Recording', description: 'End the recording and save your macro with a meaningful name' },
          { number: 4, title: 'Review & Adjust', description: 'Playback the macro and adjust timing and click positions if needed' },
          { number: 5, title: 'Test Run', description: 'Run the macro multiple times to ensure it works consistently' }
        ]
      },
      {
        id: 'g3',
        title: 'Advanced Macro Scripting',
        description: 'Master advanced scripting techniques including conditional logic, loops, variables, and custom functions for complex automation scenarios.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Open Script Editor', description: 'Access the Advanced Script Editor for manual code editing' },
          { number: 2, title: 'Learn Macro Language', description: 'Understand the macro scripting syntax and available functions' },
          { number: 3, title: 'Add Loops & Conditions', description: 'Implement for loops, while loops, and if/else conditional logic' },
          { number: 4, title: 'Create Variables', description: 'Define and use variables to make macros more flexible and dynamic' },
          { number: 5, title: 'Test & Debug', description: 'Test your script with debug output and error handling' }
        ]
      },
      {
        id: 'g4',
        title: 'Game Integration & Anti-Detection',
        description: 'Integrate with specific games and learn anti-detection strategies. Ensure your automation stays undetectable while maintaining performance.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Game Database', description: 'Browse the game database to find pre-configured settings for your game' },
          { number: 2, title: 'Enable Anti-Detection', description: 'Turn on anti-detection features to avoid game ban systems' },
          { number: 3, title: 'Add Random Delays', description: 'Configure random delays between actions to mimic human behavior' },
          { number: 4, title: 'Screen Verification', description: 'Add screen checks to verify game state before executing actions' }
        ]
      },
      {
        id: 'g5',
        title: 'Performance Monitoring & Debugging',
        description: 'Monitor macro performance, troubleshoot issues, and optimize execution. Learn debugging techniques and performance profiling.',
        youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        steps: [
          { number: 1, title: 'Open Performance Monitor', description: 'View real-time execution stats and performance metrics' },
          { number: 2, title: 'Check Execution Time', description: 'Analyze how long each macro action takes to execute' },
          { number: 3, title: 'Enable Debug Log', description: 'Turn on detailed logging to track macro execution step by step' },
          { number: 4, title: 'Troubleshoot Failures', description: 'Identify failed actions and adjust timing or coordinates' },
          { number: 5, title: 'Optimize Efficiency', description: 'Remove unnecessary delays and consolidate operations' }
        ]
      }
    ]
  }
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug)
}
