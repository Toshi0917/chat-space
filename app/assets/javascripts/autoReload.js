$(function(){
  function buildHTML(message){
    if (message.image) {
      let html =
      `<div class="message-area" data-message-id=${message.id}>
        <div class="message-area__user-status">
          <div class="message-area__user-status__name">
            ${message.user_name}
          </div>
          <div class="message-area__user-status__timestamp">
            ${message.created_at}
          </div>
        </div>
        <div class="message-area__message">
          <p class="message-area__message__body">
            ${message.body}
          </p>
            <img class="message-area__message__image" src=${message.image}>
        </div>
      </div>`
    return html;
    } else {
      let html =
      `<div class="message-area" data-message-id=${message.id}>
          <div class="message-area__user-status">
            <div class="message-area__user-status__name">
              ${message.user_name}
            </div>
            <div class="message-area__user-status__timestamp">
              ${message.created_at}
            </div>
          </div>
          <div class="message-area__message">
            <p class="message-area__message__body">
              ${message.body}
            </p>
          </div>
        </div>`
    return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.message-area:last').data("id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.message-field').append(insertHTML);
        $('.message-field').animate({ scrollTop: $('.message-field')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});