
Prism.languages["qs"] = {
    'comment': [
          {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: true,
              greedy: true
          },
          {
              pattern: /(^|[^\\:])\/\/.*/,
              lookbehind: true,
              greedy: true
          }
      ],
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
  
    'keyword': {
            pattern: /\b(?:Begin SQL|This|End SQL|For each|Class extends|Class constructor|End for each|If|Else|End if|Case of|End case|DECLARE|For|End for|Use|End use|While|End while|Repeat|Until|Function|var|property|exposed|local|return|break|continue)\b/,
    },
    
    'builtin': [
      {
        pattern: /(: )(4D|Integer|Text|Real|Picture|Pointer|Boolean|Time|Date|Blob|Object|Collection|Variant|cs)/,
        lookbehind : true
      }
    ],
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      'memberFunction': {
      pattern : /(\.)#?[_$a-zA-Z0-9\xA0-\uFFFF]+(?=\()/,
      greedy: true,
      alias: 'function'
    },
    'command': [
    {
      pattern : /[_$a-zA-Z0-9\xA0-\uFFFF]+(?=\()/,
      alias: 'function'
    },
    {
        pattern : /(4D|cs)/,
        alias: 'function'
    }
    ],
    'constant': {
      pattern: /\b(?:Null)\b/,
    },
    'property': {
      pattern : /(\.)[_$a-zA-Z0-9\xA0-\uFFFF]+/,
      lookbehind: true,
    },
    'variable': 
    {
      pattern:/([_$a-zA-Z0-9\xA0-\uFFFF]+)/
    },
    'boolean': /\b(?:True|False)\b/,
  
    'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?(?!D)/,
    'operator': /:=|->|[!?:#\-+*\/%&|^!=<>]=?|\?\?=?|\?\.?|[~:]|\*\|/,
    'punctuation': /[{}[\];(),.:]/
  };
  
  
  
  Prism.languages.code4d = Prism.languages["4d"]
  
  