const notificationBtn = document.querySelector(".trigger");
const notificationContainer = document.querySelector(".notification-container");

notificationBtn.addEventListener("click", () => {
  notificationContainer.innerHTML += `
    <div class="notification">
    <div class="notification-box">
        <div class="notification-header">
            <h3>Push Notifications</h3>
        </div>
        <div class="notification-body">
            <p>Obcaecati possimus sunt assumenda amet</p>
        </div>
    </div>
    <div class="close-btn"><i class="fas fa-times"></i></div>
</div>
    `;
  notificationContainer.classList.add("active");

  setTimeout(() => {
    const closeBtn = document.querySelector(".close-btn");
    const notifications = document.querySelectorAll(".notification");
    notifications.forEach((notification) => {
      notification.addEventListener("click", () => {
        notification.classList.add("hide");
        setTimeout(() => {
          notification.remove();
        }, 800);
      });
    });
  }, 0);
});
