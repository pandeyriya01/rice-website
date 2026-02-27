import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    // Update document direction when language changes
    document.body.setAttribute('dir', direction);
  }, [direction]);

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ar');
      setDirection('rtl');
    } else {
      setLanguage('en');
      setDirection('ltr');
    }
  };

  const translations = {
    en: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About Us',
        products: 'Our Products',
        exportMarkets: 'Export Markets',
        quality: 'Quality & Certifications',
        whyChooseUs: 'Why Choose Us',
        contact: 'Contact Us',
      },
      
      // Home Page
      home: {
        heroTitle: 'Premium Indian Rice',
        heroSubtitle: 'For Global Markets',
        heroDescription: 'Exporting the finest quality Basmati and Non-Basmati rice from India to Dubai and UAE with trust, purity, and excellence.',
        ctaContact: 'Contact Us',
        ctaProducts: 'Our Products',
        featuresTitle: 'Why Choose Our Rice',
        feature1Title: 'Premium Quality',
        feature1Desc: 'Handpicked grains ensuring the highest standards',
        feature2Title: 'Global Export',
        feature2Desc:'Trusted supplier of premium Indian rice to worldwide markets.',
        feature3Title: 'Certified Excellence',
        feature3Desc: 'ISO, FSSAI, and APEDA certified products',
        productsPreviewTitle: 'Our Premium Products',
        productsPreviewDesc: 'Discover our range of premium rice varieties',
      },
      
      // About Page
      about: {
        title: 'About Us',
        subtitle: 'Your Trusted Rice Export Partner',
        companyStory: 'Company Story',
        storyText: 'With decades of experience in rice cultivation and export, we have established ourselves as a leading supplier of premium Indian rice to the UAE and global markets. Our commitment to quality and customer satisfaction has made us the preferred choice for businesses worldwide.',
        vision: 'Our Vision',
        visionText: 'To be the most trusted and preferred rice exporter globally, known for uncompromising quality and sustainable practices.',
        mission: 'Our Mission',
        missionText: 'To deliver premium quality rice products that meet international standards while supporting farmers and promoting sustainable agriculture.',
        experience: 'Years of Export Experience',
        globalPresence: 'Global Presence',
        presenceText: 'Serving customers across UAE, Middle East, and beyond',
      },
      
      // Products Page
      products: {
        title: 'Our Products',
        subtitle: 'Premium Rice Varieties',
        basmatiTitle: 'Basmati Rice',
        basmatiDesc: 'Premium long-grain aromatic rice known for its distinctive fragrance and delicate flavor. Perfect for biryanis and special occasions.',
        nonBasmatiTitle: 'Non-Basmati Rice',
        nonBasmatiDesc: 'High-quality everyday rice varieties suitable for all types of cooking. Nutritious and economical choice for daily meals.',
        parboiledTitle: 'Parboiled Rice',
        parboiledDesc: 'Partially pre-cooked rice that retains more nutrients. Ideal for health-conscious consumers and bulk cooking.',
        brokenTitle: 'Broken Rice',
        brokenDesc: 'Economical rice option perfect for various applications. Great value without compromising on quality.',
      },
      
      // Export Markets Page
      exportMarkets: {
        title: 'Export Markets',
        subtitle: 'Serving Dubai & UAE with Excellence',
        dubaiTitle: 'Dubai & UAE Focus',
        dubaiDesc: 'We specialize in serving the UAE market with consistent quality and timely deliveries. Our strong logistics network ensures fresh rice reaches you on time.',
        logisticsTitle: 'Strong Logistics',
        logisticsDesc: 'State-of-the-art warehousing and efficient shipping processes',
        qualityTitle: 'Quality Assurance',
        qualityDesc: 'Rigorous testing at every stage from farm to port',
        statsTitle: 'Our Achievements',
        stat1: 'Tons Exported Annually',
        stat2: 'Satisfied Clients',
        stat3: 'Countries Served',
      },
      
      // Quality Page
      quality: {
        title: 'Quality & Certifications',
        subtitle: 'Committed to Excellence',
        processTitle: 'Our Quality Control Process',
        step1: 'Source Selection',
        step1Desc: 'Carefully selected farms,suppliers and millers',
        step2: 'Lab Testing',
        step2Desc: 'Comprehensive quality and safety tests',
        step3: 'Processing',
        step3Desc: 'Modern milling and processing facilities',
        step4: 'Final Inspection',
        step4Desc: 'Pre-shipment quality verification as per coustomer demand',
        certificationsTitle: 'Our Certifications',
        isoTitle: 'ISO Certified',
        isoDesc: 'International quality management standards',
        fssaiTitle: 'FSSAI Approved',
        fssaiDesc: 'Food safety and standards authority of India',
        apedaTitle: 'APEDA Registered',
        apedaDesc: 'Agricultural and processed food products export',
      },
      
      // Why Choose Us Page
      whyChooseUs: {
        title: 'Why Choose Us',
        subtitle: 'Your Trusted Partner in Rice Export',
        reason1Title: 'Trust & Reliability',
        reason1Desc: 'Decades of experience and thousands of satisfied customers worldwide',
        reason2Title: 'Purity & Authenticity',
        reason2Desc: '100% authentic Indian rice with no adulteration or mixing',
        reason3Title: 'Natural Aroma',
        reason3Desc: 'Distinctive fragrance and taste that defines premium quality',
        reason4Title: 'Timely Delivery',
        reason4Desc: 'Efficient logistics ensuring on-time delivery every time',
        reason5Title: 'Competitive Pricing',
        reason5Desc: 'Best value for premium quality with transparent pricing',
        reason6Title: 'Customer Support',
        reason6Desc: '24/7 dedicated support for all your queries and needs',
      },
      
      // Contact Page
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in Touch',
        formTitle: 'Send us a Message',
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        submit: 'Send Message',
        infoTitle: 'Contact Information',
        address: 'Address',
      addressText: 'Kanth Road, Bhatavali, Near Photon Hospital, Moradabad – 244001, Uttar Pradesh, India',
        phone: 'Phone',
        phoneText: '+91 9990805112 / +91 8630880926',
        email: 'Email',
        emailText: 'info@nyjahexim.com',
        whatsapp: 'WhatsApp Us',
        hours: 'Business Hours',
        hoursText: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
      },
      
      // Footer
      footer: {
        about: 'About Company',
        aboutText: "Leading exporter of premium Indian rice serving customers worldwide.",
        quickLinks: 'Quick Links',
        products: 'Products',
        contactInfo: 'Contact Info',
        followUs: 'Follow Us',
        copyright: '© 2024 Rice Export Company. All rights reserved.',
      },
      
      // Common
      common: {
        learnMore: 'Learn More',
        viewAll: 'View All',
        readMore: 'Read More',
        getQuote: 'Get Quote',
        callNow: 'Call Now',
      },
    },
    
    ar: {
      // Navigation (Arabic - Placeholder, replace with actual translations)
      nav: {
        home: 'الرئيسية',
        about: 'معلومات عنا',
        products: 'منتجاتنا',
        exportMarkets: 'أسواق التصدير',
        quality: 'الجودة والشهادات',
        whyChooseUs: 'لماذا تختارنا',
        contact: 'اتصل بنا',
      },
      
      // Home Page (Arabic - Placeholder)
      home: {
        heroTitle: 'أرز هندي فاخر',
        heroSubtitle: 'للأسواق العالمية',
        heroDescription: 'تصدير أجود أنواع أرز البسمتي وغير البسمتي من الهند إلى دبي والإمارات بثقة ونقاء وتميز',
        ctaContact: 'اتصل بنا',
        ctaProducts: 'منتجاتنا',
        featuresTitle: 'لماذا تختار أرزنا',
        feature1Title: 'جودة ممتازة',
        feature1Desc: 'حبوب منتقاة يدوياً تضمن أعلى المعايير',
        feature2Title: 'تصدير عالمي',
        feature2Desc: 'شريك موثوق لأسواق الإمارات والشرق الأوسط',
        feature3Title: 'تميز معتمد',
        feature3Desc: 'منتجات معتمدة من ISO و FSSAI و APEDA',
        productsPreviewTitle: 'منتجاتنا المميزة',
        productsPreviewDesc: 'اكتشف مجموعتنا من أصناف الأرز الفاخرة',
      },
      
      // About Page (Arabic - Placeholder)
      about: {
        title: 'معلومات عنا',
        subtitle: 'شريكك الموثوق في تصدير الأرز',
        companyStory: 'قصة الشركة',
        storyText: 'مع عقود من الخبرة في زراعة وتصدير الأرز، أصبحنا مورداً رائداً للأرز الهندي الفاخر إلى الإمارات والأسواق العالمية',
        vision: 'رؤيتنا',
        visionText: 'أن نكون المصدر الأكثر ثقة وتفضيلاً للأرز عالمياً',
        mission: 'مهمتنا',
        missionText: 'تقديم منتجات أرز عالية الجودة تلبي المعايير الدولية',
        experience: 'سنوات من الخبرة في التصدير',
        globalPresence: 'حضور عالمي',
        presenceText: 'خدمة العملاء في الإمارات والشرق الأوسط وما وراءها',
      },
      
      // Products Page (Arabic - Placeholder)
      products: {
        title: 'منتجاتنا',
        subtitle: 'أصناف الأرز الفاخرة',
        basmatiTitle: 'أرز بسمتي',
        basmatiDesc: 'أرز عطري طويل الحبة معروف برائحته المميزة ونكهته الرقيقة',
        nonBasmatiTitle: 'أرز غير بسمتي',
        nonBasmatiDesc: 'أصناف أرز يومية عالية الجودة مناسبة لجميع أنواع الطبخ',
        parboiledTitle: 'أرز مسلوق',
        parboiledDesc: 'أرز مطبوخ جزئياً يحتفظ بمزيد من العناصر الغذائية',
        brokenTitle: 'أرز مكسور',
        brokenDesc: 'خيار أرز اقتصادي مثالي لتطبيقات متنوعة',
      },
      
      // Export Markets (Arabic - Placeholder)
      exportMarkets: {
        title: 'أسواق التصدير',
        subtitle: 'خدمة دبي والإمارات بتميز',
        dubaiTitle: 'التركيز على دبي والإمارات',
        dubaiDesc: 'نحن متخصصون في خدمة سوق الإمارات بجودة ثابتة وتسليم في الوقت المحدد',
        logisticsTitle: 'لوجستيات قوية',
        logisticsDesc: 'مستودعات حديثة وعمليات شحن فعالة',
        qualityTitle: 'ضمان الجودة',
        qualityDesc: 'اختبار صارم في كل مرحلة من المزرعة إلى الميناء',
        statsTitle: 'إنجازاتنا',
        stat1: 'طن مصدر سنوياً',
        stat2: 'عميل راضٍ',
        stat3: 'دولة تخدم',
      },
      
      // Quality (Arabic - Placeholder)
      quality: {
        title: 'الجودة والشهادات',
        subtitle: 'ملتزمون بالتميز',
        processTitle: 'عملية مراقبة الجودة لدينا',
        step1: 'اختيار المصدر',
        step1Desc: 'مزارع وموردون مختارون بعناية',
        step2: 'الاختبار المعملي',
        step2Desc: 'اختبارات شاملة للجودة والسلامة',
        step3: 'المعالجة',
        step3Desc: 'مرافق طحن ومعالجة حديثة',
        step4: 'الفحص النهائي',
        step4Desc: 'التحقق من الجودة قبل الشحن',
        certificationsTitle: 'شهاداتنا',
        isoTitle: 'معتمد ISO',
        isoDesc: 'معايير إدارة الجودة الدولية',
        fssaiTitle: 'معتمد FSSAI',
        fssaiDesc: 'هيئة سلامة الأغذية والمعايير في الهند',
        apedaTitle: 'مسجل APEDA',
        apedaDesc: 'تصدير المنتجات الزراعية والأغذية المصنعة',
      },
      
      // Why Choose Us (Arabic - Placeholder)
      whyChooseUs: {
        title: 'لماذا تختارنا',
        subtitle: 'شريكك الموثوق في تصدير الأرز',
        reason1Title: 'الثقة والموثوقية',
        reason1Desc: 'عقود من الخبرة وآلاف العملاء الراضين في جميع أنحاء العالم',
        reason2Title: 'النقاء والأصالة',
        reason2Desc: 'أرز هندي أصلي 100٪ بدون غش أو خلط',
        reason3Title: 'رائحة طبيعية',
        reason3Desc: 'عطر ومذاق مميز يحدد الجودة الممتازة',
        reason4Title: 'التسليم في الوقت المحدد',
        reason4Desc: 'لوجستيات فعالة تضمن التسليم في الوقت المحدد في كل مرة',
        reason5Title: 'أسعار تنافسية',
        reason5Desc: 'أفضل قيمة للجودة الممتازة مع تسعير شفاف',
        reason6Title: 'دعم العملاء',
        reason6Desc: 'دعم مخصص على مدار الساعة طوال أيام الأسبوع',
      },
      
      // Contact (Arabic - Placeholder)
      contact: {
        title: 'اتصل بنا',
        subtitle: 'ابقى على تواصل',
        formTitle: 'أرسل لنا رسالة',
        name: 'اسمك',
        email: 'عنوان البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
        infoTitle: 'معلومات الاتصال',
        address: 'العنوان',
        addressText: 'مومباي، ماهاراشترا، الهند',
        phone: 'هاتف',
        phoneText: '+91 9990805112 / +91 8630880926',
        email: 'البريد الإلكتروني',
        emailText: 'info@nyjahexim.com',
        whatsapp: 'واتساب',
        hours: 'ساعات العمل',
        hoursText: 'الإثنين - السبت: 9:00 صباحاً - 6:00 مساءً',
      },
      
      // Footer (Arabic - Placeholder)
      footer: {
        about: 'عن الشركة',
        aboutText: 'مصدر رائد للأرز الهندي الفاخر إلى الإمارات والأسواق العالمية',
        quickLinks: 'روابط سريعة',
        products: 'منتجات',
        contactInfo: 'معلومات الاتصال',
        followUs: 'تابعنا',
        copyright: '© 2024 شركة تصدير الأرز. جميع الحقوق محفوظة',
      },
      
      // Common (Arabic - Placeholder)
      common: {
        learnMore: 'اعرف المزيد',
        viewAll: 'عرض الكل',
        readMore: 'اقرأ أكثر',
        getQuote: 'احصل على عرض أسعار',
        callNow: 'اتصل الآن',
      },
    },
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
