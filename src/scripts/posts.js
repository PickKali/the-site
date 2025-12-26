
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
