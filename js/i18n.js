// ============================================================
// TEST WEBSITE — INTERNATIONALIZATION (i18n)
// Bilingual VN / EN system
// ============================================================

const i18nData = {
  vn: {
    // Navigation
    nav_home: "Trang chủ",
    nav_solutions: "Giải pháp đào tạo",
    nav_sol_mechatronics: "Cơ điện tử",
    nav_sol_mechatronics_sub: "Robot công nghiệp, PLC/SCADA",
    nav_sol_cnc: "Gia công CNC",
    nav_sol_cnc_sub: "Tiện, Phay, EDM, CAD/CAM",
    nav_sol_auto: "Ô tô & Xe điện",
    nav_sol_auto_sub: "Chẩn đoán, Động cơ điện, EV",
    nav_sol_semi: "Bán dẫn - Vi mạch",
    nav_sol_semi_sub: "IC Design, Đóng gói, VR/XR Lab",
    nav_sol_weld: "Hàn công nghiệp",
    nav_sol_weld_sub: "MIG/MAG, TIG, Hàn robot",
    nav_sol_hvac: "Điện lạnh & HVAC",
    nav_sol_hvac_sub: "Điều hòa, Lạnh công nghiệp",
    nav_products: "Sản phẩm",
    nav_prod_equip: "Thiết bị đào tạo",
    nav_prod_equip_sub: "Mô hình, Bench, Panel",
    nav_prod_software: "Phần mềm mô phỏng",
    nav_prod_software_sub: "CAD/CAM/CAE, EDA, VR",
    nav_prod_materials: "Vật tư thực hành",
    nav_prod_materials_sub: "Linh kiện, PCB, mẫu thử",
    nav_courses: "Khóa học",
    nav_projects: "Dự án tiêu biểu",
    nav_partners: "Đối tác",
    nav_news: "Tin tức",
    nav_contact: "Liên hệ",
    nav_search_placeholder: "Tìm kiếm giải pháp, sản phẩm...",
    nav_search_hints: "Tìm kiếm gợi ý:",
    nav_hint_semi: "Bán dẫn vi mạch",
    nav_hint_cnc: "Thiết bị CNC",
    nav_hint_lab: "Thiết kế phòng lab",
    nav_hint_train: "Đào tạo giảng viên",
    btn_consult: "Nhận tư vấn",
    btn_quote: "Yêu cầu báo giá",
    lang_vn: "VN",
    lang_en: "EN",

    // Hero
    hero_badge: "Chuyên gia số 1 về thiết bị đào tạo kỹ thuật",
    hero_title_1: "Xây dựng",
    hero_title_2: "Phòng Lab Kỹ thuật",
    hero_title_3: "Đẳng cấp Quốc tế",
    hero_typewriter: ["Cơ điện tử", "Bán dẫn - Vi mạch", "CNC & CAD/CAM", "Ô tô & Xe điện", "Tự động hóa"],
    hero_desc: "TEST cung cấp giải pháp tổng thể từ tư vấn thiết kế phòng lab, thiết bị đào tạo đến triển khai chương trình đào tạo chuẩn quốc tế cho các trường ĐH, CĐ và doanh nghiệp.",
    hero_cta_solutions: "Xem giải pháp",
    hero_cta_consult: "Nhận tư vấn ngay",
    hero_stat_projects: "Dự án",
    hero_stat_schools: "Trường học",
    hero_stat_years: "Năm kinh nghiệm",
    hero_stat_experts: "Chuyên gia",
    hero_float_lab: "Phòng Lab",
    hero_float_lab_sub: "Chuẩn quốc tế",
    hero_float_semi: "Bán dẫn",
    hero_float_semi_sub: "VR/XR Cleanroom",
    hero_scroll: "Cuộn xuống",

    // Pain points
    pain_label: "Vấn đề cần giải quyết",
    pain_title_1: "TEST giải quyết",
    pain_title_2: "vấn đề gì",
    pain_title_3: "cho bạn?",
    pain_desc: "Chúng tôi hiểu những thách thức mà các cơ sở giáo dục và doanh nghiệp đang đối mặt trong việc xây dựng năng lực đào tạo kỹ thuật chất lượng cao.",
    field_mechatronics: "Cơ điện tử",
    field_mechatronics_desc: "Thiếu mô hình thực hành robot công nghiệp, PLC, hệ thống SCADA hiện đại đáp ứng nhu cầu doanh nghiệp.",
    field_cnc: "Gia công CNC",
    field_cnc_desc: "Chi phí máy CNC thực cao, học viên thiếu cơ hội thực hành đủ giờ trên thiết bị đắt tiền.",
    field_auto: "Ô tô & Xe điện",
    field_auto_desc: "Công nghệ EV thay đổi nhanh, cơ sở vật chất cũ không đáp ứng được yêu cầu đào tạo xe điện.",
    field_semi: "Bán dẫn - Vi mạch",
    field_semi_desc: "Phòng sạch, EDA tools đắt đỏ; thiếu nhân lực thiết kế vi mạch trầm trọng tại Việt Nam.",
    field_weld: "Hàn công nghiệp",
    field_weld_desc: "Hàn robot, hàn tự động ngày càng phổ biến nhưng thiết bị đào tạo bài bản còn thiếu hụt.",
    field_hvac: "Điện lạnh & HVAC",
    field_hvac_desc: "Thiếu mô hình đào tạo điện lạnh công nghiệp, máy lạnh thương mại sát với thực tế sản xuất.",
    field_cta: "Xem giải pháp",

    // Trust / USP
    trust_label: "Tại sao chọn TEST?",
    trust_title: "Điểm khác biệt tạo nên",
    trust_title_accent: "uy tín vượt trội",
    usp_projects_num: "200+",
    usp_projects_label: "Dự án phòng lab",
    usp_projects_sub: "Đã triển khai thành công",
    usp_schools_num: "80+",
    usp_schools_label: "Trường & Doanh nghiệp",
    usp_schools_sub: "Tin tưởng hợp tác",
    usp_years_num: "15+",
    usp_years_label: "Năm kinh nghiệm",
    usp_years_sub: "Trong lĩnh vực đào tạo kỹ thuật",
    usp_experts_num: "50+",
    usp_experts_label: "Chuyên gia kỹ thuật",
    usp_experts_sub: "Kinh nghiệm quốc tế",
    projects_label: "Dự án tiêu biểu",
    projects_title: "Những công trình",
    projects_title_accent: "phòng lab tiêu biểu",
    courses_label: "Khóa học nổi bật",
    courses_title: "Chương trình đào tạo",
    courses_title_accent: "chuyên sâu & thực tiễn",
    partners_label: "Đối tác & Hãng sản xuất",
    partners_title: "Hệ sinh thái đối tác",
    partners_title_accent: "toàn cầu",
    btn_all_projects: "Xem tất cả dự án",
    btn_all_courses: "Xem tất cả khóa học",

    // Sticky / CTA popup
    popup_consult_title: "Đăng ký nhận tư vấn",
    popup_quote_title: "Yêu cầu báo giá",
    form_name: "Họ và tên",
    form_name_placeholder: "Nguyễn Văn A",
    form_phone: "Số điện thoại",
    form_phone_placeholder: "0912 345 678",
    form_email: "Email công ty",
    form_email_placeholder: "example@truong.edu.vn",
    form_org: "Đơn vị / Trường học",
    form_org_placeholder: "Trường ĐH Bách Khoa...",
    form_need: "Nhu cầu cụ thể",
    form_need_placeholder: "Mô tả yêu cầu của bạn...",
    form_product: "Sản phẩm quan tâm",
    form_submit_consult: "Gửi yêu cầu tư vấn",
    form_submit_quote: "Gửi yêu cầu báo giá",
    form_privacy: "Thông tin của bạn được bảo mật tuyệt đối theo chính sách riêng tư của chúng tôi.",
    form_success: "Cảm ơn! Chúng tôi sẽ liên hệ trong vòng 24 giờ.",
    captcha_label: "Tôi không phải robot",

    // Solution page
    sol_need_title: "Nhu cầu ngành",
    sol_lab_model: "Mô hình Lab",
    sol_devices: "Nhóm thiết bị",
    sol_modules: "Học phần & Chương trình",
    sol_output: "Chuẩn đầu ra",
    sol_partners: "Đối tác hãng sản xuất",
    sol_projects: "Dự án thực tế",
    sol_catalogue: "Tải Catalogue",
    sol_catalogue_desc: "Nhập email để nhận bộ Catalogue chi tiết về giải pháp và thiết bị (PDF, miễn phí).",
    sol_config: "Tư vấn cấu hình",
    sol_email_placeholder: "Email của bạn",

    // Product page
    prod_title: "Thiết bị & Sản phẩm đào tạo",
    prod_all: "Tất cả",
    prod_equipment: "Thiết bị",
    prod_software: "Phần mềm",
    prod_material: "Vật tư",
    prod_detail: "Xem chi tiết",
    prod_spec: "Thông số kỹ thuật",
    prod_application: "Ứng dụng",
    prod_download: "Tải Catalogue (PDF)",
    prod_quote_btn: "Yêu cầu báo giá sản phẩm này",

    // Course page
    course_title: "Chương trình đào tạo",
    course_target: "Đối tượng",
    course_duration: "Thời lượng",
    course_cert: "Chứng nhận",
    course_register: "Đăng ký tham gia",
    course_objectives: "Mục tiêu khóa học",
    course_curriculum: "Chương trình học",
    course_instructors: "Đội ngũ giảng viên",
    course_cert_section: "Chứng nhận đầu ra",

    // Project page
    proj_title: "Dự án tiêu biểu",
    proj_context: "Bối cảnh",
    proj_solution: "Giải pháp",
    proj_scope: "Phạm vi",
    proj_result: "Kết quả",
    proj_gallery: "Hình ảnh thực tế",
    proj_cta: "Dự án của bạn là tiếp theo?",
    proj_cta_btn: "Trò chuyện ngay",

    // Contact page
    contact_title: "Liên hệ với chúng tôi",
    contact_address_label: "Địa chỉ",
    contact_phone_label: "Điện thoại",
    contact_email_label: "Email",
    contact_hours_label: "Giờ làm việc",
    contact_form_title: "Gửi yêu cầu",
    contact_hero_desc: "Từ tư vấn thiết kế phòng lab đến báo giá thiết bị — đội ngũ chuyên gia TEST phản hồi trong vòng 2 giờ làm việc. Hãy để lại thông tin và chúng tôi sẽ chủ động liên hệ bạn.",

    // Additional page titles & descriptions (VN)
    solutions_hero_title: "Giải pháp Đào tạo Kỹ thuật Toàn diện",
    solutions_hero_desc: "TEST thiết kế và triển khai phòng lab thực hành chuẩn quốc tế cho 6 lĩnh vực mũi nhọn của công nghiệp Việt Nam — từ tư vấn nhu cầu, lựa chọn thiết bị, xây dựng chương trình đào tạo đến bảo hành hậu mãi.",
    catalogue_mecha_title: "📄 Tải Catalogue Phòng Lab Cơ điện tử",

    products_hero_badge: "Danh mục sản phẩm B2B",
    products_hero_title: "Thiết bị & Phần mềm Đào tạo Kỹ thuật",
    products_hero_desc: "Danh mục đầy đủ thiết bị đào tạo, phần mềm mô phỏng và vật tư thực hành chất lượng cao — được thiết kế chuyên biệt cho môi trường B2B giáo dục và doanh nghiệp kỹ thuật.",
    filter_all: "Tất cả",
    filter_equipment: "Thiết bị",
    filter_software: "Phần mềm",
    filter_materials: "Vật tư",
    filter_label: "Lọc:",
    prod1_name: "Bench Đào tạo PLC Siemens S7-1500",
    prod2_name: "Cánh tay Robot 6 bậc tự do FANUC",
    prod3_name: "Máy phay CNC 3 trục đào tạo DMG MORI",
    prod4_name: "Hệ thống đào tạo Xe điện (EV) toàn phần",
    prod5_name: "Phần mềm EDA Cadence Virtuoso (License Giáo dục)",
    prod6_name: "Phần mềm CAD/CAM Mastercam (Multi-Seat)",
    prod7_name: "Phần mềm VR/XR Phòng sạch Bán dẫn",
    prod8_name: "Bộ kit thực hành thiết kế & gia công PCB",
    prod9_name: "Gói vật tư thực hành Hàn MIG/MAG & TIG",

    courses_hero_badge: "Chương trình đào tạo chuyên sâu",
    courses_hero_title_1: "Khóa học Kỹ thuật",
    courses_hero_title_2: "Chuyên sâu &",
    courses_hero_title_3: "Chứng nhận Quốc tế",
    courses_hero_desc: "Các chương trình đào tạo thực hành chuyên sâu được thiết kế bởi chuyên gia kỹ thuật quốc tế — dành cho kỹ sư, kỹ thuật viên và giảng viên muốn cập nhật công nghệ mới nhất trong lĩnh vực bán dẫn, cơ điện tử, CNC, ô tô điện và hàn công nghiệp.",
    courses_grid_title: "Chương trình đào tạo",
    courses_grid_accent: "phục vụ toàn diện ngành kỹ thuật",
    course1_name: "Thiết kế vi mạch IC với Cadence Virtuoso — Từ Schematic đến GDSII",
    course2_name: "Lập trình PLC Siemens S7-1200/1500 & TIA Portal — Từ cơ bản đến SCADA",
    course3_name: "Lập trình CNC Tiện & Phay + CAD/CAM với Mastercam",
    course4_name: "Công nghệ Xe điện (EV) — Chẩn đoán, Bảo dưỡng & Hệ thống lưu trữ năng lượng",
    course5_name: "Hàn MIG/MAG, TIG & Hàn Robot — Kỹ thuật Hàn Công nghiệp tiêu chuẩn ISO",
    course6_name: "Train the Trainer — Đào tạo Giảng viên Kỹ thuật Chuyên sâu (Tất cả lĩnh vực)",

    projects_hero_desc: "Mỗi dự án là một minh chứng cho cam kết chất lượng, sự sáng tạo và chuyên môn sâu của đội ngũ TEST trong việc xây dựng hệ sinh thái đào tạo kỹ thuật đẳng cấp quốc tế.",
    projects_grid_title: "Danh sách dự án",
    faq_label: "Câu hỏi thường gặp",

    // Footer
    footer_desc: "Chuyên gia hàng đầu về thiết bị đào tạo kỹ thuật và giải pháp phòng lab thực hành tại Việt Nam.",
    footer_solutions: "Giải pháp",
    footer_products: "Sản phẩm",
    footer_about: "Công ty",
    footer_address: "Hà Nội, Việt Nam",
    footer_copyright: "© 2025 TEST Corporation. Tất cả quyền được bảo lưu.",
    footer_privacy: "Chính sách bảo mật",
    footer_terms: "Điều khoản sử dụng",
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_solutions: "Training Solutions",
    nav_sol_mechatronics: "Mechatronics",
    nav_sol_mechatronics_sub: "Industrial robots, PLC/SCADA",
    nav_sol_cnc: "CNC Machining",
    nav_sol_cnc_sub: "Turning, Milling, EDM, CAD/CAM",
    nav_sol_auto: "Automotive & EV",
    nav_sol_auto_sub: "Diagnostics, EV motors, Charging",
    nav_sol_semi: "Semiconductor & IC Design",
    nav_sol_semi_sub: "IC Design, Packaging, VR/XR Lab",
    nav_sol_weld: "Industrial Welding",
    nav_sol_weld_sub: "MIG/MAG, TIG, Robot welding",
    nav_sol_hvac: "HVAC & Refrigeration",
    nav_sol_hvac_sub: "AC systems, Industrial cooling",
    nav_products: "Products",
    nav_prod_equip: "Training Equipment",
    nav_prod_equip_sub: "Models, Benches, Panels",
    nav_prod_software: "Simulation Software",
    nav_prod_software_sub: "CAD/CAM/CAE, EDA, VR",
    nav_prod_materials: "Practical Materials",
    nav_prod_materials_sub: "Components, PCB, test samples",
    nav_courses: "Courses",
    nav_projects: "Projects",
    nav_partners: "Partners",
    nav_news: "News",
    nav_contact: "Contact",
    nav_search_placeholder: "Search solutions, products...",
    nav_search_hints: "Quick search:",
    nav_hint_semi: "Semiconductor",
    nav_hint_cnc: "CNC Equipment",
    nav_hint_lab: "Lab Design",
    nav_hint_train: "Train the Trainer",
    btn_consult: "Get Consultation",
    btn_quote: "Request a Quote",
    lang_vn: "VN",
    lang_en: "EN",

    // Hero
    hero_badge: "Vietnam's #1 Technical Training Equipment Expert",
    hero_title_1: "Build Your",
    hero_title_2: "World-Class",
    hero_title_3: "Technical Lab",
    hero_typewriter: ["Mechatronics", "Semiconductor & IC", "CNC & CAD/CAM", "Automotive & EV", "Industrial Automation"],
    hero_desc: "TEST provides end-to-end solutions from lab design consulting, training equipment supply to international-standard curriculum deployment for universities, colleges, and enterprises.",
    hero_cta_solutions: "Explore Solutions",
    hero_cta_consult: "Get Consultation",
    hero_stat_projects: "Projects",
    hero_stat_schools: "Institutions",
    hero_stat_years: "Years Experience",
    hero_stat_experts: "Experts",
    hero_float_lab: "Lab Setup",
    hero_float_lab_sub: "International Standards",
    hero_float_semi: "Semiconductor",
    hero_float_semi_sub: "VR/XR Cleanroom",
    hero_scroll: "Scroll down",

    // Pain points
    pain_label: "Problems We Solve",
    pain_title_1: "What problems does",
    pain_title_2: "TEST",
    pain_title_3: "solve for you?",
    pain_desc: "We understand the challenges educational institutions and enterprises face in building high-quality technical training capabilities.",
    field_mechatronics: "Mechatronics",
    field_mechatronics_desc: "Lack of hands-on models for industrial robots, PLC, and modern SCADA systems matching industry needs.",
    field_cnc: "CNC Machining",
    field_cnc_desc: "High cost of real CNC machines limits practice time; students need affordable, realistic simulation.",
    field_auto: "Automotive & EV",
    field_auto_desc: "Fast-changing EV technology means old facilities can't meet modern electric vehicle training demands.",
    field_semi: "Semiconductor & IC",
    field_semi_desc: "Cleanrooms and EDA tools are expensive; Vietnam faces a severe shortage of IC design talent.",
    field_weld: "Industrial Welding",
    field_weld_desc: "Robot and automated welding are increasingly in demand but quality training equipment remains scarce.",
    field_hvac: "HVAC & Refrigeration",
    field_hvac_desc: "Lack of industrial refrigeration and commercial AC training models aligned with real production environments.",
    field_cta: "View Solution",

    // Trust / USP
    trust_label: "Why Choose TEST?",
    trust_title: "The difference that creates",
    trust_title_accent: "outstanding credibility",
    usp_projects_num: "200+",
    usp_projects_label: "Lab Projects",
    usp_projects_sub: "Successfully deployed",
    usp_schools_num: "80+",
    usp_schools_label: "Schools & Enterprises",
    usp_schools_sub: "Trusted partners",
    usp_years_num: "15+",
    usp_years_label: "Years of Experience",
    usp_years_sub: "In technical training",
    usp_experts_num: "50+",
    usp_experts_label: "Technical Experts",
    usp_experts_sub: "International experience",
    projects_label: "Featured Projects",
    projects_title: "Our signature",
    projects_title_accent: "lab projects",
    courses_label: "Featured Courses",
    courses_title: "In-depth & practical",
    courses_title_accent: "training programs",
    partners_label: "Partners & Manufacturers",
    partners_title: "Our global",
    partners_title_accent: "partner ecosystem",
    btn_all_projects: "View all projects",
    btn_all_courses: "View all courses",

    // Sticky / CTA popup
    popup_consult_title: "Request Consultation",
    popup_quote_title: "Request a Quote",
    form_name: "Full name",
    form_name_placeholder: "John Smith",
    form_phone: "Phone number",
    form_phone_placeholder: "+84 912 345 678",
    form_email: "Company email",
    form_email_placeholder: "you@institution.edu.vn",
    form_org: "Institution / Company",
    form_org_placeholder: "Hanoi University of Science...",
    form_need: "Specific requirements",
    form_need_placeholder: "Describe your needs...",
    form_product: "Product of interest",
    form_submit_consult: "Submit Consultation Request",
    form_submit_quote: "Submit Quote Request",
    form_privacy: "Your information is fully protected under our privacy policy.",
    form_success: "Thank you! We will contact you within 24 hours.",
    captcha_label: "I'm not a robot",

    // Solution page
    sol_need_title: "Industry Needs",
    sol_lab_model: "Lab Model",
    sol_devices: "Equipment Categories",
    sol_modules: "Modules & Curriculum",
    sol_output: "Learning Outcomes",
    sol_partners: "Manufacturer Partners",
    sol_projects: "Real Projects",
    sol_catalogue: "Download Catalogue",
    sol_catalogue_desc: "Enter your email to receive a detailed Catalogue on solutions and equipment (PDF, free).",
    sol_config: "Configuration Consulting",
    sol_email_placeholder: "Your email address",

    // Product page
    prod_title: "Training Equipment & Products",
    prod_all: "All",
    prod_equipment: "Equipment",
    prod_software: "Software",
    prod_material: "Materials",
    prod_detail: "View details",
    prod_spec: "Technical Specifications",
    prod_application: "Applications",
    prod_download: "Download Catalogue (PDF)",
    prod_quote_btn: "Request quote for this product",

    // Course page
    course_title: "Training Programs",
    course_target: "Target Audience",
    course_duration: "Duration",
    course_cert: "Certification",
    course_register: "Register Now",
    course_objectives: "Course Objectives",
    course_curriculum: "Curriculum",
    course_instructors: "Instructors",
    course_cert_section: "Certification",

    // Project page
    proj_title: "Featured Projects",
    proj_context: "Context",
    proj_solution: "Solution",
    proj_scope: "Scope",
    proj_result: "Results",
    proj_gallery: "Project Gallery",
    proj_cta: "Is your project next?",
    proj_cta_btn: "Let's talk now",

    // Contact page
    contact_title: "Contact Us",
    contact_address_label: "Address",
    contact_phone_label: "Phone",
    contact_email_label: "Email",
    contact_hours_label: "Business Hours",
    contact_form_title: "Send a Request",
    contact_hero_desc: "From lab design consulting to equipment quotes — TEST's expert team responds within 2 business hours. Leave your details and we will contact you.",

    // Additional page titles & descriptions (EN)
    solutions_hero_title: "Comprehensive Technical Training Solutions",
    solutions_hero_desc: "TEST designs and implements international-standard practical labs for 6 key industrial sectors in Vietnam - from needs consulting and equipment selection to curriculum development and post-sales support.",
    catalogue_mecha_title: "📄 Download Mechatronics Lab Catalogue",

    products_hero_badge: "B2B Product Catalogue",
    products_hero_title: "Technical Training Equipment & Software",
    products_hero_desc: "Complete catalogue of high-quality training equipment, simulation software, and practical materials — custom-designed for educational B2B and technical enterprise environments.",
    filter_all: "All",
    filter_equipment: "Equipment",
    filter_software: "Software",
    filter_materials: "Materials",
    filter_label: "Filter:",
    prod1_name: "Siemens S7-1500 PLC Training Bench",
    prod2_name: "FANUC 6-Axis Robotic Arm",
    prod3_name: "DMG MORI 3-Axis Training CNC Mill",
    prod4_name: "Full Electric Vehicle (EV) Training System",
    prod5_name: "Cadence Virtuoso EDA Software (Academic License)",
    prod6_name: "Mastercam CAD/CAM Software (Multi-Seat)",
    prod7_name: "Semiconductor Cleanroom VR/XR Software",
    prod8_name: "PCB Design & Machining Practical Kit",
    prod9_name: "MIG/MAG & TIG Welding Practical Materials Pack",

    courses_hero_badge: "In-Depth Training Programs",
    courses_hero_title_1: "Technical Courses",
    courses_hero_title_2: "In-Depth &",
    courses_hero_title_3: "International Certification",
    courses_hero_desc: "Practical, in-depth training programs designed by international technical experts — for engineers, technicians, and educators seeking to update their skills with the latest technologies in semiconductor, mechatronics, CNC, electric vehicles, and industrial welding.",
    courses_grid_title: "Training Programs",
    courses_grid_accent: "serving all engineering fields",
    course1_name: "IC Design with Cadence Virtuoso — From Schematic to GDSII",
    course2_name: "Siemens S7-1200/1500 PLC & TIA Portal Programming — Basic to SCADA",
    course3_name: "CNC Turning & Milling Programming + CAD/CAM with Mastercam",
    course4_name: "EV Technology — Diagnostics, Maintenance & Energy Storage Systems",
    course5_name: "MIG/MAG, TIG & Robot Welding — Industrial Welding conforming to ISO standards",
    course6_name: "Train the Trainer — Advanced Technical Instructor Training (All Areas)",

    projects_hero_desc: "Each project is a testament to TEST's commitment to quality, innovation, and expertise in building world-class technical training ecosystems.",
    projects_grid_title: "Project List",
    faq_label: "Frequently Asked Questions",

    // Footer
    footer_desc: "Vietnam's leading expert in technical training equipment and hands-on lab solutions.",
    footer_solutions: "Solutions",
    footer_products: "Products",
    footer_about: "Company",
    footer_address: "Hanoi, Vietnam",
    footer_copyright: "© 2025 TEST Corporation. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
  }
};

// ── i18n Engine ──
const i18n = {
  current: 'vn',

  init() {
    const saved = localStorage.getItem('test-lang') || 'vn';
    this.setLang(saved, false);
  },

  setLang(lang, animate = true) {
    this.current = lang;
    localStorage.setItem('test-lang', lang);
    this.updateDOM(animate);
    this.updateLangButtons(lang);
    document.documentElement.lang = lang === 'vn' ? 'vi' : 'en';
  },

  t(key) {
    return i18nData[this.current][key] || i18nData['vn'][key] || key;
  },

  updateDOM(animate) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val !== undefined) {
        if (animate) {
          el.style.transition = 'opacity 0.2s ease';
          el.style.opacity = '0';
          setTimeout(() => {
            el.textContent = val;
            el.style.opacity = '1';
          }, 180);
        } else {
          el.textContent = val;
        }
      }
    });

    // Placeholders
    const phEls = document.querySelectorAll('[data-i18n-ph]');
    phEls.forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      el.placeholder = this.t(key);
    });

    // Update typewriter phrases if active
    if (window.typewriter) window.typewriter.updatePhrases(this.t('hero_typewriter'));
  },

  updateLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  },

  toggle() {
    this.setLang(this.current === 'vn' ? 'en' : 'vn');
  }
};

// Export global
window.i18n = i18n;
