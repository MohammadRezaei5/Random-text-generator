let quotesp = document.getElementById("quotes");
let author = document.getElementById("author");
const generateBtn = document.getElementById("generate");
// console.log(generateBtn);

const generateQuote = function () {
  const quotes = [
    {
      quote:
        "آدم های موفق به اعتبار رویاها و اهدافشان باور دارند ، حتی اگر رویاها همه ی زندگیشون رو تحت تاثیر قرار بده.",
      author: "دنیس ویتلی",
    },
    {
      quote:
        "موفقیت رو به اصطلاح خودتون تعریف کنید ، آن را با قوانین خود بدست آورید و زندگی ای بسازید که به زندگی کردنش افتخار کنید",
      author: "آنه سویینی",
    },
    {
      quote:
        "استعداد ارزان تر از نمک سفره است، چیزی که با استعداد ها را از ناموفق ها جدا میکند کارهای سخت بسیار زیاد است.",
      author: "استیون کینگ",
    },
    {
      quote:
        "حتی افرادی که فکر میکنند سرنوشت انسان از قبل تعیین شده است، موقع رد شدن از خیابان دو طرف آن را نگاه می کنند.",
      author: "استیو هاوکینگ",
    },
    {
      quote:
        "همه راز زندگی موفق ،یافتن سرنوشت هرکاری و انجام دادن اون کار هست.",
      author: "هنری فورد",
    },
    {
      quote:
        "برای موفق بودن باید خودخواه باشیددر غیر اینصورت چیزی کسب نمیکنید، ولی وقتی به اوج خود می رسید ، اونوقت باید متواضع باشید.",
      author: "مایکل جردن",
    },
    {
      quote:
        "مردم موفق، روی پاداش موفقیت تمرکز میکنند; از اشتباهشان یاد می گیرند و برروی پیشرفت خود و جایگاهشان فکر میکنند.",
      author: "جان سی مکسول",
    },
    {
      quote: "شجاعت، مقابله با ترس و سلطه بر آن است نه فقدانِ ترس.",
      author: "مارک تواین",
    },
    {
      quote: "حضور داشتن در جامعه (به جای خانه ماندن) هشتاد درصد موفقیت است.",
      author: "وودی آلن",
    },
  ];

  //  console.log(quotes[3].quote);
  //  console.log(quotes[3].author);

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  // console.log(arrayIndex);

  quotesp.innerHTML = quotes[arrayIndex].quote;
  author.innerHTML = quotes[arrayIndex].author;
};

generateBtn.addEventListener("click", generateQuote);

window.onload = function () {
  generateQuote();
};
