(function(_0x1d8a74,_0x4ab68d){const _0x296ac5=_0xce8c,_0x438121=_0x1d8a74();while(!![]){try{const _0x4808de=-parseInt(_0x296ac5(0x184))/0x1*(-parseInt(_0x296ac5(0x18a))/0x2)+-parseInt(_0x296ac5(0x183))/0x3*(parseInt(_0x296ac5(0x180))/0x4)+parseInt(_0x296ac5(0x18f))/0x5+-parseInt(_0x296ac5(0x195))/0x6+-parseInt(_0x296ac5(0x181))/0x7*(-parseInt(_0x296ac5(0x185))/0x8)+-parseInt(_0x296ac5(0x182))/0x9+-parseInt(_0x296ac5(0x186))/0xa;if(_0x4808de===_0x4ab68d)break;else _0x438121['push'](_0x438121['shift']());}catch(_0x101e97){_0x438121['push'](_0x438121['shift']());}}}(_0x1483,0x8993a));import _0x2fda2f from'express';import{createServer}from'http';import _0x52d647 from'path';import{Socket}from'socket.io';import{toBuffer}from'qrcode';import _0x51365f from'node-fetch';function _0xce8c(_0xd64fd7,_0x20ea7b){const _0x1483c7=_0x1483();return _0xce8c=function(_0xce8c88,_0x1e5d91){_0xce8c88=_0xce8c88-0x17d;let _0x59be13=_0x1483c7[_0xce8c88];return _0x59be13;},_0xce8c(_0xd64fd7,_0x20ea7b);}function connect(_0x3775ea,_0x7fa9c7){const _0x5e0ce1=_0xce8c;let _0x1e3393=global[_0x5e0ce1(0x192)]=_0x2fda2f();console[_0x5e0ce1(0x18d)](_0x1e3393);let _0x5d6759=global[_0x5e0ce1(0x187)]=createServer(_0x1e3393),_0x18b7cb=_0x5e0ce1(0x18e);_0x3775ea['ev']['on'](_0x5e0ce1(0x18b),function _0x3bbcd4({qr:_0xa5b31f}){if(_0xa5b31f)_0x18b7cb=_0xa5b31f;}),_0x1e3393[_0x5e0ce1(0x189)](async(_0xf8f1c9,_0x1a8f51)=>{const _0x57bb89=_0x5e0ce1;_0x1a8f51['setHeader']('content-type',_0x57bb89(0x188)),_0x1a8f51[_0x57bb89(0x190)](await toBuffer(_0x18b7cb));}),_0x5d6759['listen'](_0x7fa9c7,()=>{const _0x5e5861=_0x5e0ce1;console[_0x5e5861(0x18d)](_0x5e5861(0x18c),_0x7fa9c7);if(opts['keepalive'])keepAlive();});}function pipeEmit(_0x43d168,_0x224a51,_0x145391=''){const _0x954eae=_0xce8c;let _0x5c1bf4=_0x43d168[_0x954eae(0x17d)];return _0x43d168[_0x954eae(0x17d)]=function(_0x416516,..._0x5d4b75){const _0xe258b4=_0x954eae;_0x5c1bf4[_0xe258b4(0x17d)](_0x416516,..._0x5d4b75),_0x224a51[_0xe258b4(0x17d)](_0x145391+_0x416516,..._0x5d4b75);},{'unpipeEmit'(){const _0x465203=_0x954eae;_0x43d168[_0x465203(0x17d)]=_0x5c1bf4;}};}function _0x1483(){const _0x36e575=['429tJiLRD','24KenDUY','1961330lwhOYT','server','image/png','use','4366ZZNmkU','connection.update','App\x20listened\x20on\x20port','log','invalid','3920115adMdfg','end','https://','app','REPL_SLUG','env','6687390WPByat','emit','error','catch','1576276FQoMSf','1420811RAYHoa','550512pfeCPD','3dCfAGj'];_0x1483=function(){return _0x36e575;};return _0x1483();}function keepAlive(){const _0x3c2e1c=_0xce8c,_0x561b46=_0x3c2e1c(0x191)+process['env'][_0x3c2e1c(0x193)]+'.'+process[_0x3c2e1c(0x194)]['REPL_OWNER']+'.repl.co';if(/(\/\/|\.)undefined\./['test'](_0x561b46))return;setInterval(()=>{const _0x6f3e59=_0x3c2e1c;_0x51365f(_0x561b46)[_0x6f3e59(0x17f)](console[_0x6f3e59(0x17e)]);},0x5*0x3e8*0x3c);}export default connect;