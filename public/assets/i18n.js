(function () {
  var DICT = {
    en: {
      'nav.home': 'Home',
      'nav.branches': 'Branches',
      'nav.memberships': 'Memberships',
      'nav.blog': 'Blog',
      'btn.login': 'Log In',
      'btn.signup': 'Sign Up',
      'account.myaccount': 'My Account',
      'account.settings': 'Settings',
      'account.logout': 'Log out',

      'hero.eyebrow': 'Humanity · Ultimate · Mastery · Fitness',
      'hero.accent': 'Every Day and Every Where',
      'hero.rest': 'Fitness',
      'hero.sub': 'Low price and high franchise gym over Thailand — Built to Last Humanity.',
      'search.placeholder': 'Search by address, city, or ZIP...',

      'memberships.title': 'Memberships',
      'memberships.sub': 'Every HUMF membership unlocks your home branch, live capacity booking, and your digital Smart Key.',
      'plan.starter.name': 'Starter Package',
      'plan.allbranch': 'All-branch',
      'plan.permonth': '/ month',
      'plan.starter.desc': 'Billed monthly, cancel anytime. Includes slot booking, Smart Key entry, and access to every HUMF branch.',
      'plan.feature.access247': 'Access 24/7',
      'plan.feature.community': 'Joining HUMF Community',
      'plan.feature.card': 'Receive HUMF Digital Card',
      'plan.elite.name': 'Elite Package',
      'plan.elite.badge': 'Elite',
      'plan.elite.desc': 'Everything in Starter Package, upgraded for members who want more.',
      'plan.feature.noreserve': 'No reserve needed',
      'plan.feature.parking': 'Parking access',
      'plan.feature.allbranches': 'Access all branches',
      'cta.getstarted': 'Get Started',

      'events.title': "What's Happening at HUMF",
      'events.sub': 'Events, classes, and challenges from the HUMF community — across every branch.',
      'event.wellness.date': 'Every Wednesday · 7:00 PM',
      'event.wellness.title': 'Wellness Wednesdays',
      'event.wellness.desc': 'Guided mobility and recovery session, open to every membership tier. Mats provided.',
      'event.ice.date': 'Every Saturday · 8:00 AM',
      'event.ice.title': 'HUMF Ice Bathing Session',
      'event.ice.desc': 'Community cold immersion and breathwork, led by a HUMF coach. Bring your own towel.',
      'event.challenge.date': 'Starts Jan 6 · 6 weeks',
      'event.challenge.title': 'New Year Strength Challenge',
      'event.challenge.desc': 'A 6-week transformation challenge across every HUMF branch, with weekly leaderboards.',
      'blog.readall': 'Read all HUMF stories →',

      'begin.title': 'Easy to begin',
      'begin.branch.title': 'Find Branch',
      'begin.branch.desc': 'Search the map and pick the HUMF closest to you.',
      'begin.package.title': 'Select Package',
      'begin.package.desc': 'Choose Starter Package or go Elite for full access.',
      'begin.start.title': 'Start the Gym',
      'begin.start.desc': 'Unlock the door with your Smart Key and get moving.',

      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.contact': 'Contact',
      'footer.note': 'HUMF member web prototype — structural skeleton only. Branch listings, membership tiers, and event details are placeholders pending final content.',
      'footer.sitemap': 'Site',
      'footer.follow': 'Follow us',
      'footer.copyright': '© 2026 HUMF. All rights reserved.',

      'faq.title': 'Questions & Answers',
      'faq.sub': 'Everything you need to know before your first visit.',
      'faq.q1': 'How do I book a slot?',
      'faq.a1': 'Open the Branches page, pick the branch you want, and tap Book. You’ll get a confirmation and a reminder before your slot.',
      'faq.q2': 'What’s the difference between Starter and Elite?',
      'faq.a2': 'Starter covers slot booking, Smart Key entry, and access to every branch. Elite adds no-reserve entry, parking, and priority access at busy branches.',
      'faq.q3': 'Can I switch branches or cancel anytime?',
      'faq.a3': 'Yes — your membership works at every HUMF branch, and you can cancel anytime from My Account with no lock-in contract.',
      'faq.q4': 'How does the Smart Key work?',
      'faq.a4': 'Once you join, your Smart Key appears in the app. Hold your phone near any branch door to unlock it — no physical card needed.',
      'faq.q5': 'Is HUMF available outside Bangkok?',
      'faq.a5': 'We’re expanding branch by branch across Thailand — check the Branches page for the latest locations near you.',

      'branches.title': 'Find a HUMF near you',
      'branches.sub': '78 branches across Bangkok, all on live capacity — see who’s busy before you drive over.',
      'branches.sortlabel': 'Branches sorted by distance',
      'cta.book': 'Book',
      'status.full': 'Full',
      'status.lowcrowd': 'Low crowd · book anytime',
      'status.moderate': 'Moderate · a few slots left',
      'status.nearfull': 'Near full · next slot 18:30',
      'meta.openuntil22': 'Open until 22:00',
      'meta.openuntil23': 'Open until 23:00',

      'login.brand.title': 'Your gym, your city, one account.',
      'login.brand.sub': 'Log in to book a slot, unlock the door with your Smart Key, and manage your membership across every HUMF branch.',
      'login.form.title': 'Log in to HUMF',
      'login.form.sub': 'Welcome back — pick up right where you left off.',
      'field.emailphone': 'Email or phone',
      'field.password': 'Password',
      'login.forgot': 'Forgot password?',
      'misc.or': 'or',
      'login.switch.prompt': 'New to HUMF?',
      'login.switch.cta': 'Create an account',
      'oauth.google': 'Continue with Google',
      'oauth.facebook': 'Continue with Facebook',

      'signup.brand.title': 'Join HUMF in a couple minutes.',
      'signup.brand.sub': "One account, every branch. Here's what you get from day one:",
      'signup.feature1': 'Live capacity before you drive over',
      'signup.feature2': 'Slot booking, so you always get a spot',
      'signup.feature3': 'A Smart Key that unlocks the door',
      'signup.form.title': 'Create your HUMF account',
      'signup.form.prompt': 'Already a member?',
      'signup.form.cta': 'Log in instead',
      'field.firstname': 'First name',
      'field.lastname': 'Last name',
      'field.email': 'Email',
      'field.phone': 'Phone',
      'signup.terms': "I agree to HUMF's Terms of Service and Privacy Policy.",
      'cta.createaccount': 'Create Account',
      'signup.switch.prompt': 'Already have an account?',
      'signup.switch.cta': 'Log in'
    },
    th: {
      'nav.home': 'หน้าแรก',
      'nav.branches': 'สาขา',
      'nav.memberships': 'แพ็กเกจสมาชิก',
      'nav.blog': 'บทความ',
      'btn.login': 'เข้าสู่ระบบ',
      'btn.signup': 'สมัครสมาชิก',
      'account.myaccount': 'บัญชีของฉัน',
      'account.settings': 'ตั้งค่า',
      'account.logout': 'ออกจากระบบ',

      'hero.eyebrow': 'Humanity · Ultimate · Mastery · Fitness',
      'hero.accent': 'ทุกวัน ทุกที่',
      'hero.rest': 'กับฟิตเนสของคุณ',
      'hero.sub': 'ราคาย่อมเยา สาขาครอบคลุมทั่วไทย — สร้างมาเพื่อความยั่งยืนของมนุษยชาติ',
      'search.placeholder': 'ค้นหาด้วยที่อยู่ เมือง หรือรหัสไปรษณีย์...',

      'memberships.title': 'แพ็กเกจสมาชิก',
      'memberships.sub': 'ทุกแพ็กเกจของ HUMF ปลดล็อกสาขาประจำของคุณ การจองตามความจุแบบเรียลไทม์ และ Smart Key ดิจิทัล',
      'plan.starter.name': 'แพ็กเกจเริ่มต้น',
      'plan.allbranch': 'ทุกสาขา',
      'plan.permonth': '/ เดือน',
      'plan.starter.desc': 'เรียกเก็บรายเดือน ยกเลิกได้ทุกเมื่อ รวมการจองคิว การเข้าใช้ด้วย Smart Key และสิทธิ์เข้าทุกสาขา HUMF',
      'plan.feature.access247': 'เข้าใช้ได้ 24/7',
      'plan.feature.community': 'เข้าร่วมชุมชน HUMF',
      'plan.feature.card': 'รับบัตรสมาชิกดิจิทัล HUMF',
      'plan.elite.name': 'แพ็กเกจเอลีท',
      'plan.elite.badge': 'เอลีท',
      'plan.elite.desc': 'ทุกอย่างในแพ็กเกจเริ่มต้น อัปเกรดสำหรับสมาชิกที่ต้องการมากกว่า',
      'plan.feature.noreserve': 'ไม่ต้องจองล่วงหน้า',
      'plan.feature.parking': 'สิทธิ์ที่จอดรถ',
      'plan.feature.allbranches': 'เข้าใช้ได้ทุกสาขา',
      'cta.getstarted': 'เริ่มต้นใช้งาน',

      'events.title': 'กิจกรรมล่าสุดที่ HUMF',
      'events.sub': 'อีเวนต์ คลาส และความท้าทายจากชุมชน HUMF — ทุกสาขา',
      'event.wellness.date': 'ทุกวันพุธ · 19:00 น.',
      'event.wellness.title': 'Wellness Wednesdays',
      'event.wellness.desc': 'คลาสฟื้นฟูร่างกายและเคลื่อนไหวแบบมีไกด์ เปิดให้สมาชิกทุกระดับ มีเสื่อให้พร้อม',
      'event.ice.date': 'ทุกวันเสาร์ · 08:00 น.',
      'event.ice.title': 'HUMF Ice Bathing Session',
      'event.ice.desc': 'แช่น้ำเย็นและฝึกลมหายใจร่วมกับโค้ช HUMF อย่าลืมเตรียมผ้าเช็ดตัวมาเอง',
      'event.challenge.date': 'เริ่ม 6 ม.ค. · 6 สัปดาห์',
      'event.challenge.title': 'New Year Strength Challenge',
      'event.challenge.desc': 'ความท้าทาย 6 สัปดาห์ทั่วทุกสาขา HUMF พร้อมกระดานผู้นำรายสัปดาห์',
      'blog.readall': 'อ่านเรื่องราวทั้งหมดของ HUMF →',

      'begin.title': 'เริ่มต้นง่ายๆ',
      'begin.branch.title': 'ค้นหาสาขา',
      'begin.branch.desc': 'ค้นหาบนแผนที่แล้วเลือกสาขา HUMF ที่ใกล้ที่สุด',
      'begin.package.title': 'เลือกแพ็กเกจ',
      'begin.package.desc': 'เลือกแพ็กเกจเริ่มต้นหรืออัปเกรดเป็นเอลีทเพื่อสิทธิ์เต็มรูปแบบ',
      'begin.start.title': 'เริ่มออกกำลังกาย',
      'begin.start.desc': 'ปลดล็อกประตูด้วย Smart Key แล้วเริ่มเคลื่อนไหว',

      'footer.privacy': 'ความเป็นส่วนตัว',
      'footer.terms': 'ข้อกำหนด',
      'footer.contact': 'ติดต่อเรา',
      'footer.note': 'ต้นแบบเว็บสมาชิก HUMF — เป็นโครงร่างเบื้องต้นเท่านั้น รายชื่อสาขา แพ็กเกจสมาชิก และรายละเอียดกิจกรรมเป็นข้อมูลตัวอย่างระหว่างรอเนื้อหาจริง',
      'footer.sitemap': 'หน้าเว็บ',
      'footer.follow': 'ติดตามเรา',
      'footer.copyright': '© 2026 HUMF สงวนลิขสิทธิ์',

      'faq.title': 'คำถามที่พบบ่อย',
      'faq.sub': 'ทุกสิ่งที่ควรรู้ก่อนมาใช้บริการครั้งแรก',
      'faq.q1': 'จองคิวยังไง?',
      'faq.a1': 'ไปที่หน้าสาขา เลือกสาขาที่ต้องการ แล้วกดจอง คุณจะได้รับการยืนยันและการแจ้งเตือนก่อนถึงเวลา',
      'faq.q2': 'แพ็กเกจเริ่มต้นกับเอลีทต่างกันยังไง?',
      'faq.a2': 'แพ็กเกจเริ่มต้นครอบคลุมการจองคิว การเข้าใช้ด้วย Smart Key และสิทธิ์เข้าทุกสาขา ส่วนเอลีทเพิ่มการเข้าใช้แบบไม่ต้องจองล่วงหน้า ที่จอดรถ และสิทธิพิเศษในสาขาที่คนเยอะ',
      'faq.q3': 'เปลี่ยนสาขาหรือยกเลิกได้ทุกเมื่อไหม?',
      'faq.a3': 'ได้เลย — สมาชิกภาพของคุณใช้ได้ทุกสาขา HUMF และยกเลิกได้ทุกเมื่อจากหน้าบัญชีของฉัน ไม่มีสัญญาผูกมัด',
      'faq.q4': 'Smart Key ทำงานยังไง?',
      'faq.a4': 'เมื่อสมัครสมาชิกแล้ว Smart Key จะปรากฏในแอป แตะโทรศัพท์ใกล้ประตูสาขาเพื่อปลดล็อก ไม่ต้องใช้บัตรจริง',
      'faq.q5': 'HUMF มีสาขานอกกรุงเทพฯ ไหม?',
      'faq.a5': 'เรากำลังขยายสาขาไปทั่วประเทศไทย ตรวจสอบสาขาล่าสุดใกล้คุณได้ที่หน้าสาขา',

      'branches.title': 'ค้นหา HUMF ใกล้คุณ',
      'branches.sub': '78 สาขาทั่วกรุงเทพฯ ตรวจสอบความจุแบบเรียลไทม์ก่อนเดินทาง',
      'branches.sortlabel': 'สาขาเรียงตามระยะทาง',
      'cta.book': 'จอง',
      'status.full': 'เต็ม',
      'status.lowcrowd': 'คนน้อย · จองได้ทุกเมื่อ',
      'status.moderate': 'ปานกลาง · เหลือที่ไม่มาก',
      'status.nearfull': 'ใกล้เต็ม · คิวถัดไป 18:30 น.',
      'meta.openuntil22': 'เปิดถึง 22:00 น.',
      'meta.openuntil23': 'เปิดถึง 23:00 น.',

      'login.brand.title': 'ยิมของคุณ เมืองของคุณ บัญชีเดียวจบ',
      'login.brand.sub': 'เข้าสู่ระบบเพื่อจองคิว ปลดล็อกประตูด้วย Smart Key และจัดการสมาชิกภาพของคุณได้ทุกสาขา HUMF',
      'login.form.title': 'เข้าสู่ระบบ HUMF',
      'login.form.sub': 'ยินดีต้อนรับกลับมา — ไปต่อจากจุดเดิมได้เลย',
      'field.emailphone': 'อีเมลหรือเบอร์โทร',
      'field.password': 'รหัสผ่าน',
      'login.forgot': 'ลืมรหัสผ่าน?',
      'misc.or': 'หรือ',
      'login.switch.prompt': 'ยังไม่มีบัญชี HUMF?',
      'login.switch.cta': 'สร้างบัญชีใหม่',
      'oauth.google': 'ดำเนินการต่อด้วย Google',
      'oauth.facebook': 'ดำเนินการต่อด้วย Facebook',

      'signup.brand.title': 'สมัคร HUMF ได้ในไม่กี่นาที',
      'signup.brand.sub': 'บัญชีเดียว ใช้ได้ทุกสาขา นี่คือสิ่งที่คุณจะได้รับตั้งแต่วันแรก:',
      'signup.feature1': 'ดูความจุแบบเรียลไทม์ก่อนเดินทาง',
      'signup.feature2': 'จองคิวล่วงหน้า มั่นใจว่าได้ที่แน่นอน',
      'signup.feature3': 'Smart Key สำหรับปลดล็อกประตู',
      'signup.form.title': 'สร้างบัญชี HUMF ของคุณ',
      'signup.form.prompt': 'เป็นสมาชิกอยู่แล้ว?',
      'signup.form.cta': 'เข้าสู่ระบบแทน',
      'field.firstname': 'ชื่อจริง',
      'field.lastname': 'นามสกุล',
      'field.email': 'อีเมล',
      'field.phone': 'เบอร์โทรศัพท์',
      'signup.terms': 'ฉันยอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัวของ HUMF',
      'cta.createaccount': 'สร้างบัญชี',
      'signup.switch.prompt': 'มีบัญชีอยู่แล้ว?',
      'signup.switch.cta': 'เข้าสู่ระบบ'
    }
  };

  function applyLang(lang) {
    if (!DICT[lang]) lang = 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = DICT[lang][key];
      if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = DICT[lang][key];
      if (val) el.setAttribute('placeholder', val);
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem('humf_lang', lang); } catch (e) {}
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      var next = lang === 'en' ? 'th' : 'en';
      btn.textContent = lang === 'en' ? 'ไทย' : 'EN';
      btn.setAttribute('data-lang-next', next);
    });
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-toggle');
    if (!btn) return;
    applyLang(btn.getAttribute('data-lang-next'));
  });

  var saved = 'en';
  try { saved = localStorage.getItem('humf_lang') || 'en'; } catch (e) {}
  applyLang(saved);
})();
