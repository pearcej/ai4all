var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "repository-and-license",
  "level": "1",
  "url": "repository-and-license.html",
  "type": "Colophon",
  "number": "",
  "title": "Repository and License",
  "body": " Repository and License   "
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Preface",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  I would like to thank Berea College for the support for student internships and for the Berea College student interns, Elijah Babayemi, Colin Flaherty, Austin Gatewood, and Tristan Razote, who served as the first editors of this work and who helped to make this version more interactive. You can see their contibutions as well as those of others at github.com\/pearcej\/ai4all\/forks .  I would like to thank Rob Beezer for the creation of PreTeXt which is the authoring platform of this text and for his amazing level of responsiveness in the PreTeXt support channel. Additionally, I am very grateful to Oscar Levin both for his responsiveness in the Runestone Discord channels and for work in the creation of PreText converter for Pandoc which made adaption much less time consuming.  Brad Miller deserves a hearty thanks for his work in creating Runestone Academy where this book is hosted, and for his collaborative work with the PreTeXt authoring group.  Finally, I would like to thank my husband, Bob Fairchild, for his patience and for being my best friend.  "
},
{
  "id": "pretext-acknowledgement",
  "level": "1",
  "url": "pretext-acknowledgement.html",
  "type": "Preface",
  "number": "",
  "title": "PreTeXt Acknowledgement",
  "body": " PreTeXt Acknowledgement   This book was authored in PreTeXt .   "
},
{
  "id": "pretext-acknowledgement-2",
  "level": "2",
  "url": "pretext-acknowledgement.html#pretext-acknowledgement-2",
  "type": "Note",
  "number": "0.0.1",
  "title": "",
  "body": " This book was authored in PreTeXt .  "
},
{
  "id": "sec-what-is-ai-change-this",
  "level": "1",
  "url": "sec-what-is-ai-change-this.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is AI?",
  "body": " What is AI?  Content for the section.  "
},
{
  "id": "sec-ai-in-education-change-this",
  "level": "1",
  "url": "sec-ai-in-education-change-this.html",
  "type": "Section",
  "number": "2.1",
  "title": "AI in Education",
  "body": " AI in Education  Content for the section.  "
},
{
  "id": "sec-using-search-change-this",
  "level": "1",
  "url": "sec-using-search-change-this.html",
  "type": "Section",
  "number": "3.1",
  "title": "Solving Problems Using Search",
  "body": " Solving Problems Using Search  Content for the section.  "
},
{
  "id": "sec-statistics-needed-by-ai-change-this",
  "level": "1",
  "url": "sec-statistics-needed-by-ai-change-this.html",
  "type": "Section",
  "number": "4.1",
  "title": "Statistics Needed by AI",
  "body": " Statistics Needed by AI  Content for the section.  "
},
{
  "id": "sec-machine-learning-change-this",
  "level": "1",
  "url": "sec-machine-learning-change-this.html",
  "type": "Section",
  "number": "5.1",
  "title": "Machine Learning",
  "body": " Machine Learning  Content for the section.  "
},
{
  "id": "sec-what-is-ai-section-change-this",
  "level": "1",
  "url": "sec-what-is-ai-section-change-this.html",
  "type": "Section",
  "number": "6.1",
  "title": "What is AI and How has it Changed?",
  "body": " What is AI and How has it Changed?  Content for the section.  "
},
{
  "id": "sec-the-future-of-ai-change-this",
  "level": "1",
  "url": "sec-the-future-of-ai-change-this.html",
  "type": "Section",
  "number": "7.1",
  "title": "The Future of AI",
  "body": " The Future of AI  Content for the section.  "
},
{
  "id": "ai4all-10",
  "level": "1",
  "url": "ai4all-10.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
