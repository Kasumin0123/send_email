// ボタン要素をquerySelectorを使用して取得
const sendEmailButton = document.querySelector('#send-email')

// クリックイベントリスナーを登録
sendEmailButton.addEventListener('click', function () {
  const recipient = 'fognoise7@gmail.com'
  const subject = 'キャップ申請'
  const body = '※このままお送りください。'

  // mailtoリンクを作成
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

  // 新しいウィンドウまたはタブでmailtoリンクを開く
  window.location.href = mailtoLink
})
