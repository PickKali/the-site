const quotetable = [
  { quote: "i'm now known as a defenestration girl", date: "1 March 2021" },
  { quote: "i'm so glad that this is a feature", date: "28 June 2022" },
  { quote: "proud to say that i'm a yuki main", date: "29 June 2021" },
  {
    quote: "y'all forgot that i'm actually a clown car?",
    date: "20 June 2021",
  },
  {
    quote: "dissociative amnesia gets to me but i'm still alive",
    date: "4 October 2020",
  },
  {
    quote:
      "yay starting another game project that im unsure if i'm going to complete",
    date: "9 February 2021",
  },
  {
    quote: "i'm actually pretty happy about this floor",
    date: "19 July 2021",
  },
  {
    quote: "i'm still adamant about hatweight existing",
    date: "25 April 2024",
  },
  {
    quote: "fixated so hard that i'm now top 10k in minesweeper",
    date: "24 March 2024",
  },
  {
    quote: "idk what i'm doing and nobody else does either",
    date: "21 February 2021",
  },
  {
    quote: "im like 1/3rd of the way complete and i'm improvising as I go",
    date: "17 February 2021",
  },
  {
    quote:
      "this is why i'm majoring in frontend development; i can't forgive myself for letting this happen",
    date: "28 September 2023",
  },
  {
    quote:
      "i know that i'm a runner at my core; i don't know what i Speed Run 4",
    date: "28 March 2024",
  },
  { quote: "i'm on my 28th watermelon", date: "27 April 2020" },
  {
    quote: "i wouldn't be surprised if you don't know who i am",
    date: "1 September 2024",
  },
  { quote: "I am the definition of skill issue", date: "24 January 2024" },
  {
    quote: "unfortunately i am neither a guy or from an anime",
    date: "29 March 2021",
  },
  { quote: "why am i having fun programming", date: "23 February 2024" },
  { quote: "clearly, I am underleveled.", date: "26 November 2021" },
  {
    quote: "I wanna do devex but I am too lazy to do the tax forms",
    date: "4 February 2023",
  },
  {
    quote:
      "im just an incredibly neurodivergent person that has nothing better to do",
    date: "13 June 2024",
  },
  {
    quote:
      "idk if im a lexographer... lexicographer... see i can't even spell it",
    date: "2 February 2024",
  },
  {
    quote:
      "i'm totally down to have a cooking animation where every grain of rice is individually animated",
    date: "1 November 2024",
  },
  {
    quote: "i'm parbroiled and sous vide 🔥 🔥 🚰",
    date: "5 May 2025",
  },
  {
    quote: "i have a funky progression",
    date: "9 March 2023",
  },
  {
    quote:
      "i find it funny when developers don't know details of their own game",
    date: "28 February 2023",
  },
  { quote: "i think its april fools 2023", date: "22 January 2023" },
  { quote: "it seems i glitched through the wrong wall", date: "21 July 2021" },
  {
    quote: "scrapping it as i do with every insane idea i get",
    date: "19 November 2023",
  },
  {
    quote:
      "doing my development style where i unhinge my mind and make whatever i feel like making",
    date: "4 September 2024",
  },
];
let assigned = quotetable[Math.floor(Math.random() * quotetable.length)];
$("#randomquote").html(
  '"' + assigned.quote + '"<br/><br/>Kali on ' + assigned.date,
);
//Newlines don't work in blockquotes!

$(function () {
  const posts = window.__POSTS__;

  function renderPosts() {
    const sort = $("#sortSelect").val();
    const selectedTags = $(".tag-checkbox:checked")
      .map(function () {
        return $(this).val();
      })
      .get();

    let filtered = posts;

    if (selectedTags.length > 0) {
      filtered = filtered.filter((p) =>
        p.tags.some((tag) => selectedTags.includes(tag)),
      );
      $("#tagsummary").html(selectedTags.length + " tag(s) selected");
    } else {
      $("#tagsummary").html("Select Tags (Inclusive)");
    }

    filtered.sort((a, b) => {
      if (sort === "Added Date (Descending)")
        return new Date(b.addedDate) - new Date(a.addedDate);
      if (sort === "Added Date (Ascending)")
        return new Date(a.addedDate) - new Date(b.addedDate);
      if (sort === "Based On Date (Descending)")
        return new Date(b.relevantDate) - new Date(a.relevantDate);
      if (sort === "Based On Date (Ascending)")
        return new Date(a.relevantDate) - new Date(b.relevantDate);
      return 0;
    });
    $("#sortsummary").html(sort);

    $("#postlist").html(
      filtered
        .map((p) => {
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Los_Angeles",
            dateStyle: "long",
          });
          const rdate = new Date(p.relevantDate);
          const adate = new Date(p.addedDate);

          return `<article>
            <a href="${p.url}">${p.title}</a>
            <br>
            <small>
              Based On: ${formatter.format(rdate)}<br>
              Added: ${formatter.format(adate)}
            </small>
          </article>`;
        })
        .join(""),
    );
  }

  renderPosts();

  $("#sortselect").on("change", renderPosts);
  $(".tag-checkbox").on("change", renderPosts);
});
