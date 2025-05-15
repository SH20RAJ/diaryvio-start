"use client";

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/entries",
    description: "Retrieve a list of journal entries",
    parameters: [
      { name: "page", type: "integer", description: "Page number for pagination" },
      { name: "limit", type: "integer", description: "Number of entries per page" },
      { name: "type", type: "string", description: "Filter by entry type (text, voice, video)" }
    ]
  },
  {
    method: "POST",
    path: "/api/v1/entries",
    description: "Create a new journal entry",
    parameters: [
      { name: "content", type: "string", description: "Entry content" },
      { name: "type", type: "string", description: "Entry type (text, voice, video)" },
      { name: "tags", type: "array", description: "Array of tag strings" }
    ]
  },
  {
    method: "GET",
    path: "/api/v1/entries/{id}",
    description: "Retrieve a specific journal entry",
    parameters: [
      { name: "id", type: "string", description: "Entry ID" }
    ]
  }
];

const codeExamples = [
  {
    title: "Authentication",
    description: "How to authenticate with the API using your API key",
    language: "javascript",
    code: `const API_KEY = 'your_api_key';

const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};`
  },
  {
    title: "Create Entry",
    description: "Example of creating a new journal entry",
    language: "javascript",
    code: `const response = await fetch('https://api.diaryvio.com/v1/entries', {
  method: 'POST',
  headers,
  body: JSON.stringify({
    content: 'Today was a great day...',
    type: 'text',
    tags: ['personal', 'reflection']
  })
});

const entry = await response.json();`
  },
  {
    title: "List Entries",
    description: "Example of retrieving a list of entries",
    language: "javascript",
    code: `const response = await fetch(
  'https://api.diaryvio.com/v1/entries?page=1&limit=10&type=text',
  { headers }
);

const { entries, total, page } = await response.json();`
  }
];

const sdks = [
  {
    name: "JavaScript",
    description: "Official JavaScript SDK for Node.js and browsers",
    icon: <CodeBracketIcon className="w-6 h-6" />
  },
  {
    name: "Python",
    description: "Python SDK with async support",
    icon: <CommandLineIcon className="w-6 h-6" />
  },
  {
    name: "REST API",
    description: "Full REST API documentation",
    icon: <DocumentTextIcon className="w-6 h-6" />
  }
];

export default function ApiPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              API Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Integrate DiaryVio into your applications with our powerful API
          </p>
        </motion.div>

        {/* SDKs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Official SDKs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {sdk.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {sdk.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {sdk.description}
                </p>
                <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                  <span className="font-medium">View Documentation</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Endpoints Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            API Endpoints
          </h2>
          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET'
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400'
                        : 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-gray-900 dark:text-white font-mono">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {endpoint.description}
                  </p>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                    Parameters
                  </h4>
                  <div className="space-y-4">
                    {endpoint.parameters.map((param, paramIndex) => (
                      <div key={paramIndex} className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <code className="text-sm font-medium text-gray-900 dark:text-white">
                              {param.name}
                            </code>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {param.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {param.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Code Examples */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Code Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {example.description}
                  </p>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <pre className="text-gray-100 font-mono text-sm overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Sign up for an API key and start building with DiaryVio today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors">
                Get API Key
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                View Full Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 