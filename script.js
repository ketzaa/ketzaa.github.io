// 1. ทิ้งข้อความลับไว้ใน Developer Console (กด F12 ในเบราว์เซอร์เพื่อดู)
console.log("🚀 ยินดีต้อนรับสู่ Portfolio ของฉัน!");
console.log("👨‍💻 ถ้าคุณเปิด Console ดู แสดงว่าคุณต้องเป็นสายโค้ดดิ้งเหมือนกันแน่เลย!");

// 2. ฟังก์ชันเปลี่ยนคำทักทายตามช่วงเวลาของเครื่องผู้ใช้งาน
window.onload = function() {
    // หาตำแหน่งของแท็ก <p> ที่อยู่ใน <header>
    const headerDescription = document.querySelector('header p');
    
    // ดึงเวลาปัจจุบัน (ชั่วโมง)
    const currentHour = new Date().getHours();
    let greetingText = "ยินดีต้อนรับสู่พื้นที่แบ่งปันโค้ดและผลงานของฉัน";

    // เช็คช่วงเวลาและเพิ่มไอคอน/คำทักทาย
    if (currentHour < 12) {
        greetingText = "สวัสดีตอนเช้า! ☀️ " + greetingText;
    } else if (currentHour < 18) {
        greetingText = "สวัสดีตอนบ่าย! 🌤️ " + greetingText;
    } else {
        greetingText = "สวัสดีตอนค่ำ! 🌙 " + greetingText;
    }

    // แทนที่ข้อความเดิมด้วยข้อความใหม่
    headerDescription.innerText = greetingText;
};

// 3. เพิ่มลูกเล่นให้ปุ่มกด (แสดงการแจ้งเตือนเล็กน้อยก่อนไป GitHub)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log("กำลังเปิดลิงก์ผลงาน...");
    });
});<footer>
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
        <p>ติดต่อ: <a href="mailto:your.email@example.com">your.email@example.com</a> | <a href="https://github.com/yourusername">GitHub Profile</a></p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
