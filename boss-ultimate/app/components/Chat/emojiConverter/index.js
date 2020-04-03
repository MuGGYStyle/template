import JSEMOJI from 'emoji-js';

function emojiConverter() {
  const jsEmoji = new JSEMOJI();
  jsEmoji.supports_css = false;
  jsEmoji.allow_native = false;
  jsEmoji.replace_mode = 'unified';
  jsEmoji.img_set = 'emojione';

  return jsEmoji;
}

export default emojiConverter;
