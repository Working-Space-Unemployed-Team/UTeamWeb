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

export type DurationType = '1-month' | '3-months' | '6-months' | '1-year' | '2-years' | 'lifetime'

export interface PlanPricing {
  '1-month': number
  '3-months': number
  '6-months': number
  '1-year': number
  '2-years': number
  'lifetime': number
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
  pricing: PlanPricing
  plan: PlanInfo
  image: string
  demoVideoId: string
  setupGuides: SetupGuide[]
}

export const durationLabels: Record<DurationType, string> = {
  '1-month': '1 Tháng',
  '3-months': '3 Tháng',
  '6-months': '6 Tháng',
  '1-year': '1 Năm',
  '2-years': '2 Năm',
  'lifetime': 'Vĩnh viễn',
}

export function getLowestPrice(pricing: PlanPricing): number {
  const allPrices = Object.values(pricing);
  return Math.min(...allPrices)
}

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'viking-rise-auto',
    name: 'Viking Rise Auto',
    description: 'Tự động hóa trò chơi Viking Rise của bạn với bot thông minh',
    fullDescription: 'Viking Rise Auto là công cụ hỗ trợ quản lý nhiều tài khoản và tự động hóa các chuỗi nhiệm vụ lặp đi lặp lại như: thu thập tài nguyên, đánh Niflung, nhận thưởng và quyên góp Clan. Mức độ tự động hóa của phần mềm đạt khoảng 90%. Phần lớn thời gian tool sẽ tự động xoay vòng tài khoản và xử lý lỗi cơ bản, nhưng trong một số trường hợp game bị kẹt giao diện không xác định (giả lập delay, mất mạng, thông báo bất ngờ...), người dùng sẽ cần can thiệp thủ công một chút (kéo về các màn hình cơ sở) để tool nhận diện và tiếp tục tự động gỡ kẹt.',
    pricing: {
        '1-month': 400000,
        '3-months': 1000000,
        '6-months': 2000000,
        '1-year': 3500000,
        '2-years': 5000000,
        'lifetime': 8000000,
      },
    plan: {
        name: 'Tiêu chuẩn',
        description: 'Đầy đủ tính năng',
        features: [
          { text: 'Giao diện Control Panel trực quan, dễ sử dụng', included: true },
          { text: 'Quản lý đa giả lập & Tài khoản không giới hạn', included: true },
          { text: 'Tự động mở game & Dọn dẹp quảng cáo', included: true },
          { text: 'Tự động chuyển đổi tài khoản và xoay nhân vật', included: true },
          { text: 'Auto thu thập tài nguyên mỏ (Lúa, Gỗ, Đá, Vàng)', included: true },
          { text: 'Auto tìm và đánh Niflung Nhỏ theo chu kỳ', included: true },
          { text: 'Tự động nhận quà thư, VIP & Đóng góp Công nghệ Clan', included: true },
          { text: 'Chạy nhiệm vụ theo sức mạnh', included: true },
          { text: 'Hệ thống Cứu hộ đa tầng (Tự động lùi về Home gỡ kẹt)', included: true }
        ],
      },
    image: 'https://res.cloudinary.com/dkrrib3mb/image/upload/v1777108493/Untitled_vdwbze.jpg',
    demoVideoId: 'dQw4w9WgXcQ',
    setupGuides: [
      {
        id: 'g1',
        title: 'Cài đặt, cấu hình giả lập và game',
        description: 'Hướng dẫn cài đặt, cấu hình giả lập và game',
        youtubeLink: 'https://youtu.be/D40PhKpMjDc?si=K5WQ5zhKHxWXMq3m',
        steps: [
          { number: 1, title: 'Download & Install', description: 'Download Viking Rise Auto from the official website and run the installer' },
          { number: 2, title: 'Connect Your Account', description: 'Link your Viking Rise game account using secure OAuth authentication' },
          { number: 3, title: 'Choose Gaming Style', description: 'Select your preferred playstyle: Aggressive, Balanced, or Conservative' },
          { number: 4, title: 'Start Automation', description: 'Launch the bot and let it run your first automated session' }
        ]
      },
      {
        id: 'g2',
        title: 'Cài đặt 1.1.1.1 để chống check IP',
        description: 'Hướng dẫn cài đặt 1.1.1.1 để chống check IP',
        youtubeLink: 'https://youtu.be/spCFhXw_f9M?si=DvB6TSWF8gu-iOPV',
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
        title: 'Hướng dẫn cài và kích hoạt TOOL',
        description: 'Hướng dẫn cài và kích hoạt TOOL',
        youtubeLink: 'https://youtu.be/TSKBHjW_UGY?si=cu2ylbxqASYob4wD',
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
        '1-month': 300000,
        '3-months': 800000,
        '6-months': 1500000,
        '1-year': 2500000,
        '2-years': 4000000,
        'lifetime': 6000000,
      },
    plan: {
        name: 'Tiêu chuẩn',
        description: 'Đầy đủ tính năng',
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
        '1-month': 600000,
        '3-months': 1500000,
        '6-months': 2800000,
        '1-year': 4500000,
        '2-years': 8000000,
        'lifetime': 12000000,
      },
    plan: {
        name: 'Tiêu chuẩn',
        description: 'Đầy đủ tính năng',
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
        '1-month': 600000,
        '3-months': 1500000,
        '6-months': 2800000,
        '1-year': 4500000,
        '2-years': 8000000,
        'lifetime': 12000000,
      },
    plan: {
        name: 'Tiêu chuẩn',
        description: 'Đầy đủ tính năng',
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
