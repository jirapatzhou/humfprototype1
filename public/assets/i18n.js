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
      'signup.switch.cta': 'Log in',

      'blog.eyebrow': 'The HUMF Blog',
      'blog.title': 'News, community & challenges',
      'blog.sub': 'Everything happening across the HUMF network — straight from the branches, not a press release.',
      'blog.backtotop': '↑ Back to top',

      'blog.expansion.tag': 'HUMF News',
      'blog.expansion.title': 'HUMF Expands to 78 Branches Across Bangkok',
      'blog.expansion.excerpt': 'From five branches to seventy-eight — here\'s what that means for your membership.',
      'blog.expansion.meta': 'HUMF News · 5 min read',
      'blog.expansion.p1': 'Two years ago HUMF opened its first five branches on the promise that a gym should be close, honest about how busy it is, and cheap enough to actually use every day. That promise scaled better than we expected — HUMF is now live in 78 locations across Bangkok, from Thonglor to the outer ring roads, and the live-capacity map on your Home screen now reflects the whole network.',
      'blog.expansion.p2': 'Nothing changes about how your membership works. Every Starter Package still includes access to every branch, no exceptions and no upcharge — the Elite Package still skips the reservation queue and adds parking. What does change is how close "your branch" can be: with 78 locations, most members now have a HUMF within a five-minute walk of home or work, not just their original sign-up branch.',
      'blog.expansion.p3': 'We\'re rolling the expansion out with the same live-capacity system from day one at every new location, so the "book anytime" and "moderate crowd" labels on the Branches page are accurate from a branch\'s very first day open, not estimated. If a branch near you hasn\'t shown up in the list yet, it\'s opening soon — check back on the Branches page for the latest count.',

      'blog.wellness.tag': 'Community',
      'blog.wellness.title': 'Wellness Wednesdays',
      'blog.wellness.excerpt': 'A weekly reset for your joints, your breath, and your nervous system — no cardio required.',
      'blog.wellness.meta': 'Community · 3 min read',
      'blog.wellness.p1': 'Every Wednesday at 7:00 PM, every HUMF branch runs the same 45-minute session: guided mobility work, breath-focused stretching, and enough floor time to actually undo what the rest of the week did to your hips and shoulders. It\'s led by a HUMF-certified coach, mats are provided, and it\'s open to every membership tier — Starter or Elite, no booking required.',
      'blog.wellness.p2': 'This isn\'t a recovery day bolted on as an afterthought. Members who lift heavy earlier in the week consistently show up here to reset before the weekend, and it\'s become one of the most reliably full rooms in the HUMF community calendar — not because it\'s intense, but because it\'s the one hour nobody has to perform.',
      'blog.wellness.p3': 'Show up in whatever you trained in that day. No sign-up, no gear beyond a water bottle — the room has mats.',

      'blog.ice.tag': 'Recovery',
      'blog.ice.title': 'HUMF Ice Bathing Session',
      'blog.ice.excerpt': 'Cold immersion, real coaching, and a community that shows up before sunrise.',
      'blog.ice.meta': 'Recovery · 4 min read',
      'blog.ice.p1': 'Every Saturday at 8:00 AM, before the rest of the branch is even awake, a HUMF coach leads a guided cold immersion session — breathwork first, then a timed cold plunge, then a slow warm-up back to baseline. It\'s the kind of thing that sounds much worse described than it feels once you\'re actually in the room with other people doing it.',
      'blog.ice.p2': 'The format matters more than the temperature: coaching on breath control before you go in is what makes the difference between a genuinely useful stress-response reset and just being uncomfortably cold. New members are walked through the basics — how long, how to breathe, when to get out — before anyone gets near the water.',
      'blog.ice.p3': 'Bring your own towel; everything else, including the coaching, is included in every HUMF membership. If you\'re pregnant, have a cardiovascular condition, or are otherwise unsure it\'s right for you, talk to a HUMF coach before your first session.',

      'blog.challenge.tag': 'Challenge',
      'blog.challenge.title': 'New Year Strength Challenge',
      'blog.challenge.excerpt': 'Six weeks, one leaderboard, every HUMF branch competing together.',
      'blog.challenge.meta': 'Challenge · 4 min read',
      'blog.challenge.p1': 'Starting January 6th, every HUMF branch runs the same six-week strength challenge, and every member is automatically enrolled the moment they walk in and log a workout — no separate sign-up. Each week tracks a different benchmark (total volume, a timed circuit, a max-effort lift), and results roll up into one leaderboard shared across all 78 branches, not just your home location.',
      'blog.challenge.p2': 'The point isn\'t to turn HUMF into a competition gym — it\'s a shared reason to show up consistently across a season that usually kills momentum. Weekly standings post inside the app, and the top performers at each branch get recognized in that branch\'s community feed.',
      'blog.challenge.p3': 'You don\'t need to do anything to join except train. The challenge tracks whatever you\'re already logging, and six weeks later it just ends — no penalty for skipping a week, no fee, no catch.'
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
      'signup.switch.cta': 'เข้าสู่ระบบ',

      'blog.eyebrow': 'บล็อกของ HUMF',
      'blog.title': 'ข่าวสาร ชุมชน และความท้าทาย',
      'blog.sub': 'ทุกความเคลื่อนไหวในเครือข่าย HUMF — ตรงจากสาขา ไม่ใช่ข่าวประชาสัมพันธ์',
      'blog.backtotop': '↑ กลับขึ้นด้านบน',

      'blog.expansion.tag': 'ข่าว HUMF',
      'blog.expansion.title': 'HUMF ขยายเป็น 78 สาขาทั่วกรุงเทพฯ',
      'blog.expansion.excerpt': 'จาก 5 สาขา สู่ 78 สาขา — นี่คือสิ่งที่หมายถึงสำหรับสมาชิกภาพของคุณ',
      'blog.expansion.meta': 'ข่าว HUMF · อ่าน 5 นาที',
      'blog.expansion.p1': 'สองปีก่อน HUMF เปิด 5 สาขาแรกด้วยคำมั่นว่ายิมควรอยู่ใกล้ บอกความจุตามจริง และราคาถูกพอจะใช้ได้ทุกวัน คำมั่นนั้นขยายตัวได้ดีกว่าที่คาดไว้ — วันนี้ HUMF เปิดให้บริการแล้ว 78 สาขาทั่วกรุงเทพฯ ตั้งแต่ทองหล่อไปจนถึงถนนวงแหวนรอบนอก และแผนที่ความจุแบบเรียลไทม์บนหน้าแรกของคุณตอนนี้ครอบคลุมทั้งเครือข่ายแล้ว',
      'blog.expansion.p2': 'สมาชิกภาพของคุณยังทำงานเหมือนเดิมทุกประการ ทุกแพ็กเกจเริ่มต้นยังคงเข้าใช้ได้ทุกสาขา ไม่มีข้อยกเว้นและไม่มีค่าใช้จ่ายเพิ่ม — แพ็กเกจเอลีทยังคงข้ามคิวจองและมีที่จอดรถให้เหมือนเดิม สิ่งที่เปลี่ยนไปคือ "สาขาของคุณ" จะใกล้ตัวคุณมากขึ้นแค่ไหน ด้วย 78 สาขา สมาชิกส่วนใหญ่ตอนนี้มี HUMF อยู่ในระยะเดินห้านาทีจากบ้านหรือที่ทำงาน ไม่ใช่แค่สาขาที่สมัครไว้ตอนแรก',
      'blog.expansion.p3': 'เราเปิดระบบความจุแบบเรียลไทม์ตั้งแต่วันแรกในทุกสาขาใหม่ ดังนั้นป้าย "จองได้ทุกเมื่อ" และ "คนปานกลาง" บนหน้าสาขาจึงถูกต้องตั้งแต่วันแรกที่เปิด ไม่ใช่การประมาณการ หากสาขาใกล้คุณยังไม่ขึ้นในรายชื่อ แปลว่ากำลังจะเปิดเร็วๆ นี้ — กลับมาเช็กที่หน้าสาขาเพื่อดูจำนวนล่าสุด',

      'blog.wellness.tag': 'ชุมชน',
      'blog.wellness.title': 'Wellness Wednesdays',
      'blog.wellness.excerpt': 'รีเซ็ตข้อต่อ ลมหายใจ และระบบประสาทของคุณทุกสัปดาห์ — ไม่ต้องคาร์ดิโอ',
      'blog.wellness.meta': 'ชุมชน · อ่าน 3 นาที',
      'blog.wellness.p1': 'ทุกวันพุธ เวลา 19:00 น. ทุกสาขา HUMF จัดคลาสเดียวกันนาน 45 นาที ได้แก่ การเคลื่อนไหวแบบมีไกด์ การยืดเหยียดโดยเน้นลมหายใจ และเวลาบนพื้นมากพอที่จะแก้ผลกระทบที่สัปดาห์ทั้งสัปดาห์ทำกับสะโพกและไหล่ของคุณ นำโดยโค้ชที่ผ่านการรับรองจาก HUMF มีเสื่อให้พร้อม และเปิดให้สมาชิกทุกระดับ ทั้งเริ่มต้นและเอลีท ไม่ต้องจองล่วงหน้า',
      'blog.wellness.p2': 'นี่ไม่ใช่วันฟื้นฟูที่แถมมาแบบขอไปที สมาชิกที่ยกน้ำหนักหนักช่วงต้นสัปดาห์มักมาที่นี่เพื่อรีเซ็ตก่อนวันหยุด และกลายเป็นหนึ่งในคลาสที่เต็มสม่ำเสมอที่สุดในปฏิทินชุมชน HUMF ไม่ใช่เพราะมันหนัก แต่เพราะเป็นชั่วโมงเดียวที่ไม่มีใครต้องเค้นผลงาน',
      'blog.wellness.p3': 'มาในชุดที่ใส่ซ้อมวันนั้นได้เลย ไม่ต้องลงทะเบียนล่วงหน้า ไม่ต้องเตรียมอุปกรณ์นอกจากขวดน้ำ — ห้องมีเสื่อให้พร้อม',

      'blog.ice.tag': 'ฟื้นฟูร่างกาย',
      'blog.ice.title': 'HUMF Ice Bathing Session',
      'blog.ice.excerpt': 'แช่น้ำเย็น พร้อมโค้ชจริง และชุมชนที่มาก่อนพระอาทิตย์ขึ้น',
      'blog.ice.meta': 'ฟื้นฟูร่างกาย · อ่าน 4 นาที',
      'blog.ice.p1': 'ทุกวันเสาร์ เวลา 08:00 น. ก่อนที่สาขาจะตื่นเต็มที่ โค้ช HUMF จะนำคลาสแช่น้ำเย็นแบบมีไกด์ เริ่มด้วยการฝึกลมหายใจ ตามด้วยการแช่น้ำเย็นแบบจับเวลา แล้ววอร์มอัพช้าๆ กลับสู่ภาวะปกติ ฟังดูน่ากลัวกว่าที่รู้สึกจริงเมื่อได้อยู่ในห้องกับคนอื่นที่ทำไปด้วยกัน',
      'blog.ice.p2': 'รูปแบบสำคัญกว่าอุณหภูมิ การฝึกควบคุมลมหายใจก่อนลงน้ำคือสิ่งที่ทำให้ต่างจากแค่หนาวเฉยๆ สมาชิกใหม่จะได้เรียนพื้นฐานก่อน ทั้งระยะเวลา วิธีหายใจ และเวลาที่ควรขึ้นจากน้ำ ก่อนที่ใครจะเข้าใกล้น้ำ',
      'blog.ice.p3': 'เตรียมผ้าเช็ดตัวมาเอง ส่วนที่เหลือรวมถึงการโค้ชรวมอยู่ในสมาชิกภาพ HUMF ทุกแพ็กเกจ หากคุณกำลังตั้งครรภ์ มีภาวะหัวใจและหลอดเลือด หรือไม่แน่ใจว่าเหมาะกับคุณหรือไม่ ปรึกษาโค้ช HUMF ก่อนเซสชันแรกของคุณ',

      'blog.challenge.tag': 'ความท้าทาย',
      'blog.challenge.title': 'New Year Strength Challenge',
      'blog.challenge.excerpt': 'หกสัปดาห์ กระดานผู้นำเดียว ทุกสาขา HUMF แข่งขันร่วมกัน',
      'blog.challenge.meta': 'ความท้าทาย · อ่าน 4 นาที',
      'blog.challenge.p1': 'เริ่ม 6 มกราคม ทุกสาขา HUMF จัดความท้าทายความแข็งแรงหกสัปดาห์เหมือนกัน และสมาชิกทุกคนถูกลงทะเบียนอัตโนมัติทันทีที่เข้ามาและบันทึกการออกกำลังกาย ไม่ต้องสมัครแยก แต่ละสัปดาห์วัดผลต่างกัน ทั้งปริมาณรวม วงจรจับเวลา และท่ายกสูงสุด ผลลัพธ์รวมกันเป็นกระดานผู้นำเดียวที่ใช้ร่วมกันทั้ง 78 สาขา ไม่ใช่แค่สาขาประจำของคุณ',
      'blog.challenge.p2': 'จุดประสงค์ไม่ใช่เพื่อทำให้ HUMF เป็นยิมแข่งขัน แต่เป็นเหตุผลร่วมกันให้มาสม่ำเสมอตลอดฤดูกาลที่มักทำให้แรงจูงใจหมดไป อันดับรายสัปดาห์แสดงในแอป และผู้ทำผลงานดีที่สุดของแต่ละสาขาจะได้รับการยกย่องในฟีดชุมชนของสาขานั้น',
      'blog.challenge.p3': 'คุณไม่ต้องทำอะไรเพิ่มนอกจากซ้อม ความท้าทายจะติดตามสิ่งที่คุณบันทึกอยู่แล้ว และหกสัปดาห์ต่อมาก็จบไปเอง ไม่มีบทลงโทษถ้าพลาดไปสักสัปดาห์ ไม่มีค่าธรรมเนียม ไม่มีเงื่อนไขแอบแฝง'
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
