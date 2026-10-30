// topic3.js - القسم 33، الموضوع 3: مشروع 12: تطبيق محادثة فورية (Realtime Chat Application)
// يحتوي على 13 موضوعاً فرعياً مفصلاً وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_33_3 = {
  id: "topic-33-3",
  title: "مشروع 12: تطبيق محادثة فورية Realtime Chat",
  description: "دليل معماري وهندسي متقدم لبناء تطبيق محادثة فورية متعدد القنوات وغرف الدردشة الفردية والجماعية مستوحى من Slack وTelegram، مدعوم باتصال WebSockets المزدوج، وحالات الاتصال والكتابة، والتمرير اللانهائي للرسائل وتشفير البيانات.",
  subtopics: [
    {
      id: "33.3.a",
      title: "تصميم واجهة المحادثات (Chat App Layout & Viewports)",
      technicalTerm: {
        english: "Chat Viewport & Virtualized Feed Layout",
        pronunciation: "شات فيوبورت آند فيرتشوالايزد فيد لاي آوت",
        arabicMeaning: "تخطيط شاشة المحادثة وموجز الرسائل الافتراضي"
      },
      description: "تتميز واجهات تطبيقات الدردشة الفورية بتحدي فريد: الحفاظ على ثبات منطقة المحادثة عند ظهور لوحة المفاتيح الافتراضية في الهواتف، وتثبيت التمرير التلقائي عند أسفل الشاشة (Pin to Bottom) عند وصول رسائل جديدة، مع السماح للمستخدم بالتمرير لأعلى لتصفح الرسائل القديمة دون أن تقفز الشاشة بشكل مفاجئ. يعتمد التخطيط القياسي على لوحة جانبية لقائمة القنوات والمحادثات (`Sidebar: 300px`)، ولوحة محادثة رئيسية (`Chat Viewport`) مقسمة إلى رأس المحادثة، وموجز الرسائل ذي التمرير العكسي، وحقل إدخال الرسالة في الأسفل.",
      realWorldAnalogy: "مثل غرفة الاجتماعات الذكية؛ يوجد باب للاختيار بين القاعات (الشريط الجانبي)، وطاولة نقاش يظهر عليها شريط الأحداث الحديثة أولاً بأول، ومايكروفون ثابت أمامك للتحدث.",
      whyItMatters: "التعامل الخاطئ مع حاويات المحادثة يسبب قفزات مزعجة عند الكتابة في الهواتف المحمولة وضياع موضع القراءة الحالي للمستخدم.",
      syntax: "/* تخطيط محادثة حديث مع تثبيت التمرير السفلي */\n<div className=\"flex h-screen overflow-hidden\">\n  <aside className=\"w-80 border-r flex flex-col\" />\n  <main className=\"flex-1 flex flex-col min-w-0\" />\n</div>",
      simpleExample: `// هيكل واجهة المحادثة البسيط بالـ Tailwind
import React from 'react';

export function ChatAppLayout({ sidebar, chatHeader, messageList, messageInput }) {
  return (
    // حاوية تمتد بارتفاع الشاشة مع حظر التمرير الخارجي
    <div className="flex h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* الشريط الجانبي للمحادثات */}
      <aside className="w-80 bg-slate-900 border-e border-slate-800 flex flex-col flex-shrink-0">
        {sidebar}
      </aside>

      {/* لوحة المحادثة النشطة */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-950">
        {/* رأس المحادثة */}
        <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between flex-shrink-0">
          {chatHeader}
        </header>

        {/* مساحة عرض الرسائل */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messageList}
        </div>

        {/* حقل إدخال الرسائل الثابت في الأسفل */}
        <footer className="p-4 border-t border-slate-800 bg-slate-900/60 flex-shrink-0">
          {messageInput}
        </footer>
      </main>
    </div>
  );
}`,
      advancedExample: `// مكون المحادثة المتطور مع التثبيت الذكي للتمرير لأسفل عند وصول رسالة جديدة
import React, { useRef, useEffect } from 'react';

export function SmartChatFeed({ messages, currentUserId }) {
  // مرجع لحاوية التمرير
  const scrollContainerRef = useRef(null);
  // مرجع لتتبع ما إذا كان المستخدم يقرأ الرسائل القديمة في الأعلى
  const isNearBottomRef = useRef(true);

  // فحص موضع التمرير لتحديد هل نلتصق بالأسفل تلقائياً أم لا
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    // إذا كان البعد عن الأسفل أقل من 120 بكسل، نعتبر المستخدم في الأسفل
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    isNearBottomRef.current = distanceFromBottom < 120;
  };

  // التمرير السلس للأسفل فقط إذا كان المستخدم في أسفل القائمة
  useEffect(() => {
    if (isNearBottomRef.current && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto px-6 py-4 space-y-3 scrollbar-thin scrollbar-thumb-slate-800"
    >
      {messages.map((msg) => {
        const isMine = msg.senderId === currentUserId;
        return (
          <div
            key={msg.id}
            className={\`flex flex-col \${isMine ? 'items-end' : 'items-start'}\`}
          >
            <div
              className={\`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm shadow-md leading-relaxed \${
                isMine
                  ? 'bg-indigo-600 text-white rounded-br-xs'
                  : 'bg-slate-800 text-slate-200 rounded-bl-xs border border-slate-700/60'
              }\`}
            >
              {msg.text}
            </div>
            <span className="text-[10px] text-slate-500 mt-1 px-1">
              {new Date(msg.timestamp).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        );
      })}
    </div>
  );
}`,
      outputExplanation: "يحافظ هذا المكون على استقرار التمرير؛ فلا يُجبر المستخدم على النزول لأسفل إذا كان يقرأ رسالة قديمة في الأعلى، بينما ينزل به فورياً إذا كان بالفعل في قاع المحادثة ووصلت رسالة جديدة.",
      commonMistakes: "استخدام `element.scrollIntoView()` بشكل أعمى عند كل رسالة جديدة، مما يزعج المستخدم ويسلبه التحكم أثناء تصفحه للرسائل الأقدم.",
      bestPractices: "افحص دائماً `distanceFromBottom` قبل اتخاذ قرار التمرير التلقائي لتوفير تجربة مستخدم تحاكي واتساب وتليجرام.",
      visualInfographic: `<svg viewBox="0 0 600 220" className="w-full h-auto">
  <rect width="600" height="220" rx="14" fill="#0f172a" />
  <rect x="20" y="20" width="160" height="180" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="35" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold">Channels & DMs (Sidebar)</text>
  <rect x="35" y="60" width="130" height="25" rx="4" fill="#334155" />
  <rect x="35" y="95" width="130" height="25" rx="4" fill="#334155" />
  <rect x="35" y="130" width="130" height="25" rx="4" fill="#334155" />
  <rect x="195" y="20" width="385" height="180" rx="8" fill="#090d16" stroke="#334155" />
  <rect x="195" y="20" width="385" height="35" rx="4" fill="#1e293b" />
  <text x="215" y="42" fill="#e2e8f0" fontSize="12" fontWeight="bold">#general-engineering</text>
  <rect x="215" y="70" width="140" height="30" rx="6" fill="#1e293b" />
  <text x="225" y="90" fill="#94a3b8" fontSize="10">Hello team! 👋</text>
  <rect x="420" y="110" width="140" height="30" rx="6" fill="#4f46e5" />
  <text x="430" y="130" fill="#ffffff" fontSize="10">Reviewing PR now... 🚀</text>
  <rect x="210" y="160" width="355" height="30" rx="6" fill="#1e293b" stroke="#475569" />
  <text x="225" y="180" fill="#64748b" fontSize="10">Type a message...</text>
</svg>`
    },
    {
      id: "33.3.b",
      title: "تنفيذ تسجيل الدخول والمصادقة (Authentication & Session Tokens)",
      technicalTerm: {
        english: "Realtime Auth Handshake & JWT Passing",
        pronunciation: "ريال تايم أوث هاندشيك آند جيه دبليو تي باسنج",
        arabicMeaning: "مصافحة المصادقة اللحظية وتمرير رموز JWT"
      },
      description: "تختلف مصادقة تطبيقات الويب التقليدية عن تطبيقات الـ Realtime؛ في تطبيقات الـ Chat، لا يقتصر التحقق على ترويسة `Authorization: Bearer <token>` في طلبات HTTP العادية، بل يمتد إلى مرحلة مصافحة بروتوكول الويب سوكيت (WebSocket Handshake). يتم التحقق من صحة رمز JWT قبل ترقية الاتصال (Upgrade Header)، وتعيين هوية المستخدم المتصل ومعرف الغرفة لضمان عزل البيانات وحظر المتسللين.",
      realWorldAnalogy: "مثل إبراز شارة التعريف عند بوابة قصر الرئاسة؛ لا يكفي أن تبرزها عند الدخول من البوابة الخارجية، بل يرافقك حارس للتأكد من شارتك قبل دخول أي قاعة مفاوضات خاصة.",
      whyItMatters: "أي ثغرة في مصافحة الويب سوكيت قد تسمح لمستخدم غير مصرح له بالتنصت على قنوات غرف المحادثات السرية واستقبال رسائل الشركات الخاصة.",
      syntax: "// تمرير رمز التوثيق أثناء مصافحة الويب سوكيت\nconst socket = new WebSocket(\`wss://api.chat.com/ws?token=\${authToken}\`);\n// أو باستخدام مكتبة socket.io\nconst ioSocket = io('https://api.chat.com', { auth: { token: authToken } });",
      simpleExample: `// تهيئة جلسة المستخدم وحفظ التوكن للاستخدام في الاتصال اللحظي
import React, { useState } from 'react';

export function ChatLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    // توليد توكن محاكى وتعيين المستخدم
    const mockToken = \`jwt-\${btoa(username)}-\${Date.now()}\`;
    localStorage.setItem('chat_token', mockToken);
    onLoginSuccess({ id: \`user-\${Date.now()}\`, name: username, token: mockToken });
  };

  return (
    <div className="flex items-center justify-center h-full p-4">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white text-center">تسجيل الدخول إلى المحادثة</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="أدخل اسمك المستعار..."
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
          required
        />
        <button type="submit" className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition-colors">
          انضمام للمحادثة
        </button>
      </form>
    </div>
  );
}`,
      advancedExample: `// إدارة جلسة المصادقة وتجديد التوكن التلقائي (Token Refresh) قبل انتهاء الصلاحية
import { useEffect, useRef } from 'react';

export function useChatAuthManager(token, onTokenExpired, onTokenRefreshed) {
  const refreshTimerRef = useRef(null);

  useEffect(() => {
    if (!token) return;

    try {
      // فك شفرة الـ payload لمعرفة تاريخ الانتهاء (exp)
      const base64Url = token.split('.')[1];
      const payload = JSON.parse(atob(base64Url));
      const expiresInMs = payload.exp * 1000 - Date.now();

      // جدولة تجديد التوكن قبل دقيقتين من انتهاء صلاحيته
      const refreshBufferMs = 1000 * 60 * 2;
      const timeout = Math.max(expiresInMs - refreshBufferMs, 1000);

      refreshTimerRef.current = setTimeout(async () => {
        try {
          const res = await fetch('/api/auth/refresh-token', { method: 'POST' });
          if (!res.ok) throw new Error('فشل تجديد الجلسة');
          const data = await res.json();
          onTokenRefreshed(data.newToken);
        } catch (e) {
          onTokenExpired();
        }
      }, timeout);
    } catch (err) {
      console.warn('Invalid JWT format or mock token');
    }

    return () => {
      if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
    };
  }, [token, onTokenExpired, onTokenRefreshed]);
}`,
      outputExplanation: "يقوم هذا النظام بفحص وتجديد توكن المصادقة تلقائياً قبل انتهائه بالخلفية لضمان عدم انقطاع اتصال الـ WebSocket الفوري أثناء تحدث المستخدم.",
      commonMistakes: "تخزين كلمة المرور أو البيانات الحساسة داخل رمز JWT المرسل عبر الرابط كـ Query Param، مما يعرضه للتسجيل في سجلات الخادم (Access Logs).",
      bestPractices: "استخدم ملفات تعريف الارتباط الآمنة `HttpOnly Cookies` لمصافحة الويب سوكيت إن أمكن، أو مرر التوكن داخل كائن بروتوكول `Sec-WebSocket-Protocol` لتفادي ظهوره في الروابط.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="100" y="80" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">React Client</text>
  <text x="100" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">Auth JWT Token</text>
  <path d="M 175 75 L 265 75" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="220" y="65" fill="#38bdf8" fontSize="9" textAnchor="middle">Upgrade WS + Token</text>
  <rect x="270" y="45" width="150" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="345" y="80" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">Auth Gateway</text>
  <text x="345" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">Verify Signature</text>
  <path d="M 425 75 L 515 75" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="470" y="65" fill="#34d399" fontSize="9" textAnchor="middle">101 Switching Prot</text>
  <rect x="520" y="45" width="50" height="90" rx="8" fill="#10b981" />
  <text x="545" y="95" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">WS OK</text>
</svg>`
    },
    {
      id: "33.3.c",
      title: "إنشاء قائمة المحادثات والقنوات (Conversations & Channels List)",
      technicalTerm: {
        english: "Conversation Master-Detail Architecture",
        pronunciation: "كونفرسيشن ماستر ديتيل آركيتكتشر",
        arabicMeaning: "معمارية قائمة المحادثات والتفاصيل الرئيسية"
      },
      description: "تعتمد تطبيقات المحادثة على نمط Master-Detail الكلاسيكي؛ تعرض اللوحة الجانبية قائمة بجميع المحادثات مرتبة تنازلياً حسب توقيت آخر رسالة (Last Message Timestamp). تحتوي كل محادثة على صورة القناة أو المستخدم، الاسم، مقتطف من آخر رسالة، توقيت نسبي، وعداد الرسائل غير المقروءة (Unread Badge). عند النقر على محادثة يتم تحديث مسار الـ URL لتحديد الغرفة النشطة `/chat/:conversationId`.",
      realWorldAnalogy: "مثل صندوق البريد الوارد؛ تُعرض الرسائل مرتبة حسب الأحدث مع إبراز الرسائل غير المقروءة بخط عريض، والنقر على أي رسالة يفتح محتواها الكامل في المنتصف.",
      whyItMatters: "تحديث ترتيب المحادثات لحظياً في القائمة عند استقبال رسالة جديدة في أي قناة هو السمة الأساسية لتجربة مستخدم الدردشة الحية السلسة.",
      syntax: "// نموذج بيانات المحادثة\ninterface Conversation {\n  id: string;\n  name: string;\n  isGroup: boolean;\n  lastMessage?: { text: string; timestamp: number; senderName: string; };\n  unreadCount: number;\n}",
      simpleExample: `// مكون عنصر المحادثة الفردي داخل القائمة الجانبية
import React from 'react';

export function ConversationItem({ conversation, isActive, onSelect }) {
  const { name, lastMessage, unreadCount, isGroup } = conversation;

  return (
    <button
      onClick={() => onSelect(conversation.id)}
      className={\`w-full p-3 flex items-center gap-3 rounded-xl transition-all text-start \${
        isActive ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-350 hover:text-slate-100'
      }\`}
    >
      {/* صورة المحادثة أو أيقونة المجموعة */}
      <div className={\`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 \${
        isActive ? 'bg-indigo-700 text-white' : 'bg-slate-700 text-indigo-400'
      }\`}>
        {isGroup ? '#' : name.slice(0, 2).toUpperCase()}
      </div>

      {/* تفاصيل المحادثة */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-0.5">
          <h4 className="font-semibold text-xs truncate text-white">{name}</h4>
          {lastMessage && (
            <span className="text-[10px] text-slate-400">{lastMessage.time}</span>
          )}
        </div>
        <p className="text-[11px] truncate text-slate-400">{lastMessage?.text || 'لا توجد رسائل بعد'}</p>
      </div>

      {/* شارة الرسائل غير المقروءة */}
      {unreadCount > 0 && (
        <span className="px-2 py-0.5 rounded-full bg-rose-500 text-[10px] font-bold text-white">
          {unreadCount}
        </span>
      )}
    </button>
  );
}`,
      advancedExample: `// Hook لإدارة ترتيب وتحديث قائمة المحادثات ديناميكياً مع كل رسالة واردة
import { useState, useCallback } from 'react';

export function useConversationsManager(initialConversations) {
  const [conversations, setConversations] = useState(initialConversations);

  // تحديث محادثة ونقلها إلى قمة القائمة فورياً عند استقبال رسالة
  const handleIncomingMessage = useCallback((incomingMsg) => {
    setConversations((prev) => {
      const targetIndex = prev.findIndex(c => c.id === incomingMsg.conversationId);
      if (targetIndex === -1) return prev;

      const targetConv = prev[targetIndex];
      const updatedConv = {
        ...targetConv,
        lastMessage: {
          text: incomingMsg.text,
          timestamp: incomingMsg.timestamp,
          senderName: incomingMsg.senderName
        },
        unreadCount: targetConv.unreadCount + 1
      };

      // إزالة المحادثة من موقعها الحالي وإدراجها في قمة المصفوفة (Index 0)
      const rest = prev.filter((_, idx) => idx !== targetIndex);
      return [updatedConv, ...rest];
    });
  }, []);

  // تصفير عداد القراءة عند فتح المحادثة
  const markAsRead = useCallback((conversationId) => {
    setConversations(prev => prev.map(c => c.id === conversationId ? { ...c, unreadCount: 0 } : c));
  }, []);

  return { conversations, handleIncomingMessage, markAsRead };
}`,
      outputExplanation: "يعيد هذا المنطق ترتيب المحادثات تلقائياً بحيث تصعد المحادثة الأكثر نشاطاً إلى أعلى القائمة فوراً، مع تحديث شارة العداد دون الحاجة لإعادة تحميل الصفحة.",
      commonMistakes: "إعادة ترتيب مصفوفة المحادثات باستخدام دالة `sort()` غير المستقرة داخل كل دورة تصيير، مما يسبب بطء الأداء وتشنج القائمة الجانبية أثناء التمرير.",
      bestPractices: "قم بتحديث ونقل العنصر في مصفوفة الحالة عند حدث استقبال الرسالة فقط بدلاً من إعادة فرز المصفوفة بأكملها في كل تصيير.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="240" height="120" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="50" y="55" fill="#94a3b8" fontSize="11" fontWeight="bold">List Before Message</text>
  <rect x="50" y="70" width="200" height="25" rx="4" fill="#334155" />
  <text x="65" y="87" fill="#cbd5e1" fontSize="10">1. Project Team (Active)</text>
  <rect x="50" y="105" width="200" height="25" rx="4" fill="#334155" />
  <text x="65" y="122" fill="#cbd5e1" fontSize="10">2. Sara (Idle)</text>
  <path d="M 285 90 L 325 90" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="305" y="80" fill="#818cf8" fontSize="10" textAnchor="middle">New Msg</text>
  <rect x="340" y="30" width="230" height="120" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="360" y="55" fill="#34d399" fontSize="11" fontWeight="bold">List After (Reordered)</text>
  <rect x="360" y="70" width="190" height="25" rx="4" fill="#065f46" stroke="#10b981" />
  <text x="375" y="87" fill="#ffffff" fontSize="10">★ 1. Sara (BUMPED TO TOP)</text>
  <rect x="360" y="105" width="190" height="25" rx="4" fill="#334155" />
  <text x="375" y="122" fill="#cbd5e1" fontSize="10">2. Project Team</text>
</svg>`
    },
    {
      id: "33.3.d",
      title: "دمج بروتوكول WebSockets (WebSocket Lifecycle & Hooks)",
      technicalTerm: {
        english: "Bi-directional WebSocket Hook Architecture",
        pronunciation: "باي دايريكشنال ويب سوكيت هوك آركيتكتشر",
        arabicMeaning: "معمارية خطاف الويب سوكيت ثنائي الاتجاه"
      },
      description: "بروتوكول WebSockets يوفر قناة اتصال ثنائية الاتجاه ومستمرة (Full-Duplex TCP Connection) بين المتصفح والخادم، مما يسمح بإرسال واستقبال البيانات في أجزاء من الميلي ثانية دون عبء ترويسات HTTP المتكررة. يتم تغليف هذا الاتصال في React عبر Hook مخصص يدير دورة حياة الاتصال: الفتح (`onopen`)، استقبال الرسائل (`onmessage`)، رصد الأخطاء (`onerror`)، والإغلاق النظيف (`onclose`).",
      realWorldAnalogy: "مثل خط هاتف مفتوح ومباشر ومستمر بين غرفتين؛ بمجرد أن يهمس أحدهما في السماعة يسمعه الطرف الآخر فوراً، دون الحاجة للاتصال وطلب الرقم في كل جملة.",
      whyItMatters: "يوفر سرعة استجابة فائقة ويقلل من استهلاك الموارد مقارنة بآليات الاستطلاع الدوري (Polling أو Long Polling) القديمة.",
      syntax: "// إنشاء واستماع لاتصال WebSocket\nconst socket = new WebSocket('wss://api.example.com/chat');\nsocket.onopen = () => console.log('Connected');\nsocket.onmessage = (event) => handleMessage(JSON.parse(event.data));",
      simpleExample: `// اتصال WebSocket أساسي داخل useEffect مع تنظيف عند إلغاء التركيب
import React, { useEffect, useState } from 'react';

export function BasicWebSocketStatus() {
  const [status, setStatus] = useState('جارٍ الاتصال...');

  useEffect(() => {
    // إنشاء الاتصال
    const ws = new WebSocket('wss://echo.websocket.org');

    ws.onopen = () => setStatus('متصل بنجاح 🟢');
    ws.onerror = () => setStatus('حدث خطأ في الاتصال 🔴');
    ws.onclose = () => setStatus('تم قطع الاتصال ⚪');

    // إغلاق الاتصال النظيف عند إزالة المكون
    return () => {
      ws.close();
    };
  }, []);

  return <div className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-white">{status}</div>;
}`,
      advancedExample: `// Hook مخصص وقوي لإدارة اتصال WebSocket مع إرسال الرسائل ومزامنة الحالة
import { useEffect, useRef, useState, useCallback } from 'react';

export function useWebSocket(url, options = {}) {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    if (!url) return;

    const ws = new WebSocket(url);
    socketRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
      options.onOpen?.();
    };

    ws.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);
        setLastMessage(parsed);
        options.onMessage?.(parsed);
      } catch (e) {
        console.error('Failed to parse WS data', e);
      }
    };

    ws.onerror = (err) => {
      options.onError?.(err);
    };

    ws.onclose = () => {
      setIsConnected(false);
      options.onClose?.();
    };

    return () => {
      // إغلاق الكود 1000 يعني إغلاق طبيعي مقصود من العميل
      ws.close(1000, 'Component unmounted');
    };
  }, [url]);

  // دالة إرسال آمنة تتأكد من جاهزية الاتصال
  const sendMessage = useCallback((data) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(data));
      return true;
    }
    console.warn('Cannot send message: WebSocket is not OPEN');
    return false;
  }, []);

  return { isConnected, lastMessage, sendMessage };
}`,
      outputExplanation: "يوفر هذا الـ Hook واجهة برمجية نقية وآمنة للاتصال بالويب سوكيت، مع إدارة تلقائية للتنظيف عند تبديل الصفحات أو إلغاء تركيب المكونات لتجنب تسرب الذاكرة.",
      commonMistakes: "نسيان استدعاء `ws.close()` في دالة التنظيف بـ `useEffect`، مما يؤدي إلى فتح اتصالات متعددة مكررة في كل مرة يعاد فيها تصيير المكون واستهلاك خادم الويب سوكيت.",
      bestPractices: "استخدم دائماً كود الإغلاق الطبيعي `1000` وافحص `ws.readyState === WebSocket.OPEN` قبل محاولة إرسال أي بايت عبر الشبكة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="130" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="80" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">React Client</text>
  <text x="95" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">useWebSocket()</text>
  <path d="M 170 70 L 420 70" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="295" y="60" fill="#34d399" fontSize="10" textAnchor="middle">Client Message (0ms)</text>
  <path d="M 420 110 L 170 110" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="295" y="130" fill="#818cf8" fontSize="10" textAnchor="middle">Server Broadcast (0ms)</text>
  <rect x="430" y="40" width="140" height="100" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="500" y="80" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">WebSocket Server</text>
  <text x="500" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">Room Broadcast</text>
</svg>`
    },
    {
      id: "33.3.e",
      title: "إرسال الرسائل واستقبالها (Optimistic Message Dispatch)",
      technicalTerm: {
        english: "Optimistic Message Pipeline & ACK Handling",
        pronunciation: "أوبتيميستك ميسيدج بايبلاين آند آك هاندلينج",
        arabicMeaning: "مسار إرسال الرسائل المتفائل وتأكيد الاستلام"
      },
      description: "لضمان سرعة فائقة في المحادثات، يتم تطبيق التحديث المتفائل للرسائل: بمجرد أن يضغط المستخدم على زر الإرسال، تظهر الرسالة فوراً في واجهته بحالة 'جاري الإرسال' (Pending) مع معرف مؤقت (Temp ID). يُرسل الطلب عبر WebSocket إلى الخادم، وبمجرد عودة التأكيد (ACK / Server Acknowledgment)، يتم استبدال المعرف المؤقت بالمعرف الدائم الصادر من قاعدة البيانات وتحديث حالة الرسالة إلى 'تم الإرسال' (Sent).",
      realWorldAnalogy: "مثل إلقاء رسالة في صندوق البريد السريع؛ تسجل في مفكرتك فوراً أنك أرسلتها، وتنتظر وصول رسالة التأكيد النصية على هاتفك لتوثيق التسليم الرسمي.",
      whyItMatters: "يحذف أي شعور بالبطء أو التردد أثناء الدردشة، ويمنح المستخدم الثقة الفورية بأن رسالته قيد التسليم حتى في ظروف الشبكة المتذبذبة.",
      syntax: "// نموذج الرسالة المتفائلة مع حالات التسليم\ninterface Message {\n  id: string;\n  tempId?: string;\n  status: 'pending' | 'sent' | 'delivered' | 'failed';\n  text: string;\n  timestamp: number;\n}",
      simpleExample: `// إرسال رسالة متفائلة وإضافتها للحالة فوراً
import React, { useState } from 'react';

export function ChatInputForm({ onSendMessage }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // إنشاء رسالة محلية مؤقتة
    const optimisticMessage = {
      tempId: \`temp-\${Date.now()}\`,
      text: text.trim(),
      status: 'pending',
      timestamp: Date.now()
    };

    onSendMessage(optimisticMessage);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب رسالتك هنا..."
        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
      />
      <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all">
        إرسال
      </button>
    </form>
  );
}`,
      advancedExample: `// خطاف إدارة الرسائل المتفائلة وتسوية تأكيدات الخادم (ACKs)
import { useState, useCallback } from 'react';

export function useChatMessages(initialMessages = [], wsSender) {
  const [messages, setMessages] = useState(initialMessages);

  // إرسال رسالة مع التحديث المتفائل
  const send = useCallback((text, conversationId, senderId) => {
    const tempId = \`temp-\${crypto.randomUUID()}\`;
    const pendingMsg = {
      id: tempId,
      tempId,
      conversationId,
      senderId,
      text,
      status: 'pending',
      timestamp: Date.now()
    };

    // 1. إضافة الرسالة محلياً فوراً
    setMessages(prev => [...prev, pendingMsg]);

    // 2. إرسال الرسالة عبر مقبس الويب
    const success = wsSender({
      type: 'SEND_MESSAGE',
      payload: { tempId, conversationId, text, timestamp: pendingMsg.timestamp }
    });

    if (!success) {
      // وسمها كرسالة فاشلة في حال تعطل الاتصال
      setMessages(prev => prev.map(m => m.tempId === tempId ? { ...m, status: 'failed' } : m));
    }
  }, [wsSender]);

  // تسوية تأكيد الخادم (استبدال tempId بالـ id الحقيقي)
  const handleServerAck = useCallback((ackPayload) => {
    setMessages(prev => prev.map(m => {
      if (m.tempId === ackPayload.tempId) {
        return {
          ...m,
          id: ackPayload.permanentId,
          status: 'sent',
          tempId: undefined
        };
      }
      return m;
    }));
  }, []);

  return { messages, send, handleServerAck };
}`,
      outputExplanation: "يضمن هذا التدفق أن تظهر الرسائل فور الضغط على زر الإرسال مع علامة توضح أنها قيد التسليم، وبمجرد رد الخادم يتم تأكيدها بصمت ودون أي اهتزاز في القائمة.",
      commonMistakes: "الاعتماد على إضافة الرسالة في الواجهة فقط بعد رد الخادم، مما يجعل التطبيق يبدو ثقيلاً وبطيئاً ويشعر المستخدم بالشك في وصول رسالته.",
      bestPractices: "وفر دائماً زراً لإعادة المحاولة (Retry) بجانب الرسائل التي تحمل حالة `failed` لتمكين المستخدم من إعادة إرسالها بنقرة واحدة.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="35" width="160" height="130" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="45" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold">1. Optimistic Add</text>
  <text x="45" y="90" fill="#cbd5e1" fontSize="11">Render: temp-123</text>
  <text x="45" y="115" fill="#f59e0b" fontSize="11">Status: pending ⏳</text>
  <path d="M 195 100 L 235 100" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="35" width="150" height="130" rx="10" fill="#1e293b" stroke="#6366f1" />
  <text x="255" y="65" fill="#818cf8" fontSize="12" fontWeight="bold">2. Server Persist</text>
  <text x="255" y="90" fill="#cbd5e1" fontSize="11">Save to Postgres</text>
  <text x="255" y="115" fill="#94a3b8" fontSize="11">Generate msg_uuid</text>
  <path d="M 395 100 L 435 100" stroke="#10b981" strokeWidth="2" />
  <rect x="440" y="35" width="130" height="130" rx="10" fill="#1e293b" stroke="#10b981" />
  <text x="455" y="65" fill="#34d399" fontSize="12" fontWeight="bold">3. ACK Handled</text>
  <text x="455" y="90" fill="#10b981" fontSize="11">Replace tempId</text>
  <text x="455" y="115" fill="#10b981" fontSize="11">Status: sent ✓</text>
</svg>`
    },
    {
      id: "33.3.f",
      title: "إظهار حالة الاتصال (Online/Offline Presence Detection)",
      technicalTerm: {
        english: "Heartbeat & Presence Subscription",
        pronunciation: "هارت بيت آند بريزنس سبسكريبشن",
        arabicMeaning: "نبضات الاتصال والاشتراك في حالة التواجد"
      },
      description: "تعتمد ميزة التواجد (Presence) على إظهار نقطة خضراء بجانب المستخدمين المتصلين حالياً ونقطة رمادية لغير المتصلين. نظراً لأن انقطاع الإنترنت المفاجئ في هاتف المستخدم قد لا يرسل حدث إغلاق نظيف، يعتمد النظام على نبضات فحص دورية (Ping/Pong Heartbeats) كل 30 ثانية. إذا غابت 3 نبضات متتالية من المستخدم، يعتبر الخادم جلسته منتهية ويبث حدث `USER_OFFLINE` لجميع المشتركين.",
      realWorldAnalogy: "مثل أجهزة مراقبة النبض في المستشفيات؛ تصدر صوتاً دورياً للتأكيد على استمرار الإشارة، وإذا انقطع النبض لعدة ثوانٍ يُطلق جهاز الإنذار صفيراً للتنبيه.",
      whyItMatters: "يمنح المستخدمين معرفة فورية بمن هو متاح للرد في نفس اللحظة وتجنب الانتظار الطويل لزملاء غير متواجدين.",
      syntax: "// بث واستقبال نبضات التواجد\nconst PING_INTERVAL = 30000;\nsetInterval(() => socket.send(JSON.stringify({ type: 'HEARTBEAT' })), PING_INTERVAL);",
      simpleExample: `// شارة حالة الاتصال الخضراء/الرمادية
import React from 'react';

export function PresenceBadge({ isOnline, lastSeen }) {
  return (
    <div className="flex items-center gap-1.5 text-[11px]">
      <span className={\`w-2 h-2 rounded-full \${isOnline ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-slate-500'}\`} />
      <span className={isOnline ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
        {isOnline ? 'متصل الآن' : \`آخر ظهور: \${lastSeen || 'غير معروف'}\`}
      </span>
    </div>
  );
}`,
      advancedExample: `// Hook لإدارة استقبال نبضات الحضور والتواجد لجميع مستخدمي المنصة
import { useState, useEffect } from 'react';

export function usePresenceTracker(wsConnection) {
  // خريطة لتخزين حالات التواجد: { [userId]: { isOnline: boolean, lastSeen: string } }
  const [presenceMap, setPresenceMap] = useState({});

  useEffect(() => {
    if (!wsConnection) return;

    const handlePresenceEvent = (event) => {
      if (event.type === 'PRESENCE_CHANGE') {
        const { userId, isOnline, timestamp } = event.payload;
        setPresenceMap(prev => ({
          ...prev,
          [userId]: {
            isOnline,
            lastSeen: new Date(timestamp).toLocaleTimeString('ar-EG')
          }
        }));
      } else if (event.type === 'INITIAL_PRESENCE_DUMP') {
        // عند بداية الاتصال يتم استلام قائمة التواجد لجميع مستخدمي الغرفة
        setPresenceMap(event.payload);
      }
    };

    wsConnection.addEventListener('message', handlePresenceEvent);
    return () => wsConnection.removeEventListener('message', handlePresenceEvent);
  }, [wsConnection]);

  return { presenceMap };
}`,
      outputExplanation: "يقوم هذا الخطاف بمزامنة حالة التواجد فورياً؛ فبمجرد فتح الزميل للتطبيق أو إغلاقه، تتحول نقطة التواجد بجانب اسمه بين الأخضر والرمادي بلمح البصر.",
      commonMistakes: "الاعتماد فقط على حدث `window.onbeforeunload` في المتصفح لرصد الخروج؛ لأنه لا يعمل إذا نفدت بطارية الهاتف أو انقطع اتصال الواي فاي فجأة.",
      bestPractices: "اعتمد دائماً على آلية خادم نبضات القلب (Server Heartbeat Timeout) كمرجع أساسي ودقيق لتحديد فقدان الاتصال.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <circle cx="80" cy="90" r="30" fill="#1e293b" stroke="#10b981" strokeWidth="3" />
  <text x="80" y="95" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle">Online 🟢</text>
  <path d="M 125 75 L 265 75" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="195" y="65" fill="#10b981" fontSize="9" textAnchor="middle">Ping every 30s</text>
  <path d="M 265 105 L 125 105" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
  <text x="195" y="125" fill="#10b981" fontSize="9" textAnchor="middle">Pong ACK</text>
  <rect x="270" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#475569" />
  <text x="335" y="80" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">Presence Hub</text>
  <text x="335" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle">Tracks active leases</text>
  <rect x="460" y="45" width="110" height="90" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
  <text x="515" y="80" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">Timeout 90s</text>
  <text x="515" y="105" fill="#f87171" fontSize="9" textAnchor="middle">Broadcast Offline</text>
</svg>`
    },
    {
      id: "33.3.g",
      title: "إظهار حالة الكتابة (Debounced Typing Indicators)",
      technicalTerm: {
        english: "Debounced Typing Broadcast Engine",
        pronunciation: "دي باونسد تايبينج برودكاست إنجين",
        arabicMeaning: "محرك بث حالة الكتابة المقيدة بالمهلة"
      },
      description: "تعتبر عبارة 'سارة تكتب الآن...' (Typing Indicator) من أكثر الميزات تفاعلية في الدردشة. لإرسال هذا الحدث بكفاءة دون إغراق الشبكة بالرسائل عند كل ضغطة مفتاح (Keystroke)، يتم تطبيق تقنية التقييد الزمني (Debouncing): عند أول ضغطة يتم إرسال حدث `START_TYPING`، ثم يُعاد ضبط مؤقت لمدة 3 ثوانٍ؛ إذا توقف المستخدم عن الكتابة لمدة 3 ثوانٍ يُرسل تلقائياً حدث `STOP_TYPING` لإخفاء المؤشر.",
      realWorldAnalogy: "مثل وميض قلم الإشارة على الشاشة؛ يضيء طالما تحركت يد الكاتب، وينطفئ تلقائياً بمجرد أن يرفع يده عن اللوح لبضع ثوانٍ.",
      whyItMatters: "يمنع إرسال مئات طلبات المقابس غير الضرورية في الثانية الواحدة، ويضمن تجربة تواصل طبيعية وواقعية.",
      syntax: "// إرسال حدث الكتابة مع Debounce\nconst handleTyping = () => {\n  if (!isTyping) { socket.emit('typing_start'); setIsTyping(true); }\n  clearTimeout(typingTimer);\n  typingTimer = setTimeout(() => { socket.emit('typing_stop'); setIsTyping(false); }, 3000);\n};",
      simpleExample: `// مؤشر حركة النقاط الثلاث الكلاسيكي (Three Bouncing Dots)
import React from 'react';

export function TypingIndicatorDots({ username }) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-400 italic py-1 px-3">
      <span>{username} يكتب الآن</span>
      <div className="flex gap-1 items-center">
        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}`,
      advancedExample: `// Hook لإدارة بث واستقبال أحداث الكتابة مع إيقاف التشغيل التلقائي
import { useState, useRef, useCallback } from 'react';

export function useTypingIndicator(conversationId, currentUserId, onBroadcastTyping) {
  const [typingUsers, setTypingUsers] = useState(new Set());
  const timerRef = useRef(null);
  const isTypingActiveRef = useRef(false);

  // استدعاء هذه الدالة عند كل تغيير في حقل الإدخال
  const notifyTyping = useCallback(() => {
    // إرسال حدث البداية فقط إذا لم يكن مرسلاً بالفعل
    if (!isTypingActiveRef.current) {
      isTypingActiveRef.current = true;
      onBroadcastTyping({ type: 'TYPING_START', conversationId, userId: currentUserId });
    }

    // تصفير وإعادة تعيين مهلة الإيقاف بعد 2.5 ثانية من آخر ضغطة مفتاح
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      isTypingActiveRef.current = false;
      onBroadcastTyping({ type: 'TYPING_STOP', conversationId, userId: currentUserId });
    }, 2500);
  }, [conversationId, currentUserId, onBroadcastTyping]);

  // معالجة الأحداث الواردة من الأعضاء الآخرين في الغرفة
  const handleRemoteTypingEvent = useCallback((event) => {
    if (event.userId === currentUserId || event.conversationId !== conversationId) return;

    setTypingUsers(prev => {
      const next = new Set(prev);
      if (event.type === 'TYPING_START') {
        next.add(event.userName);
      } else if (event.type === 'TYPING_STOP') {
        next.delete(event.userName);
      }
      return next;
    });
  }, [conversationId, currentUserId]);

  return { typingUsers: Array.from(typingUsers), notifyTyping, handleRemoteTypingEvent };
}`,
      outputExplanation: "يضبط هذا الكود بث أحداث الكتابة بذكاء، فلا يرسل سوى إشارتين فقط (بداية وتوقف) بدلاً من إرسال رسالة مع كل حرف مكتوب، مع إدارة مرئية لأكثر من كاتب في نفس الوقت.",
      commonMistakes: "إرسال حدث WebSocket مع كل حدث `onChange` بدون تقييد زمني، مما يتسبب في حظر المتصفح أو إرهاق خادم المقابس عند الكتابة السريعة.",
      bestPractices: "استخدم مؤقت تصفير تلقائي على جهاز المستلم أيضاً (Recipient Auto-expire)، بحيث يختفي مؤشر الكتابة تلقائياً بعد 4 ثوانٍ حتى لو فُقد اتصال المرسل قبل إرسال حدث `TYPING_STOP`.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="50" width="160" height="80" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="110" y="80" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">User Keystrokes</text>
  <text x="110" y="105" fill="#cbd5e1" fontSize="10" textAnchor="middle">'h'...'e'...'l'...'l'...'o'</text>
  <path d="M 200 90 L 260 90" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="270" y="50" width="140" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="340" y="80" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Debounce (2.5s)</text>
  <text x="340" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle">1 START msg only</text>
  <path d="M 420 90 L 480 90" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="490" y="50" width="80" height="80" rx="8" fill="#10b981" />
  <circle cx="515" cy="90" r="4" fill="#ffffff" />
  <circle cx="530" cy="90" r="4" fill="#ffffff" />
  <circle cx="545" cy="90" r="4" fill="#ffffff" />
</svg>`
    },
    {
      id: "33.3.h",
      title: "إظهار حالة قراءة الرسائل (Read Receipts & Double Ticks)",
      technicalTerm: {
        english: "Read Receipts & Intersection Tracking",
        pronunciation: "ريد ريسيتس آند إنترسكشن تراكينج",
        arabicMeaning: "إشعارات قراءة الرسائل وتتبع التقاطع"
      },
      description: "تعتبر علامات الصح الزرقاء (Double Blue Ticks) رمزاً عالمياً لتأكيد قراءة الرسائل. تتضمن الدورة 4 حالات متدرجة: علامة صح رمادية واحدة (تم الإرسال للخادم)، علامتا صح رماديتان (تم التسليم لجهاز المستلم)، وعلامتا صح زرقاوان (تمت قراءة الرسالة وظهورها في شاشة المستلم). لرصد القراءة الحقيقية دون إرهاق الواجهة، نستخدم واجهة `IntersectionObserver API` لمعرفة اللحظة الدقيقة التي تدخل فيها فقاعة الرسالة داخل مجال رؤية شاشة المستلم وهو يركز على النافذة.",
      realWorldAnalogy: "مثل استلام طرد بريدي مع التوقيع؛ توقيع عامل التوصيل يثبت وصول الطرد للباب، بينما توقيعك الشخصي يثبت أنك استلمت الطرد وفتحته بنفسك.",
      whyItMatters: "يوفر الشفافية المطلقة في التواصل، ويمنع الشكوك حول ما إذا كان الطرف الآخر قد اطلع على المعلومات أو التوجيهات العاجلة.",
      syntax: "// علامات قراءة الرسائل\nconst renderTicks = (status) => {\n  if (status === 'sent') return <CheckOneGray />;\n  if (status === 'delivered') return <CheckTwoGray />;\n  if (status === 'read') return <CheckTwoBlue />;\n};",
      simpleExample: `// مكون علامات الصح المزدوجة لحالة الرسالة
import React from 'react';

export function MessageStatusIcon({ status }) {
  if (status === 'pending') {
    return <span className="text-[10px] text-slate-400">⏳</span>;
  }

  if (status === 'sent') {
    return <span className="text-slate-400 text-xs">✓</span>;
  }

  if (status === 'delivered') {
    return <span className="text-slate-400 text-xs">✓✓</span>;
  }

  if (status === 'read') {
    return <span className="text-sky-400 text-xs font-bold">✓✓</span>;
  }

  return null;
}`,
      advancedExample: `// رصد قراءة الرسالة فور ظهورها داخل الشاشة باستخدام IntersectionObserver
import { useEffect, useRef } from 'react';

export function useMessageReadObserver(messageId, isRead, isMine, onMarkAsRead) {
  const messageElementRef = useRef(null);

  useEffect(() => {
    // لا نحتاج لرصد رسائلنا الخاصة أو الرسائل المقروءة مسبقاً
    if (isMine || isRead || !messageElementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // إذا ظهرت الرسالة بنسبة 70% على الأقل داخل نافذة التمرير وكان التطبيق نشطاً
        if (entry.isIntersecting && document.visibilityState === 'visible') {
          onMarkAsRead(messageId);
          observer.disconnect();
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(messageElementRef.current);

    return () => observer.disconnect();
  }, [messageId, isRead, isMine, onMarkAsRead]);

  return { messageElementRef };
}`,
      outputExplanation: "يقوم هذا الكود بمراقبة فقاعة الرسالة في صمت؛ فبمجرد أن يقوم المستلم بالتمرير وتظهر الرسالة في ناظريه بوضوح، يرسل المتصفح إشعار القراءة تلقائياً لتتحول العلامات لدى المرسل إلى اللون الأزرق.",
      commonMistakes: "وسم جميع الرسائل في المحادثة بأنها مقروءة بمجرد فتح الغرفة حتى لو كانت هناك 50 رسالة قديمة في الأعلى لم يقم المستخدم بالتمرير لرؤيتها بعد.",
      bestPractices: "استخدم `IntersectionObserver` لوسم الرسائل المعروضة في الشاشة فقط (In-View Messages)، واربط ذلك بفحص `document.visibilityState === 'visible'` لمنع إرسال إشعار القراءة إذا كانت علامة تبويب المتصفح في الخلفية.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <g transform="translate(40, 50)">
    <rect width="100" height="80" rx="8" fill="#1e293b" stroke="#64748b" />
    <text x="50" y="35" fill="#94a3b8" fontSize="11" textAnchor="middle">Sent</text>
    <text x="50" y="60" fill="#94a3b8" fontSize="16" fontWeight="bold" textAnchor="middle">✓</text>
  </g>
  <path d="M 150 90 L 190 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <g transform="translate(200, 50)">
    <rect width="100" height="80" rx="8" fill="#1e293b" stroke="#94a3b8" />
    <text x="50" y="35" fill="#cbd5e1" fontSize="11" textAnchor="middle">Delivered</text>
    <text x="50" y="60" fill="#cbd5e1" fontSize="16" fontWeight="bold" textAnchor="middle">✓✓</text>
  </g>
  <path d="M 310 90 L 350 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <g transform="translate(360, 50)">
    <rect width="100" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
    <text x="50" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Read (In View)</text>
    <text x="50" y="60" fill="#38bdf8" fontSize="16" fontWeight="bold" textAnchor="middle">✓✓</text>
  </g>
  <rect x="480" y="50" width="90" height="80" rx="8" fill="#0284c7" fillOpacity="0.2" stroke="#0284c7" />
  <text x="525" y="80" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Intersection</text>
  <text x="525" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Observer API</text>
</svg>`
    },
    {
      id: "33.3.i",
      title: "إدارة إعادة الاتصال التلقائي (Exponential Backoff Auto-Reconnect)",
      technicalTerm: {
        english: "Exponential Backoff Reconnect Resilience",
        pronunciation: "إكسبونينشال باك أوف ريكونيكت ريزيليانس",
        arabicMeaning: "مرونة إعادة الاتصال بمهلة التراجع الأسي"
      },
      description: "قد ينقطع اتصال الـ WebSocket نتيجة لضعف الشبكة أو انتقال الهاتف بين أبراج الاتصال أو إعادة تشغيل الخادم. إذا حاول آلاف المستخدمين إعادة الاتصال فوراً في نفس اللحظة (Thundering Herd Problem)، سينهار الخادم فوراً. الحل المعماري القياسي هو خوارزمية 'التراجع الأسي مع التشويش العشوائي' (Exponential Backoff with Jitter): الانتظار ثانية واحدة، ثم ثانيتين، ثم 4 ثوانٍ، ثم 8 ثوانٍ مع إضافة كسر عشوائي من الميلي ثوانٍ لمنع تزامن الطلبات.",
      realWorldAnalogy: "مثل الوقوف أمام باب مغلق فجأة؛ لا تطرق الباب بجنون 100 مرة في ثانية واحدة حتى لا تكسره، بل تطرق مرة، ثم تنتظر لحظات، ثم تطرق مجدداً بفاصل أطول حتى يفتح البواب.",
      whyItMatters: "يحمي البنية التحتية للخوادم من الانهيار الجماعي عند حدوث انقطاع عام في الإنترنت، ويعيد المستخدم للمحادثة بسلاسة تامة دون تدخل يدوي.",
      syntax: "// صيغة مهلة التراجع الأسي مع التشويش\nconst delay = Math.min(1000 * Math.pow(2, retryAttempt), 30000) + Math.random() * 1000;",
      simpleExample: `// شريط تنبيه انقطاع الاتصال مع زر إعادة المحاولة اليدوية
import React from 'react';

export function ReconnectingBanner({ isReconnecting, attemptCount, onRetryNow }) {
  if (!isReconnecting) return null;

  return (
    <div className="bg-amber-500/20 border-b border-amber-500/40 px-4 py-2 flex items-center justify-between text-xs text-amber-300">
      <div className="flex items-center gap-2">
        <span className="animate-spin">🔄</span>
        <span>انقطع الاتصال. جاري إعادة المحاولة (المحاولة {attemptCount})...</span>
      </div>
      <button 
        onClick={onRetryNow}
        className="px-2.5 py-1 bg-amber-500 text-slate-950 font-bold rounded hover:bg-amber-400 transition-colors"
      >
        إعادة الاتصال الآن
      </button>
    </div>
  );
}`,
      advancedExample: `// محرك إعادة الاتصال الأسي المتكامل مع فحص حالة الإنترنت في المتصفح
import { useEffect, useRef, useState, useCallback } from 'react';

export function useResilientWebSocket(url) {
  const [status, setStatus] = useState('DISCONNECTED');
  const attemptsRef = useRef(0);
  const reconnectTimeoutRef = useRef(null);
  const wsRef = useRef(null);

  const connect = useCallback(() => {
    if (!navigator.onLine) {
      setStatus('OFFLINE');
      return;
    }

    setStatus('CONNECTING');
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      setStatus('CONNECTED');
      attemptsRef.current = 0; // تصفير العداد عند نجاح الاتصال
    };

    ws.onclose = (event) => {
      // إذا كان الإغلاق طبيعياً ومقصوداً (رمز 1000) لا نعيد الاتصال
      if (event.code === 1000) {
        setStatus('DISCONNECTED');
        return;
      }

      setStatus('RECONNECTING');
      attemptsRef.current += 1;

      // حساب المهلة الزمنية بالتراجع الأسي والتشويش العشوائي (Jitter)
      const baseDelay = Math.min(1000 * Math.pow(1.5, attemptsRef.current), 20000);
      const jitter = Math.random() * 800;
      const finalDelay = baseDelay + jitter;

      reconnectTimeoutRef.current = setTimeout(() => {
        connect();
      }, finalDelay);
    };
  }, [url]);

  useEffect(() => {
    connect();

    // الاستماع لعودة الإنترنت لجهاز المستخدم في المتصفح
    const handleOnline = () => {
      if (status !== 'CONNECTED') connect();
    };

    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('online', handleOnline);
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      wsRef.current?.close(1000, 'Cleanup');
    };
  }, [connect]);

  return { status, reconnectNow: connect };
}`,
      outputExplanation: "يتعامل هذا المحرك مع انقطاع الشبكة بمرونة فائقة؛ فيتحسس عودة اتصال الجهاز فورياً عبر حدث `online`، ويوزع محاولات إعادة الاتصال زمنياً لمنع إغراق الخادم.",
      commonMistakes: "محاولة إعادة الاتصال فوراً في دالة `onclose` عبر حلقة غير محكومة بمؤقت (`setTimeout`)، مما يتسبب في تجميد تبويب المتصفح تماماً.",
      bestPractices: "ضع سقفاً أقصى للتراجع الأسي (Max Backoff Ceiling - مثل 20 إلى 30 ثانية)، وأضف دائماً عنصراً عشوائياً (Random Jitter).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="50" width="100" height="80" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="80" y="80" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">Drop</text>
  <text x="80" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">Attempt 1 (1s)</text>
  <path d="M 135 90 L 175 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="180" y="50" width="110" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="235" y="80" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Retry 2 (2s)</text>
  <text x="235" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">+ Jitter ms</text>
  <path d="M 295 90 L 335 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="340" y="50" width="110" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="395" y="80" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Retry 3 (4s)</text>
  <text x="395" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">+ Jitter ms</text>
  <path d="M 455 90 L 495 90" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="500" y="50" width="70" height="80" rx="8" fill="#10b981" />
  <text x="535" y="95" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">Sync 🟢</text>
</svg>`
    },
    {
      id: "33.3.j",
      title: "رفع الصور والملفات في المحادثة (Media Upload Pipeline)",
      technicalTerm: {
        english: "Direct-to-S3 Presigned Media Pipeline",
        pronunciation: "دايريكت تو إس ثري بري ساين د ميديا بايبلاين",
        arabicMeaning: "مسار رفع الوسائط الموقع مسبقاً والمباشر للسحابة"
      },
      description: "لا يتم إرسال ملفات الوسائط الكبيرة (الصور والفيديوهات والمستندات) عبر مقابس WebSockets لأنها تثقل بروتوكول الرسائل الخفيفة. المسار المعماري المعتمد هو: طلب رابط موقع مسبقاً (Presigned URL) من خادم التطبيق، ثم رفع الملف مباشرة من المتصفح إلى حاوية التخزين السحابي (AWS S3 / GCS / Cloudinary) عبر طلب HTTP PUT، ثم إرسال رابط الوسائط النهائي ونوع الملف عبر WebSocket كرسالة عادية لجميع أطراف المحادثة.",
      realWorldAnalogy: "مثل شحن بضاعة ضخمة؛ لا تطلب من ساعي البريد العادي الذي يقود دراجة أن يحمل الثلاجة في حقيبته، بل تطلب شاحنة نقل خاصة لتوصيلها للمستودع، وتسلم الساعي رقم إيصال الشحن فقط ليبلغه للمشتري.",
      whyItMatters: "يحافظ على رشاقة خوادم الويب سوكيت ويمنع انقطاع الرسائل النصية للآلاف أثناء قيام شخص واحد برفع فيديو بحجم 50 ميجابايت.",
      syntax: "// رفع الوسائط المباشر\nconst { uploadUrl, fileUrl } = await getPresignedUrl(file.name, file.type);\nawait fetch(uploadUrl, { method: 'PUT', body: file, headers: { 'Content-Type': file.type } });\nsendWsMessage({ type: 'MEDIA', url: fileUrl });",
      simpleExample: `// معاينة الصورة المختارة محلياً قبل الرفع الفعلي
import React, { useState } from 'react';

export function ImageAttachmentPreview({ onAttach }) {
  const [preview, setPreview] = useState(null);

  const handleSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // إنشاء رابط محلي للمعاينة السريعة
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);
    onAttach(file);
  };

  return (
    <div className="flex items-center gap-2">
      <input type="file" accept="image/*" id="media-input" onChange={handleSelect} className="hidden" />
      <label htmlFor="media-input" className="p-2 text-slate-400 hover:text-white cursor-pointer bg-slate-800 rounded-lg">
        📷
      </label>
      {preview && (
        <div className="relative">
          <img src={preview} alt="معاينة" className="w-8 h-8 rounded object-cover border border-indigo-500" />
          <button onClick={() => setPreview(null)} className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full w-3 h-3 text-[8px] flex items-center justify-center">✕</button>
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// مسار الرفع الكامل مع توليد الرابط الموقع وإشعار التقدم
import { useState } from 'react';

export function useMediaUploadPipeline(apiEndpoint) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploadMedia = async (file) => {
    setIsUploading(true);
    setUploadProgress(5);

    try {
      // 1. طلب الرابط الموقع مسبقاً من الخادم
      const presignRes = await fetch(\`\${apiEndpoint}/presign\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, contentType: file.type })
      });
      const { uploadUrl, publicUrl } = await presignRes.json();
      setUploadProgress(25);

      // 2. الرفع المباشر عبر XMLHttpRequest لتتبع نسبة التقدم الدقيقة
      await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', uploadUrl);
        xhr.setRequestHeader('Content-Type', file.type);

        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percent = Math.round(25 + (event.loaded / event.total) * 70);
            setUploadProgress(percent);
          }
        };

        xhr.onload = () => (xhr.status >= 200 && xhr.status < 300 ? resolve() : reject(new Error('Upload failed')));
        xhr.onerror = () => reject(new Error('Network error during upload'));
        xhr.send(file);
      });

      setUploadProgress(100);
      setIsUploading(false);
      return { url: publicUrl, name: file.name, type: file.type };
    } catch (err) {
      setIsUploading(false);
      throw err;
    }
  };

  return { uploadMedia, uploadProgress, isUploading };
}`,
      outputExplanation: "يرفع هذا النظام الملفات بأمان تام إلى خوادم التخزين مباشرة دون المرور بخادم الويب سوكيت، مع إشعار دقيق للمستخدم بنسبة تقدم الرفع من 0 إلى 100%.",
      commonMistakes: "إرسال ملفات الوسائط الكبيرة كنصوص Base64 في حقل `text` داخل رسالة WebSocket العادية، مما يؤدي إلى انهيار الخادم وتجميد متصفحات باقي الأعضاء.",
      bestPractices: "استخدم دائماً روابط S3 الموقعة مسبقاً ذات وقت الصلاحية القصير (5 دقائق كحد أقصى) لتأمين الرفع المباشر.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="130" height="120" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="70" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">React Client</text>
  <text x="95" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">1. Get Presign</text>
  <text x="95" y="130" fill="#10b981" fontSize="10" textAnchor="middle">2. Direct PUT</text>
  <path d="M 165 65 L 265 65" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="270" y="40" width="130" height="60" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="335" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Auth API (HTTP)</text>
  <path d="M 165 130 L 435 130" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="90" width="130" height="80" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="505" y="125" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Cloud Storage (S3)</text>
  <text x="505" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle">Media Bucket</text>
</svg>`
    },
    {
      id: "33.3.k",
      title: "تحميل سجل الرسائل تدريجياً (Infinite Scroll with Scroll Anchoring)",
      technicalTerm: {
        english: "Reverse Infinite Scroll & Scroll Anchoring",
        pronunciation: "ريفيرس إنفينيت سكرول آند سكرول آنكورينج",
        arabicMeaning: "التمرير اللانهائي العكسي وتثبيت موضع التمرير"
      },
      description: "في تطبيقات الدردشة، يكون التمرير اللانهائي معكوساً؛ حيث يبدأ العرض من أحدث 30 رسالة في الأسفل. عندما يمرر المستخدم لأعلى ويقترب من قمة الشاشة، يتم جلب الدفعة السابقة من الرسائل القديمة (Cursor-based Pagination). التحدي الأكبر هنا هو 'تثبيت موضع التمرير' (Scroll Anchoring)؛ فإدراج الرسائل الجديدة في قمة القائمة سيجعل الشاشة تقفز فجأة إذا لم يتم تعويض الارتفاع المضاف `scrollTop += newHeight` للحفاظ على ثبات الرسالة التي يقرؤها المستخدم.",
      realWorldAnalogy: "مثل قراءة كتاب من نهايته إلى بدايته؛ عندما تنتهي من قراءة صفحة وتريد قراءة الصفحة التي تسبقها، يجب أن تفتح الصفحة السابقة دون أن تتغير نقطة نظرك الحالية أو يسقط الكتاب من يدك.",
      whyItMatters: "يمنع تحميل آلاف الرسائل دفعة واحدة مما يستهلك ذاكرة المتصفح، ويوفر تجربة تصفح تاريخ المحادثات بسلاسة وانعدام تام للقفزات البصرية المزعجة.",
      syntax: "// معادلة تثبيت التمرير العكسي\nconst prevHeight = container.scrollHeight;\nprependOlderMessages(newBatch);\nrequestAnimationFrame(() => {\n  container.scrollTop += (container.scrollHeight - prevHeight);\n});",
      simpleExample: `// زر جلب الرسائل الأقدم يدوياً
import React from 'react';

export function LoadMoreMessagesButton({ onLoadMore, hasMore, loading }) {
  if (!hasMore) {
    return <div className="text-center text-[11px] text-slate-500 py-3">بداية المحادثة التاريخية ✨</div>;
  }

  return (
    <div className="text-center py-2">
      <button
        onClick={onLoadMore}
        disabled={loading}
        className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-350 text-xs rounded-full font-medium transition-colors disabled:opacity-50"
      >
        {loading ? 'جاري التحميل...' : 'تحميل الرسائل السابقة ⬆'}
      </button>
    </div>
  );
}`,
      advancedExample: `// التمرير اللانهائي العكسي التلقائي مع المحافظة التامة على موضع الرؤية (Scroll Anchor)
import { useRef, useEffect, useState, useCallback } from 'react';

export function useReverseInfiniteScroll({ hasMore, fetchOlderMessages }) {
  const containerRef = useRef(null);
  const [isLoadingOlder, setIsLoadingOlder] = useState(false);
  const previousScrollHeightRef = useRef(0);

  // مراقبة التمرير للأعلى
  const handleScroll = useCallback(async () => {
    const el = containerRef.current;
    if (!el || isLoadingOlder || !hasMore) return;

    // إذا وصل المستخدم على بعد أقل من 50 بكسل من القمة، نجلب الرسائل الأقدم
    if (el.scrollTop < 50) {
      setIsLoadingOlder(true);
      // حفظ الارتفاع الكلي السابق قبل إضافة الرسائل الجديدة
      previousScrollHeightRef.current = el.scrollHeight;

      try {
        await fetchOlderMessages();
      } finally {
        setIsLoadingOlder(false);
      }
    }
  }, [isLoadingOlder, hasMore, fetchOlderMessages]);

  // تعويض فارق الارتفاع فور إضافة الرسائل الجديدة لمنع القفز البصري
  useEffect(() => {
    const el = containerRef.current;
    if (el && previousScrollHeightRef.current > 0) {
      const heightDifference = el.scrollHeight - previousScrollHeightRef.current;
      el.scrollTop += heightDifference;
      previousScrollHeightRef.current = 0;
    }
  });

  return { containerRef, handleScroll, isLoadingOlder };
}`,
      outputExplanation: "يقوم هذا الـ Hook بحساب الفارق بين ارتفاع حاوية الرسائل قبل وبعد جلب الرسائل القديمة، وتعديل قيمة `scrollTop` في نفس الإطار البرمجي لمنع أي قفز بصري نهائياً.",
      commonMistakes: "إضافة الرسائل في قمة المصفوفة دون تعديل `scrollTop`، مما يجعل المستخدم يقفز فجأة إلى أقدم رسالة جديدة ويفقد موضع قراءته.",
      bestPractices: "استخدم ميزة CSS الحديثة `overflow-anchor: auto` كدعم مساعد، لكن احتفظ دائماً بتعويض الارتفاع البرمجي لضمان التوافق مع كافة المتصفحات والهواتف.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="220" height="140" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="50" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold">Before Prepend</text>
  <rect x="50" y="70" width="180" height="35" rx="4" fill="#334155" />
  <text x="60" y="92" fill="#e2e8f0" fontSize="10">User reading here... (H: 400px)</text>
  <rect x="50" y="115" width="180" height="35" rx="4" fill="#334155" />
  <path d="M 265 100 L 305 100" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="320" y="30" width="250" height="140" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="340" y="55" fill="#34d399" fontSize="11" fontWeight="bold">After Prepend (Anchored)</text>
  <rect x="340" y="70" width="210" height="25" rx="4" fill="#065f46" stroke="#10b981" />
  <text x="350" y="87" fill="#ffffff" fontSize="9">+ Older 20 msgs (H: 800px)</text>
  <rect x="340" y="105" width="210" height="25" rx="4" fill="#334155" />
  <text x="350" y="122" fill="#38bdf8" fontSize="9">scrollTop += 400px (Zero Jumps!)</text>
</svg>`
    },
    {
      id: "33.3.l",
      title: "إضافة الإشعارات الصوتية والبصرية (Audio & Desktop Web Notifications)",
      technicalTerm: {
        english: "Web Notifications API & Sound Synthesizer",
        pronunciation: "ويب نوتيفيكيشنز إيه بي آي آند ساوند سينثيسايزر",
        arabicMeaning: "واجهة إشعارات الويب ومولد الصوت التنبيهي"
      },
      description: "عندما يكون المتصفح في الخلفية أو يكون المستخدم في تبويب آخر، يجب إخطاره بالرسائل الواردة عبر مسارين متكاملين: إشعار بصري عبر واجهة `Notification API` الخاصة بنظام التشغيل، وتنبيه صوتي هادئ باستخدام واجهة `AudioContext` أو ملف MP3 مخزن مؤقتاً. يتطلب النظام طلب إذن المستخدم صراحة (`Notification.requestPermission()`) واحترام وضع عدم الإزعاج وتجنب تشغيل الصوت إذا كانت المحادثة مفتوحة ونشطة أمامه.",
      realWorldAnalogy: "مثل رنين هاتف ووميض شاشته معاً عند ورود مكالمة؛ ينبهك الصوت حتى لو كان الهاتف في جيبك، وتظهر الشاشة اسم المتصل ورسالته فور إخراجه.",
      whyItMatters: "يمنع تفويت الرسائل الحساسة وفرص الأعمال عندما يبتعد المستخدم عن علامة تبويب التطبيق الرئيسية.",
      syntax: "// طلب إذن الإشعارات وتشغيل تنبيه\nconst permission = await Notification.requestPermission();\nif (permission === 'granted') {\n  new Notification('رسالة جديدة من سارة', { body: 'مرحباً، هل اطلعت على التقرير؟', icon: '/avatar.png' });\n}",
      simpleExample: `// طلب إذن إشعارات سطح المكتب
import React, { useState } from 'react';

export function DesktopNotificationEnabler() {
  const [permission, setPermission] = useState(
    typeof window !== 'undefined' ? Notification.permission : 'default'
  );

  const requestPerm = async () => {
    const res = await Notification.requestPermission();
    setPermission(res);
  };

  if (permission === 'granted') {
    return <span className="text-[11px] text-emerald-400 font-semibold">🔔 الإشعارات مفعلة</span>;
  }

  return (
    <button
      onClick={requestPerm}
      className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-medium"
    >
      تفعيل إشعارات سطح المكتب
    </button>
  );
}`,
      advancedExample: `// مشغل إشعارات ذكي يجمع بين الصوت وتنبيهات النظام مع احترام نافذة التركيز
import { useRef, useCallback } from 'react';

export function useSmartChatAlerts() {
  // استخدام نغمة تنبيه لطيفة بصيغة Base64 مضمنة لتفادي أخطاء تحميل الملفات
  const audioRef = useRef(
    typeof Audio !== 'undefined'
      ? new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjhISkhIT1VWWmVpeIaPi4mGhISGhomLi42Oj4+QkJGSk5OUlZaXmJiam5ydnp+goaKjpKWmp6ipqqutrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==')
      : null
  );

  const notify = useCallback(({ senderName, text, avatarUrl, conversationId, currentActiveConvId }) => {
    // 1. إذا كان المستخدم يركز حالياً على نفس المحادثة تماماً، لا نشغل تنبيهاً مزعجاً
    const isChatFocused = document.visibilityState === 'visible' && currentActiveConvId === conversationId;
    if (isChatFocused) return;

    // 2. تشغيل نغمة الصوت
    try {
      audioRef.current?.play().catch(() => {});
    } catch (e) {
      console.warn('Audio play restricted by browser autoplay policy');
    }

    // 3. إظهار إشعار سطح المكتب إذا سمح المستخدم
    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      const n = new Notification(senderName, {
        body: text,
        icon: avatarUrl || '/logo.png',
        tag: conversationId // استبدال الإشعار القديم لنفس المحادثة لمنع تراكم النوافذ
      });

      n.onclick = () => {
        window.focus();
        n.close();
      };
    }
  }, []);

  return { notify };
}`,
      outputExplanation: "يحترم هذا النظام تركيز المستخدم؛ فلا يصدر أصواتاً أو إشعارات مشتتة إذا كان المستخدم يقرأ المحادثة بالفعل، بينما يطلق تنبيهاً صوتياً وبصرياً شاملاً إذا كان خارج التبويب.",
      commonMistakes: "محاولة تشغيل الصوت فور تحميل الصفحة دون تفاعل مسبق من المستخدم (User Gesture)، مما يمنعه المتصفح بموجب سياسة منع التشغيل التلقائي (Autoplay Policy).",
      bestPractices: "قم بتهيئة كائن الصوت بعد أول نقرة زر يقوم بها المستخدم في التطبيق، واستخدم خاصية `tag` في كائن `Notification` لمنع غمر شاشة المستخدم بعشرات الإشعارات المتراكمة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Tab Focused?</text>
  <text x="110" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">document.visibilityState</text>
  <path d="M 195 70 L 255 70" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="225" y="60" fill="#10b981" fontSize="9" textAnchor="middle">YES</text>
  <rect x="260" y="45" width="110" height="40" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="315" y="70" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Silent Append</text>
  <path d="M 195 110 L 255 110" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="225" y="125" fill="#f59e0b" fontSize="9" textAnchor="middle">NO</text>
  <rect x="260" y="95" width="150" height="50" rx="6" fill="#1e293b" stroke="#f59e0b" />
  <text x="335" y="115" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">1. Play Sound 🔔</text>
  <text x="335" y="133" fill="#cbd5e1" fontSize="9" textAnchor="middle">2. Web Notification 💬</text>
</svg>`
    },
    {
      id: "33.3.m",
      title: "تأمين المحادثات والتشفير من طرف لطرف (E2EE Chat Security Overview)",
      technicalTerm: {
        english: "End-to-End Encryption (E2EE) with Web Crypto API",
        pronunciation: "إند تو إند إنكريبشن وذ ويب كريبتو إيه بي آي",
        arabicMeaning: "التشفير من طرف لطرف عبر واجهة تشفير الويب"
      },
      description: "التشفير من طرف لطرف (E2EE) هو الحصن المنيع لتطبيقات مثل Signal وWhatsApp. في هذا النموذج، تُشفر الرسائل على جهاز المرسل بمفتاح لا يمتلكه إلا المستلم فقط عبر خوارزميات مثل AES-GCM وRSA/ECDH باستخدام `window.crypto.subtle`. يمر النص المشفر (Ciphertext) عبر خادم التطبيق ومقابس WebSocket كرموز مبهمة تماماً يستحيل على مهندسي الخادم أو القراصنة قراءتها أو فك شفرتها.",
      realWorldAnalogy: "مثل إرسال رسالة داخل صندوق فولاذي بقفل مزدوج؛ أنت تضع الصندوق في البريد، ولا يستطيع ساعي البريد ولا مدير الشركة فتحه، والشخص الوحيد في العالم الذي يملك المفتاح المطابق هو المستلم في بيته.",
      whyItMatters: "يوفر أقصى درجات الخصوصية والامتثال القانوني (GDPR/HIPAA)، ويحمي أسرار المؤسسات حتى لو تم اختراق قاعدة بيانات الخادم المركزية بالكامل.",
      syntax: "// تشفير نص باستخدام Web Crypto API المدمجة بالمتصفح\nconst ciphertext = await window.crypto.subtle.encrypt(\n  { name: 'AES-GCM', iv },\n  secretKey,\n  new TextEncoder().encode('سري للغاية')\n);",
      simpleExample: `// محاكاة بصرية لتشفير وفك تشفير الرسالة
import React, { useState } from 'react';

export function CryptoVisualizer() {
  const [plain, setPlain] = useState('مرحباً بك في المحادثة الآمنة');
  const [encrypted, setEncrypted] = useState('');

  const handleEncrypt = () => {
    // محاكاة تحويل النص إلى حروف غير مفهومة
    setEncrypted(btoa(unescape(encodeURIComponent(plain))));
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-3 font-mono text-xs">
      <div>
        <span className="text-slate-400 block mb-1">النص الصريح (Plaintext):</span>
        <input
          value={plain}
          onChange={(e) => setPlain(e.target.value)}
          className="w-full bg-slate-800 p-2 rounded text-white border border-slate-700"
        />
      </div>
      <button onClick={handleEncrypt} className="px-3 py-1 bg-indigo-600 text-white rounded font-bold">
        🔒 تشفير الرسالة
      </button>
      {encrypted && (
        <div className="p-2 bg-slate-950 border border-emerald-500/40 rounded text-emerald-400 break-all">
          <span className="block text-slate-500 text-[10px]">النص المار عبر خادم WebSockets (Ciphertext):</span>
          {encrypted}
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// محرك تشفير وفك تشفير حقيقي باستخدام Web Crypto API (AES-GCM 256-bit)
export class ChatSecurityEngine {
  // توليد مفتاح تشفير عشوائي متماثل محلياً
  static async generateKey() {
    return await window.crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
  }

  // تشفير الرسالة النصية
  static async encryptMessage(plaintext, key) {
    // توليد متجه تهيئة فريد (IV) لكل رسالة لمنع هجمات التكرار
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encoded = new TextEncoder().encode(plaintext);

    const ciphertextBuffer = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encoded
    );

    return {
      ciphertext: Array.from(new Uint8Array(ciphertextBuffer)),
      iv: Array.from(iv)
    };
  }

  // فك تشفير الرسالة على جهاز المستلم
  static async decryptMessage(ciphertextArray, ivArray, key) {
    const iv = new Uint8Array(ivArray);
    const ciphertext = new Uint8Array(ciphertextArray);

    const decryptedBuffer = await window.crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      ciphertext
    );

    return new TextDecoder().decode(decryptedBuffer);
  }
}`,
      outputExplanation: "يقوم هذا المحرك بتطبيق التشفير العسكري (AES-GCM 256) مباشرة داخل بيئة المتصفح باستخدام قدرات معالج العميل، بحيث لا يرى خادم التطبيق إلا مصفوفات بايت مشفرة ومستحيلة الفهم.",
      commonMistakes: "إعادة استخدام نفس متجه التهيئة (Initialization Vector - IV) لأكثر من رسالة مع نفس المفتاح، مما يدمر أمان خوارزمية AES-GCM ويسمح بكسر التشفير.",
      bestPractices: "قم بتوليد `iv` عشوائي جديد تماماً (12 بايت) لكل رسالة مشفرة، وخزن المفاتيح الخاصة دائماً داخل قاعدة بيانات `IndexedDB` المحمية وليس في `LocalStorage`.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="140" height="120" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="100" y="70" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Alice (Sender)</text>
  <text x="100" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">'Secret Plan'</text>
  <text x="100" y="125" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">🔒 Encrypt (AES-GCM)</text>
  <path d="M 175 100 L 235 100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="40" width="130" height="120" rx="10" fill="#1e293b" stroke="#f59e0b" />
  <text x="305" y="70" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">Relay Server</text>
  <text x="305" y="100" fill="#f87171" fontSize="10" textAnchor="middle">7f9a2b8c4d...</text>
  <text x="305" y="125" fill="#94a3b8" fontSize="9" textAnchor="middle">Zero Knowledge</text>
  <path d="M 375 100 L 435 100" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="40" width="130" height="120" rx="10" fill="#1e293b" stroke="#10b981" />
  <text x="505" y="70" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Bob (Receiver)</text>
  <text x="505" y="95" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">🔓 Decrypt</text>
  <text x="505" y="125" fill="#cbd5e1" fontSize="10" textAnchor="middle">'Secret Plan'</text>
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-33-3-1",
      question: "لماذا يُنصح برفع الصور وملفات الوسائط مباشرة إلى السحابة عبر Presigned URLs بدلاً من إرسالها عبر WebSockets؟",
      options: [
        "لأن المتصفح يمنع إرسال أي صورة عبر كود جافاسكريبت",
        "لأن نقل الملفات الكبيرة عبر WebSocket يغرق قناة الاتصال ويبطئ وصول الرسائل النصية الخفيفة لباقي المستخدمين",
        "لأن WebSockets مخصصة للتحميل فقط وليس للرفع",
        "لأن السحابة لا تقبل إلا صوراً بصيغة PNG فقط"
      ],
      correctAnswer: 1,
      explanation: "بروتوكول WebSockets مصمم للرسائل والبيانات السريعة والخفيفة؛ لذا فإن تمرير بايتات الوسائط الثقيلة عليه يسبب اختناقاً في خادم المقابس ويؤخر الرسائل اللحظية."
    },
    {
      id: "quiz-33-3-2",
      question: "ما الفائدة الجوهرية من استخدام تقنية تثبيت موضع التمرير (Scroll Anchoring) في التمرير اللانهائي العكسي؟",
      options: [
        "حذف الرسائل القديمة تلقائياً من الذاكرة",
        "منع قفز شاشة المحادثة فجأة عند إدراج رسائل سابقة في قمة القائمة، والحفاظ على ثبات الرسالة التي يقرؤها المستخدم",
        "تغيير لون خلفية الشاشة عند كل تمرير",
        "تسريع اتصال الإنترنت بنسبة 50%"
      ],
      correctAnswer: 1,
      explanation: "عند جلب رسائل قديمة وإضافتها في أعلى القائمة، يزداد ارتفاع الحاوية؛ وتعويض ذلك بزيادة قيمة `scrollTop` يحفظ ثبات الفقاعات المعروضة أمام عيني المستخدم تماماً."
    },
    {
      id: "quiz-33-3-3",
      question: "كيف يساهم التراجع الأسي مع التشويش (Exponential Backoff with Jitter) في حماية خوادم الدردشة؟",
      options: [
        "بمنع المستخدمين من كتابة كلمات سيئة",
        "بمنع ظاهرة Thundering Herd عبر مباعدة فترات إعادة الاتصال بين آلاف المتصفحات عشوائياً بعد انقطاع الخدمة",
        "بتشفير كلمات المرور في قاعدة البيانات",
        "بإيقاف تشغيل الخادم أثناء الليل لتوفير الطاقة"
      ],
      correctAnswer: 1,
      explanation: "التراجع الأسي يباعد المحاولات تدريجياً، وإضافة كسر عشوائي (Jitter) تمنع جميع الأجهزة من الطرق على باب الخادم في نفس الميلي ثانية بعد تعافي الشبكة."
    }
  ],
  practicalExercise: {
    id: "exercise-33-3",
    title: "بناء واجهة محادثة فورية تفاعلية مع المحاكاة والتحديث المتفائل",
    description: "قم بإنشاء تطبيق محادثة مصغر يحتوي على قائمة رسائل تفاعلية، حقل إدخال يدعم الإرسال المتفائل الفوري مع حالات (⏳ / ✓)، محاكاة رد آلي سريع بعد ثانية ونصف، والتمرير التلقائي السلس لقاع المحادثة.",
    hints: [
      "استخدم حالة messages لتخزين مصفوفة الرسائل.",
      "استخدم useRef للوصول إلى حاوية التمرير وإجراء scrollTo({ behavior: 'smooth' }).",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لتطبيق المحادثة الفورية التفاعلي
import React, { useState, useRef, useEffect } from 'react';

export function InteractiveChatDemo() {
  // حالة مصفوفة الرسائل الأولية
  const [messages, setMessages] = useState([
    { id: 'm-1', text: 'أهلاً بك في نظام المحادثة الفورية! كيف يمكنني مساعدتك؟', sender: 'bot', status: 'read', time: '10:00 ص' }
  ]);
  // حالة نص الرسالة في حقل الإدخال
  const [inputText, setInputText] = useState('');
  // مرجع لحاوية التمرير السفلي
  const messagesEndRef = useRef(null);

  // التمرير التلقائي لأسفل عند إضافة رسالة جديدة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // إرسال الرسالة ومعالجة التحديث المتفائل والرد الآلي
  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    const tempId = \`temp-\${Date.now()}\`;

    // 1. إضافة رسالة المستخدم متفائلاً بحالة معلقة
    const newMsg = {
      id: tempId,
      text: userText,
      sender: 'user',
      status: 'pending',
      time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // 2. محاكاة تأكيد الخادم بعد 400 ميلي ثانية
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === tempId ? { ...m, status: 'sent' } : m));
    }, 400);

    // 3. محاكاة رد الطرف الآخر بعد ثانية ونصف
    setTimeout(() => {
      const replyMsg = {
        id: \`bot-\${Date.now()}\`,
        text: \`تم استلام رسالتك: "\${userText}" بنجاح وجاري العمل عليها! 🚀\`,
        sender: 'bot',
        status: 'read',
        time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, replyMsg]);
    }, 1400);
  };

  return (
    <div className="w-full max-w-md mx-auto h-[500px] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-sans">
      {/* رأس المحادثة */}
      <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
            AI
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">المساعد الذكي (Bot)</h4>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> متصل الآن
            </span>
          </div>
        </div>
      </div>

      {/* قائمة الرسائل */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m) => {
          const isMine = m.sender === 'user';
          return (
            <div key={m.id} className={\`flex flex-col \${isMine ? 'items-end' : 'items-start'}\`}>
              <div
                className={\`max-w-[75%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed \${
                  isMine
                    ? 'bg-indigo-600 text-white rounded-br-xs'
                    : 'bg-slate-800 text-slate-200 rounded-bl-xs border border-slate-700/60'
                }\`}
              >
                {m.text}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-1 px-1">
                <span>{m.time}</span>
                {isMine && (
                  <span>
                    {m.status === 'pending' ? '⏳' : m.status === 'sent' ? '✓' : '✓✓'}
                  </span>
                )}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* حقل الإدخال */}
      <form onSubmit={handleSend} className="p-3 bg-slate-850 border-t border-slate-800 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="اكتب رسالة..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-colors"
        >
          إرسال
        </button>
      </form>
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Realtime Full-Duplex Chat Architecture</text>
  <rect x="40" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="115" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Client Experience</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Optimistic Dispatch</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Scroll Anchoring</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Debounced Typing</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">0ms Latency Feel</text>
  <path d="M 195 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="315" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Realtime Layer</text>
  <text x="315" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Full-Duplex WS</text>
  <text x="315" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Heartbeat (Ping/Pong)</text>
  <text x="315" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Exp-Backoff Jitter</text>
  <text x="315" y="185" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">Resilient Network</text>
  <path d="M 395 135 L 435 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="505" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Security & Media</text>
  <text x="505" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">E2EE (AES-GCM)</text>
  <text x="505" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Presigned S3 PUT</text>
  <text x="505" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Read Receipts</text>
  <text x="505" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Bank-Grade Trust</text>
</svg>`
};

