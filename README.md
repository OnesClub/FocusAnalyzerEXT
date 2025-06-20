# Focus Analyzer - Chrome Extension

A Chrome extension that helps you analyze and improve your browsing habits by tracking focus patterns and providing smart interventions.

## Features

- **Real-time Activity Tracking**: Monitor your browsing patterns and time spent on different websites
- **Focus Analytics**: Visualize your productivity trends with interactive charts
- **Smart Interventions**: Receive gentle reminders when you're getting distracted
- **Focus Timer**: Built-in Pomodoro timer to help maintain productivity
- **Privacy-Focused**: All data stored locally, no external APIs

## Installation

1. Clone this repository:
```bash
git clone [repository-url]
cd focus-analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Build the extension:
```bash
npm run build
```

4. Load the extension in Chrome:
- Open Chrome and navigate to `chrome://extensions/`
- Enable "Developer mode" in the top right
- Click "Load unpacked" and select the `dist` folder

## Development

- Run development build with auto-reload:
```bash
npm run watch
```

## Tech Stack

- JavaScript ES6+
- Webpack for bundling
- Chart.js for data visualization
- Chrome Extension APIs

## Project Structure

```
├── src/
│   ├── background.js     # Background script
│   ├── content.js        # Content script
│   ├── popup.js          # Popup script
│   ├── dashboard.js      # Dashboard script
│   ├── popup.html        # Popup UI
│   ├── dashboard.html    # Dashboard UI
│   ├── icons/           # Extension icons
│   └── styles/          # CSS styles
├── dist/                # Built extension
├── webpack.config.js    # Webpack configuration
└── package.json        # Project dependencies
```

## Features

### Activity Tracking
- Real-time monitoring of active tabs
- Time tracking for each website
- Automatic categorization of productive vs. distracting sites

### Focus Analytics
- Daily and weekly focus scores
- Time distribution charts
- Productivity patterns analysis
- Top productive and distracting sites

### Smart Interventions
- Customizable distraction thresholds
- Gentle reminders for extended unproductive time
- Adjustable intervention frequency

### Focus Timer
- Pomodoro technique implementation
- Customizable work/break intervals
- Session statistics tracking

### Settings
- Customizable focus goals
- Intervention preferences
- Data management options

## Privacy

This extension prioritizes user privacy:
- All data stored locally in Chrome storage
- No external API calls or data collection
- User has full control over their data
- Option to export or clear data at any time

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.