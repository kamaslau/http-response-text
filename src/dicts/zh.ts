export const dict: dictRecord = {
  // 信息性响应
  100: '可继续',
  101: '协议切换中',
  102: '处理中',
  103: '可预加载',

  // 成功响应
  200: '请求成功',
  201: '已创建',
  202: '已接收',
  203: '已完成被转发请求',
  204: '无正文',
  205: '可重置',
  206: '成功返回局部资源',
  207: '多种状态可用',
  208: '已回报',
  226: '已返回增量',

  // 重定向消息
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy', // Deprecated
  306: 'Switch Proxy', // Unused
  307: 'Temporary Redirect',
  308: 'Permanent Redirect',

  // 客户端错误响应
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Content Too Large',
  414: 'URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable',
  417: 'Expectation Failed',
  418: "I'm a teapot",
  421: 'Misdirected Request',
  422: 'Unprocessable Content',
  423: 'Locked',
  424: 'Failed Dependency',
  425: 'Too early',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  451: 'Unavailable For Legal Reasons',

  // 服务端错误响应
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  508: 'Loop Detected',
  510: 'Not Extended',
  511: 'Network Authentication Required'
}
