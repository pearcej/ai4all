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
  "id": "sec-how-this-book-was-created",
  "level": "1",
  "url": "sec-how-this-book-was-created.html",
  "type": "Preface",
  "number": "",
  "title": "How This Book Was Created",
  "body": " How This Book Was Created   AI for All is the result of a collaborative effort involving faculty, students, and AI. The editor, Jan Pearce, developed the overall vision for the textbook, established the learning objectives, organized the material, and provided both technical and editorial review. Student contributors researched topics, wrote draft sections, developed examples, identified resources, and reviewed the material throughout the writing process. During the development of this edition, the authors also used OpenAI's ChatGPT , based primarily on the GPT-5.5 model, as an editorial and creative assistant.  ChatGPT assisted with a variety of tasks, including reviewing drafts for clarity and consistency, suggesting improvements to organization and pedagogy, identifying opportunities for additional explanation, proposing examples and exercises, generating original illustrations and diagrams, and helping maintain a consistent voice across chapters. AI systems occasionally produce incorrect or misleading information. For this reason, all AI-generated content was treated as a draft requiring human review rather than as an authoritative source. The faculty editor remains responsible for the accuracy, quality, and educational value of all content.  The collaborative process used to create this textbook reflects one of its central themes: artificial intelligence is most effective when it complements human knowledge, creativity, and judgment. Throughout this project, faculty, students, and AI each contributed different strengths. We hope this textbook not only teaches the principles of artificial intelligence but also demonstrates how AI can be used thoughtfully, responsibly, and transparently in scholarship and education.  Unless otherwise noted, all original text, illustrations, and other materials in this textbook are distributed under the same Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) License as the textbook itself.  "
},
{
  "id": "acknowledgements",
  "level": "1",
  "url": "acknowledgements.html",
  "type": "Preface",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  This material is based upon work supported by the National Science Foundation under Grant Number 2434184, Collaborative Research: EducateAI: CUE-T: Designing Artificial Intelligence Curricula for All Undergrads . Any opinions, findings, and conclusions or recommendations expressed in this material are those of the editor, authors, and contributors and do not necessarily reflect the views of the National Science Foundation.  I would like to thank Berea College for its support for student internships and for the Berea College students:    Magnus McCaslin (Team Lead)  Hope Michael  Din Din Par  Aaron Whitaker    You can see their contributions as well as those of others at github.com\/pearcej\/ai4all\/forks .  For use in the Berea College Internship Program gratefully acknowledges the U.S. Department of Justice, Office of Justice Programs, National Institute of Justice, for allowing us to reproduce, in part or in whole, the article, A Brief History of Artificial Intelligence. The opinions, findings, and conclusions or recommendations expressed in this book are those of the author(s) and do not necessarily represent the official position or policies of the U.S. Department of Justice.  was also was informed by Introduction to Artificial Intelligence , authored by Microsoft and the World Travel & Tourism Council (WTTC). The original publication includes a copyright notice that permits redistribution under specified conditions but requires that the content not be amended. Accordingly, this textbook uses the publication as a reference for background information and organization rather than adapting or modifying its copyrighted text. The original work therefore remains under its own licensing terms, while the original text for this textbook is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  was developed using several openly licensed educational resources. Portions of this section were adapted from chapters Understanding Artificial Intelligence and Social Implications of AI in The Future is Now: Empowering Society Through AI Literacy , by Jason S. Wrench and Sanae Elmoudden, published by Milne Open Textbooks, and from A People's Guide to AI , by Mimi Onuoha and Diana Nucera. The Turing Test subsection was largely abridged from The Turing Test by Diane Proudfoot, published in the Open Encyclopedia of Cognitive Science (MIT Press, 2024). A People's Guide to AI , and The Future is Now: Empowering Society Through AI Literacy are licensed under the Creative Commons Attribution–NonCommercial–ShareAlike 4.0 International (CC BY-NC-SA 4.0) license while The Turing Test is distributed under a Creative Commons Attribution 4.0 International (CC BY 4.0) license, all of which permit adaptation with attribution. The material incorporated into this textbook has been revised, reorganized, and expanded to fit its learning objectives, terminology, and style. The original sources remain under their respective licenses, while the original text written for this textbook is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  was developed using several openly licensed educational resources. Portions of , , , and were adapted from the Student Guide to Artificial Intelligence , published by Elon University in partnership with the AAC&U (CC BY-NC-SA 4.0). Additional material in draws upon Faster Completion, Less Learning by Sina Rismanchian and Hasan Uzun and Thinking Less, Trusting More by Rudrajit Choudhuri et al. (both CC BY 4.0). was informed by cognitive science research, including works by Soderstrom & Bjork, Dunlosky et al., and open-access review literature (CC BY 4.0). also incorporates How AI Can Help You by Colin de la Higuera and Jotsna Iyer (CC BY 4.0). includes content from Prompt Engineering Survey by Tong Xiao and Jingbo Zhu (CC BY-NC 4.0) and Prompting Guide by Elvis Saravia \/ DAIR.AI (MIT License). Finally, draws from AI Literacy by Kainan Jarrette and Diana Daly (CC BY-NC-SA 4.0) and AI Hallucination from Students’ Perspective by Abdulhadi Shoufan and Ahmad-Azmi-Abdelhamid Esmaeil (CC BY 4.0). All underlying works permit adaptation with attribution. The material incorporated into this chapter has been revised, reorganized, and expanded to fit its learning objectives, terminology, and style. Original sources remain under their respective licenses, while new text is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  was developed using several openly licensed educational resources. Material for was adapted from CC 315 - Data Structures & Algorithms II , published by Kansas State University (CC BY-NC-SA 4.0), and MIT OpenCourseWare's Artificial Intelligence (CC BY-NC-SA 4.0), with generated using FigureLabs and additional images sourced from CC 315 - Data Structures & Algorithms II. Content for uses snippets from State-Space Search in AI: A Complete Guide published by Economics Town and draws from MIT OpenCourseWare’s Artificial Intelligence (CC BY-NC-SA 4.0), with section diagrams generated using ChatGPT. , , and draw upon foundational concepts from Machine Learning Systems , by Vijay Janapa Reddi (CC BY-NC-SA 4.0); MIT Data-Centric AI Course Materials (CC BY-NC-SA 4.0); AI for Teachers: an Open Textbook , by Colin de la Higuera and Jotsna Iyer (CC BY 4.0); and NeuroAI Course (CC BY 4.0). All underlying works permit adaptation with attribution. The material incorporated into these sections has been revised, reorganized, and expanded to fit the learning objectives, terminology, and style of this textbook. Original sources remain under their respective licenses, while new text is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  was developed using several openly licensed educational resources. was developed using Data and Datasets , authored by Dr. Shaun V. Ault, Dr. Soohyun Nam Liao, and Larry Musolino, published by OpenStax (CC BY 4.0). Both and were adapted from Online Statistics Education: A Multimedia Course of Study , led by David M. Lane (Public Domain). Finally, was modified from A Framework for Understanding Sources of Harm throughout the Machine Learning Life Cycle , by Harini Suresh and John Guttag (CC BY-NC 4.0), with additional material adapted from On Splitting Training and Validation Set , by Yun Xu and Royston Goodacre, published in the Journal of Analysis and Testing (CC BY 4.0). All underlying works permit adaptation with attribution. The material incorporated into this chapter has been revised, reorganized, and expanded to fit its learning objectives, terminology, and style. The original sources remain under their respective licenses, while the original text written for this textbook is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  was developed using several openly licensed educational resources. draws upon Deep Neural Networks , by Colin de la Higuera and Jotsna Iyer (CC BY 4.0), alongside Python Machine Learning Projects , by Lisa Tagliaferri, Michelle Morales, Ellie Birbeck, and Alvin Wan, and Chapter 4: Learning Introduction , by MIT OpenCourseWare (both CC BY-NC-SA 4.0). Both and were adapted from Python Machine Learning Projects , MIT OpenCourseWare’s Chapter 4: Learning Introduction , and The Little Book of Deep Learning , by François Fleuret (all CC BY-NC-SA 4.0). incorporates material from MIT OpenCourseWare’s Chapter 4: Learning Introduction and Fleuret’s The Little Book of Deep Learning (both CC BY-NC-SA 4.0). Finally, was adapted from MIT OpenCourseWare’s Chapter 4: Learning Introduction (CC BY-NC-SA 4.0) and Artificial Intelligence and Librarianship , by Martin Frické (CC BY 4.0). All underlying works permit adaptation with attribution. The material incorporated into this chapter has been revised, reorganized, and expanded to fit its learning objectives, terminology, and style. The original sources remain under their respective licenses, while the original text written for this textbook is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  was developed using several openly licensed educational resources. , , and were adapted from Neural Networks and Deep Learning , by Michael A. Nielsen (CC BY-NC 3.0), with images of handwritten digits sourced from Nielsen's work, the sigmoid curve generated via ChatGPT, and additional section images generated via Google Gemini. incorporates material from Nielsen's Neural Networks and Deep Learning (CC BY-NC 3.0) and Convolutional Neural Networks Chapter Notes , by MIT OpenCourseWare (CC BY-NC-SA 4.0), alongside images generated via Google Gemini. Finally, was adapted from An Introduction to Neural Networks and Deep Learning , by Tong Xiao and Jingbo Zhu (CC BY-NC 4.0). All underlying works permit adaptation with attribution for noncommercial purposes. The material incorporated into this chapter has been revised, reorganized, and expanded to fit its learning objectives, terminology, and style. The original sources remain under their respective licenses, while the original text written for this textbook is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  was developed using several openly licensed resources. and were both adapted from Understanding Potential Sources of Harm throughout the Machine Learning Life Cycle , by Harini Suresh and John Guttag (CC BY 4.0), and A People's Guide to AI , by Mimi Onuoha and Diana Nucera (CC BY-NC-SA 4.0), with also drawing from Algorithmic Redistricting and Black Representation in US Elections , by Zachary Schutzman (CC BY 4.0). was adapted from E-waste Challenges of Generative Artificial Intelligence , by Peng Wang and Ling-Yu Zhang (CC BY 4.0); The Water Footprint of Data Centers , by Md Abu Bakar Siddik, Arman Shehabi, and Landon Marston (CC BY 4.0); The Environmental Cost of Generative AI , by Cooper Elsworth and Keguo Huang (CC BY 4.0); The Environmental Impact of Data Centres , by David Mytton (CC BY 4.0); and Energy and AI , published by the International Energy Agency (IEA) (CC BY 4.0). was adapted from AI Literacy in Decoding Deception , by Kainan Jarrette and Diana Daly (CC BY-NC-SA 4.0), and Deep Fakes: A Looming Challenge for Privacy, Democracy, and National Security , by Robert Chesney and Danielle K. Citron (CC BY-NC-SA 4.0). was adapted from AI for Teachers: An Open Textbook , by Colin de la Higuera and Jotsna Iyer (CC BY 4.0), and Artificial Intelligence and Librarianship: Notes for Teaching , by Martin Frické (CC BY 4.0). was adapted from Social Implications of AI in The Future is Now: Empowering Society Through AI Literacy , by Jason S. Wrench and Sanae Elmoudden (CC BY-NC-SA 4.0); Is it true that robots and AI will take away people's jobs? in Better Together: How to Create a More Just and Equitable World Through Artificial Intelligence , by Fazil Acar (CC BY-NC-SA 4.0); and Automation, AI & Work , by Laura D. Tyson and John Zysman (CC BY-NC 4.0). All underlying works permit adaptation with attribution. The material incorporated into this chapter has been revised, reorganized, and expanded to fit its learning objectives, terminology, and style. The original sources remain under their respective licenses, while the original text written for this textbook is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  , , , , and were developed by adapting and synthesizing content from several openly licensed sources. These sections were adapted from AI Myths and Misunderstandings by Vassilis Galanos, SJ Bennett, Ruth Aylett, and Drew Hemment, published in The New Real ; AI Literacy by Kainan Jarrette and Diana Daly; Social Implications of AI by Jason S. Wrench and Sanae Elmoudden, published in The Future is Now: Empowering Society Through AI Literacy ; Deconstructing AI Myths: A Comprehensive Exploration of Misconceptions and Realities in Artificial Intelligence by Louie Giray, published in Higher Learning Research Communications ; A Critical Examination of Machine Learning Myths and Misconceptions: An Exploratory Study by Sidharta Chatterjee; AI Myths Debunked: A Guide to Understanding Artificial Intelligence by Sunish Vengathattil; The Myth of the AI Apocalypse by Constance de Saint Laurent; Artificial Intelligence: A Clarification of Misconceptions by Frank Emmert-Streib, Olli Yli-Harja, and Matthias Dehmer; Myths and Misconceptions About Artificial Intelligence: A Review by Arne Bewersdorff, Xiaoming Zhai, Jessica Roberts, and Claudia Nerdel; A Comprehensive Review of AI Myths and Misconceptions by Frank Nussbaum; and \"It's Going to Kill Us!\" and Other Myths About the Future of Artificial Intelligence by Robert D. Atkinson. Most sources are licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) license, with the exception of The Myth of the AI Apocalypse , which is under the Creative Commons Attribution 3.0 International (CC BY 3.0) license, and AI Literacy and Social Implications of AI , which are under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license. The material incorporated into this textbook has been revised, reorganized, and expanded to fit its learning objectives, terminology, and style. The original sources remain under their respective licenses, while the original text written for this textbook is distributed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.  This book was authored in PreTeXt . Hence, I would like to thank Rob Beezer for the creation of PreTeXt and for his responsiveness in the PreTeXt support channels. Additionally, I am very grateful to Oscar Levin both for his responsiveness in the Runestone Discord channels and for work in the creation of PreText converter for Pandoc which made adaptation of some materials much less time consuming.  Brad Miller deserves a special thanks for his work in creating Runestone Academy where this book is hosted, for his collaborative work with the PreTeXt authoring group, as well as for his responsiveness in the Runestone Discord channels.  Finally, I would like to thank my husband, Bob Fairchild, for his patience and for being my best friend.  "
},
{
  "id": "sec-ai-backstory",
  "level": "1",
  "url": "sec-ai-backstory.html",
  "type": "Section",
  "number": "1.1",
  "title": "AI’s Back Story",
  "body": " AI's Back Story   Artificial intelligence (AI) is becoming part of everyday life. It can recommend a movie, recognize faces in photographs, translate between languages, help doctors identify diseases, create works of art, and even carry on conversations that sound surprisingly human. To many people, AI feels almost magical.    Any sufficiently advanced technology is indistinguishable from magic.  Arthur C. Clarke, Profiles of the Future (1962)   Have you ever wondered why AI seems almost magical? Clarke's observation reminds us that unfamiliar technology can feel mysterious. One of the goals of this book is to pull back the curtain and explore what is really happening behind today's AI systems. As you learn more about AI, you'll discover that understanding it doesn't make it less amazing—it makes it even more fascinating.   This book is about exploring questions. What is artificial intelligence? How did computers become capable of doing things that once seemed possible only for people? Are AI systems really thinking, learning, or understanding? Why have they improved so dramatically in recent years? What can AI do well, where does it still struggle, and how should we decide when to trust it?  You do not need to be a programmer or a mathematician to answer these questions. All you need is curiosity. Whether your interests lie in science, business, healthcare, education, the arts, or simply understanding the technology that is becoming part of everyday life, our goal is to help you become an informed user of AI and a thoughtful participant in conversations about its future.  To understand where AI is today, we first need to understand where it came from.    The story of artificial intelligence is a journey of ideas, breakthroughs, setbacks, and discoveries. This chapter introduces several milestones that shaped modern AI and provides the foundation for the chapters that follow.   Illustrated roadmap of major milestones in AI history; a detailed description follows.   An open book is shown from above, symbolizing the continuing story of artificial intelligence. A winding blue path travels across the two pages, guiding the reader through major milestones in the development of AI. The journey begins with early dreams of intelligent machines and continues with Alan Turing's 1950 question of whether machines can think; the 1956 Dartmouth Summer Research Project on Artificial Intelligence, where the term artificial intelligence was coined and the field began to take shape; the rise of expert systems; periods known as AI winters; IBM's Deep Blue defeating reigning world chess champion Garry Kasparov in a 1997 match; IBM Watson defeating leading human champions on Jeopardy! in 2011; the resurgence of deep learning; AlphaFold's advances in protein-structure prediction; and ChatGPT bringing generative AI to broad public attention. The path ends with The Story Continues... , emphasizing that AI continues to evolve and that the reader is beginning that journey through this book.     Every story has a beginning. Today's AI systems may seem as though they appeared almost overnight, but their story stretches back much further than ChatGPT—or even the Internet. The ideas behind artificial intelligence have developed over decades through periods of excitement, disappointment, and breakthroughs. Understanding AI's back story helps us understand why today's systems can accomplish so much, while also recognizing the challenges they have yet to overcome.  Although the field of artificial intelligence emerged after the Second World War, the idea of creating intelligent machines is much older. Ancient myths described artificial beings brought to life, inventors built increasingly sophisticated mechanical automata, and philosophers debated whether human reasoning could be reduced to rules. These ideas laid the intellectual foundation for the scientific study of AI.  In 1950, Alan Turing Turing, Alan , a British mathematician and computer scientist who is widely considered the father of modern computer science, published his pioneering paper Computing Machinery and Intelligence , introducing ideas that would later become associated with the Turing Test Turing Test . A few years later, John McCarthy McCarthy, John , an American computer scientist, coined the term artificial intelligence and later described it as the science and engineering of making intelligent machines. These developments culminated in the Dartmouth Conference Dartmouth Conference in 1956, which brought together researchers from multiple disciplines to explore the possibility of thinking machines. The conference is widely regarded as the birth of AI as a distinct field of study.  Beginning in the late 1970s and throughout much of the 1980s, researchers developed increasingly sophisticated expert systems expert system using logic rules and reasoning algorithms that captured aspects of the decision-making processes of human experts. These systems became valuable decision-support tools in specialized domains such as medicine, where their knowledge was encoded by human experts. Expert systems demonstrated that computers could perform surprisingly complex reasoning, but they also revealed an important limitation: unlike humans, they could not learn new rules or adapt their knowledge through experience.  Progress in AI was not always steady. As expectations for expert systems grew, researchers and the public hoped that truly intelligent machines were on the horizon. When those expectations proved too optimistic, funding declined and enthusiasm cooled during periods that later became known as the AI winters AI winter . Although these setbacks slowed progress, they also encouraged researchers to explore new approaches that could overcome the limitations of rule-based systems.   Look Closer..  Early expert systems showed that computers could perform tasks once thought to require human expertise. However, every rule had to be written by people. If knowledge changed or new situations arose, someone had to update the system manually. Researchers realized that truly intelligent systems would need to learn from experience instead of simply following pre-programmed rules.    The realization that rule-based systems had limitations marked an important turning point in AI research. Rather than telling computers precisely what to do in each situation, researchers began exploring ways for computers to discover patterns on their own by learning from examples. This new approach became known as machine learning machine learning and fundamentally changed the direction of AI research. Neural networks are one important type of machine learning method. Later in this book, we'll see how increasingly large and sophisticated neural networks led to the modern deep learning systems behind today's generative AI.   Neural networks neural network , first proposed decades earlier, experienced renewed interest beginning in the 1980s and achieved dramatic success during the 2000s and 2010s as faster computers, larger data sets, and improved algorithms became available. These systems are loosely inspired by the organization of neurons in the brain and learn to recognize complex patterns from data. Early applications included handwriting and character recognition, such as automatically reading license plates. During this era, AI captured the public's imagination through several remarkable demonstrations. In 1997, IBM's Deep Blue Deep Blue defeated world chess champion Garry Kasparov Kasparov, Garry using highly optimized search algorithms together with carefully designed evaluation functions created by human experts. In 2011, IBM Watson IBM Watson defeated the best human contestants on the television quiz show Jeopardy! , demonstrating the growing power of AI combined with enormous collections of information.  From 2010 to the present, deep learning deep learning and big data big data have transformed AI. Affordable graphics processing units (GPUs) graphics processing unit , originally developed for fast rendering needed by video games, made it practical to train increasingly complex neural networks using enormous amounts of data. Layering these networks enables computers to recognize increasingly sophisticated patterns. This technology now supports applications ranging from automated facial and object recognition to finance, healthcare, transportation, and scientific research. For example, AlphaFold AlphaFold , developed by Google DeepMind, has predicted the structures of more than 200 million proteins from organisms across the tree of life, dramatically accelerating biological research.  Although AI had already transformed many industries, most people rarely interacted with it directly. That changed dramatically in November 2022, when OpenAI released the AI-powered chatbot ChatGPT ChatGPT . Within two months, ChatGPT reached more than 100 million users, making it one of the fastest-growing consumer applications in history. Unlike earlier AI breakthroughs, which were largely confined to research laboratories and supercomputers, ChatGPT made powerful generative AI easily accessible to anyone with a computer or smartphone. For many people, this was the moment AI became part of everyday life.  As AI becomes increasingly woven into everyday life, understanding it becomes more important than ever. This book will help you understand what AI is, where it came from, how it works, and how it may shape the future. The story of AI is still being written, and in the chapters that follow, you'll discover how today's AI systems learn, reason, create, and interact with the world around us.   AI History Timeline   The events below describe key moments in the history of artificial intelligence. Arrange them in the correct chronological order, from earliest to most recent, to create a timeline of AI's development.     Alan Turing publishes Computing Machinery and Intelligence, introducing ideas that would later become known as the Turing Test.    The Dartmouth Conference brings together researchers to explore the possibility of thinking machines, widely considered the birth of AI as a distinct field.    IBM's Deep Blue defeats world chess champion Garry Kasparov, demonstrating the power of AI in complex strategic games.    IBM Watson achieves a milestone in AI by winning the game show Jeopardy!     A major leap in performance is unlocked thanks to new deep learning algorithms and the availability of big data.    AlphaFold successfully predicts protein structures, transforming scientific research.    OpenAI releases ChatGPT, making generative AI accessible to millions and reaching 100 million users in just two months.     Think about the order in which these events were described in the section. Look for clues about which events happened earlier or later based on how they connect to one another.    "
},
{
  "id": "fig-story-of-ai",
  "level": "2",
  "url": "sec-ai-backstory.html#fig-story-of-ai",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " The story of artificial intelligence is a journey of ideas, breakthroughs, setbacks, and discoveries. This chapter introduces several milestones that shaped modern AI and provides the foundation for the chapters that follow.   Illustrated roadmap of major milestones in AI history; a detailed description follows.   An open book is shown from above, symbolizing the continuing story of artificial intelligence. A winding blue path travels across the two pages, guiding the reader through major milestones in the development of AI. The journey begins with early dreams of intelligent machines and continues with Alan Turing's 1950 question of whether machines can think; the 1956 Dartmouth Summer Research Project on Artificial Intelligence, where the term artificial intelligence was coined and the field began to take shape; the rise of expert systems; periods known as AI winters; IBM's Deep Blue defeating reigning world chess champion Garry Kasparov in a 1997 match; IBM Watson defeating leading human champions on Jeopardy! in 2011; the resurgence of deep learning; AlphaFold's advances in protein-structure prediction; and ChatGPT bringing generative AI to broad public attention. The path ends with The Story Continues... , emphasizing that AI continues to evolve and that the reader is beginning that journey through this book.    "
},
{
  "id": "sec-ai-backstory-6",
  "level": "2",
  "url": "sec-ai-backstory.html#sec-ai-backstory-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Turing Test artificial intelligence Dartmouth Conference "
},
{
  "id": "sec-ai-backstory-7",
  "level": "2",
  "url": "sec-ai-backstory.html#sec-ai-backstory-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expert systems "
},
{
  "id": "sec-ai-backstory-8",
  "level": "2",
  "url": "sec-ai-backstory.html#sec-ai-backstory-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "AI winters "
},
{
  "id": "sec-ai-backstory-10",
  "level": "2",
  "url": "sec-ai-backstory.html#sec-ai-backstory-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "machine learning "
},
{
  "id": "sec-ai-backstory-11",
  "level": "2",
  "url": "sec-ai-backstory.html#sec-ai-backstory-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Neural networks "
},
{
  "id": "sec-ai-backstory-12",
  "level": "2",
  "url": "sec-ai-backstory.html#sec-ai-backstory-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deep learning big data "
},
{
  "id": "sec-ai-backstory-13",
  "level": "2",
  "url": "sec-ai-backstory.html#sec-ai-backstory-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ChatGPT "
},
{
  "id": "ai-history-timeline",
  "level": "2",
  "url": "sec-ai-backstory.html#ai-history-timeline",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "AI History Timeline.",
  "body": " AI History Timeline   The events below describe key moments in the history of artificial intelligence. Arrange them in the correct chronological order, from earliest to most recent, to create a timeline of AI's development.     Alan Turing publishes Computing Machinery and Intelligence, introducing ideas that would later become known as the Turing Test.    The Dartmouth Conference brings together researchers to explore the possibility of thinking machines, widely considered the birth of AI as a distinct field.    IBM's Deep Blue defeats world chess champion Garry Kasparov, demonstrating the power of AI in complex strategic games.    IBM Watson achieves a milestone in AI by winning the game show Jeopardy!     A major leap in performance is unlocked thanks to new deep learning algorithms and the availability of big data.    AlphaFold successfully predicts protein structures, transforming scientific research.    OpenAI releases ChatGPT, making generative AI accessible to millions and reaching 100 million users in just two months.     Think about the order in which these events were described in the section. Look for clues about which events happened earlier or later based on how they connect to one another.   "
},
{
  "id": "sec-characterizing-intelligence",
  "level": "1",
  "url": "sec-characterizing-intelligence.html",
  "type": "Section",
  "number": "1.2",
  "title": "Characterizing Intelligence",
  "body": " Characterizing Intelligence   AI is a rapidly evolving field, so understanding what we mean by intelligence intelligence is an important first step. Before we can compare human intelligence with artificial intelligence, we need to think about what intelligence actually is. Psychologists, cognitive scientists, computer scientists, philosophers, educators, and many others have debated this question for centuries. Although there is no single universally accepted definition, most people agree that intelligence involves the ability to learn, reason, solve problems, adapt to new situations, and make decisions.  Many people associate intelligence with an intelligence quotient ( IQ ) intelligence quotient IQ score. While IQ tests measure certain kinds of reasoning and problem-solving ability, they do not capture every aspect of human intelligence. One influential, but controversial, educational theory, proposed by Howard Gardner Gardner, Howard , suggests that people possess several different kinds of intelligence rather than a single general intelligence. Gardner's theory includes intelligences such as linguistic, logical-mathematical, spatial, musical, interpersonal, and bodily-kinesthetic abilities. Although psychologists continue to debate this theory, it has had an influence on education by encouraging educators to recognize that people learn and demonstrate their strengths in different ways.   Look Closer...   Gardner's Theory of Multiple Intelligences is widely known in education, but it is not universally accepted within the field of psychology. Many psychologists argue that intelligence is better explained by a smaller number of underlying cognitive abilities. Throughout this book, we use the word intelligence in its broad everyday sense rather than adopting any single psychological theory.    Rather than thinking of intelligence as one specific skill, it is helpful to think of it as a collection of abilities that allow an individual to understand the world, learn from experience, solve problems, and adapt to changing situations. Humans demonstrate these abilities in many different ways, and modern AI systems can now perform some of them remarkably well. However, AI and human intelligence are not the same, and understanding those differences is one of the goals of this book.    The Turing Test  Because intelligence is difficult to define precisely, early AI researchers looked for practical ways to evaluate it. In 1950, Alan Turing Turing, Alan posed a provocative question: Can machines think? Rather than diving into philosophical definitions, Turing reframed the question in practical terms with his now-famous Turing Test Turing test , introduced in his paper Computing Machinery and Intelligence.  The concept is straightforward: a human judge engages in a text-based conversation with both a human and a machine, without knowing which is which. If the judge cannot reliably distinguish the machine from the human, the machine is said to have passed the test—demonstrating behavior indistinguishable from human intelligence. Turing's approach shifted the focus from the elusive concept of thinking to observable interaction.   Look Closer...  Turing actually presented three versions of this imitation game. The 1950 version is the most well-known: a human interrogator has simultaneous text conversations with both a computer and another human, and must judge which is which. The game is unrestricted, meaning the interrogator can communicate on almost any subject. Turing said that if a computer does well in this game, it can be considered to be thinking.   However, it is important to understand what the test does and does not claim. For Turing, doing well in the game is a sufficient condition for thinking—meaning a machine that passes can be said to think—but it is not a necessary condition. A machine that fails the test might still be intelligent. Turing also did not intend the test as a strict definition of thinking. In fact, he stated: I don't want to give a definition of thinking.  The test has several key features. It assesses a machine's ability at open-domain conversation, rather than in narrow, specialized fields. It is qualitative, allowing for natural dialogue, and it does not rely on the tricky, adversarial questions that programmers often use to try and expose chatbots. Significantly, the test is also architecture-independent, meaning it does not dictate what kind of machine or technology must be used—it could be a neural network, a DNA computer, or any other system.  For decades, the Turing Test shaped how many people thought about artificial intelligence. Today, however, AI systems perform many impressive tasks that have little to do with carrying on a conversation. As a result, researchers now evaluate AI in many different ways depending on the problems they are trying to solve.    What Is Generative AI?  One reason artificial intelligence has become such a common topic of conversation is the rapid growth of generative artificial intelligence generative artificial intelligence ( GenAI GenAI ). Unlike many earlier AI systems that focused on recognizing patterns or making predictions, generative AI creates new content. Depending on the system, that content may include text, images, audio, video, computer code, or three-dimensional designs.  Generative AI learns from large collections of examples known as training data training data . During training, the model identifies patterns and relationships within the data rather than memorizing a fixed collection of answers. When given a prompt, it uses those learned patterns to generate a new response. Although the output is influenced by its training data, it is not simply retrieved from a database or copied from a single source.  The same underlying idea applies regardless of what the system produces. A language model language model can generate essays, conversations, or computer programs. An image model image model can create original illustrations. Other systems generate music, speech, video, or scientific designs. While the outputs differ, they are all created by learning patterns from data and using those patterns to generate something new.  Like all AI systems, generative AI has both strengths and limitations. It can produce creative and useful results in seconds, but it can also make mistakes, reflect bias present in its training data, or generate information that is inaccurate or misleading. Learning to understand these strengths and limitations is an important part of becoming an informed user of AI.  In later chapters, we will examine how generative AI systems learn from data, why they sometimes make mistakes, and how they are changing the way people learn, work, and solve problems.     Turing Test Intention   Which of the following best describes Alan Turing's primary intention when he proposed the Turing Test?      To offer a formal standard for evaluating whether a machine can be said to possess genuine understanding.    Turing did not propose the test as a formal standard for genuine understanding. He deliberately avoided giving a definition of thinking, stating: I don't want to give a definition of thinking. The test evaluates behavior, not internal understanding.      To provide a systematic framework for determining the specific cognitive abilities that any intelligent system must demonstrate.    Turing's test does not specify which cognitive abilities an intelligent system must demonstrate. Instead, it focuses on observable behavior in open-domain conversation, allowing any system that can imitate human conversation to pass, regardless of its internal architecture.      To establish a practical method for assessing machine intelligence based on observable behavior rather than abstract definitions.    Correct! Turing shifted the focus from the elusive concept of thinking to observable interaction. He proposed a practical test based on whether a machine could successfully imitate human conversation, avoiding the need for a strict definition of intelligence.      To design an interrogation protocol that would reliably show the limitations of early rule-based systems.    Turing's test was not designed to expose limitations or to be adversarial. In fact, the test disallows the tricky, adversarial questions that programmers often use to try and expose chatbots. The goal was to evaluate imitation, not to reveal weaknesses.      "
},
{
  "id": "sec-characterizing-intelligence-2-1",
  "level": "2",
  "url": "sec-characterizing-intelligence.html#sec-characterizing-intelligence-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intelligence "
},
{
  "id": "sec-characterizing-intelligence-2-2",
  "level": "2",
  "url": "sec-characterizing-intelligence.html#sec-characterizing-intelligence-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intelligence quotient IQ "
},
{
  "id": "ssec-turing-test-2",
  "level": "2",
  "url": "sec-characterizing-intelligence.html#ssec-turing-test-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Alan Turing Turing Test "
},
{
  "id": "ssec-what-is-generative-ai-2",
  "level": "2",
  "url": "sec-characterizing-intelligence.html#ssec-what-is-generative-ai-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generative artificial intelligence GenAI "
},
{
  "id": "ssec-what-is-generative-ai-3",
  "level": "2",
  "url": "sec-characterizing-intelligence.html#ssec-what-is-generative-ai-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "training data "
},
{
  "id": "ssec-what-is-generative-ai-4",
  "level": "2",
  "url": "sec-characterizing-intelligence.html#ssec-what-is-generative-ai-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "language model image model "
},
{
  "id": "turing-test-intention",
  "level": "2",
  "url": "sec-characterizing-intelligence.html#turing-test-intention",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "Turing Test Intention.",
  "body": " Turing Test Intention   Which of the following best describes Alan Turing's primary intention when he proposed the Turing Test?      To offer a formal standard for evaluating whether a machine can be said to possess genuine understanding.    Turing did not propose the test as a formal standard for genuine understanding. He deliberately avoided giving a definition of thinking, stating: I don't want to give a definition of thinking. The test evaluates behavior, not internal understanding.      To provide a systematic framework for determining the specific cognitive abilities that any intelligent system must demonstrate.    Turing's test does not specify which cognitive abilities an intelligent system must demonstrate. Instead, it focuses on observable behavior in open-domain conversation, allowing any system that can imitate human conversation to pass, regardless of its internal architecture.      To establish a practical method for assessing machine intelligence based on observable behavior rather than abstract definitions.    Correct! Turing shifted the focus from the elusive concept of thinking to observable interaction. He proposed a practical test based on whether a machine could successfully imitate human conversation, avoiding the need for a strict definition of intelligence.      To design an interrogation protocol that would reliably show the limitations of early rule-based systems.    Turing's test was not designed to expose limitations or to be adversarial. In fact, the test disallows the tricky, adversarial questions that programmers often use to try and expose chatbots. The goal was to evaluate imitation, not to reveal weaknesses.     "
},
{
  "id": "sec-mythbusting-ch1",
  "level": "1",
  "url": "sec-mythbusting-ch1.html",
  "type": "Section",
  "number": "1.3",
  "title": "Mythbusting",
  "body": " Mythbusting   Now that you have a better understanding of what AI actually is—from its historical roots to the various ways we define and measure intelligence—let's officially dispel some of the most persistent myths that have followed this field like a shadow since its inception at Dartmouth in 1956.    Misconception: AI is conscious  Reality: AI replicates patterns in data rather than possessing any form of subjective awareness, emotions, or self-consciousness. When an AI generates a poem or offers comforting words, it is not feeling anything. It is statistically predicting which words are most likely to follow previous ones based on its training data. While AI can produce outputs that appear thoughtful or even emotional, these are statistical associations, not genuine consciousness.  Why it matters: The concept of AI raises fascinating philosophical questions about whether a machine could ever truly be conscious, what it would mean for a non-human entity to have rights, and how we should treat an artificial system that appears to think and feel. These are important debates, but they remain speculative for now. Humans are hard-wired to empathize with what appears similar to us, which can make us feel that systems which mimic speech or emotion actually possess these characteristics. However, treating AI as sentient distracts from the real, concrete issues of bias, privacy, and labor exploitation that demand our attention today.    Misconception: AI will outsmart humans  Reality: Increased computing speed and memory capacity simply allow AI to process more data faster. They do not make AI more intelligent or capable of understanding in the way humans do. Speed does not give computers the ability to understand things the way humans do, or to be more flexible and less failure-prone. Besides, improvement in cognitive capabilities is curtailed by the physical limits on how much speed we can engineer. Robots rely on electricity and consume lots of it. Their capacity to evolve into sentient beings is dependent on their very limited electric capacities.  Why it matters: The concept of a singularity singularity , which is a tipping point when computers become more intelligent than humans, ignores fundamental differences between computational processing and human cognition. Although AI's computational capabilities may surpass human intelligence in specific, narrow tasks, it is not equipped to outsmart human ingenuity, critical thinking, creativity, and the ability to understand the broader picture. How robots are often presented in the press is way out of step with their actual or likely capabilities.    Misconception: AI makes computers think  Reality: From a scientific point of view, no. Similar to the problems of defining intelligence, there is currently no definition of thinking. Thinking is generally associated with humans who are biological beings rather than artificial machines. Today's most advanced AI systems fall short of human-like understanding and most likely lack consciousness. Current AI systems do not possess the intrinsic motivations, intentions, or subjective experiences associated with human thought. They operate through complex mathematical models and algorithms designed to recognize statistical correlations, rather than engaging in true comprehension or independent thought.  Why it matters: Believing that computers think leads to unrealistic expectations and misplaced fears about AI's capabilities. It can cause people to overestimate what AI can do and underestimate the need for human oversight and judgment. The goal of AI is not to create human replicas but to leverage technology to solve complex challenges and enhance human potential. Recognizing this distinction helps focus on the practical, beneficial applications of AI rather than speculative concerns about machine consciousness.    Misconception: Making machines behave like humans is optimal  Reality: This does not make sense because most people do not perform optimally, regardless of what task we consider. What it actually means is to make a computer perform like the best performing human. For one task this may mimic the behavior of one human, but for several tasks this will correspond to the behavior of a different human for every task. Such a super human does not exist. If a machine can solve more than one task, it does not make sense to compare it to one human because such a person does not exist. The goal is to make machines behave like an ideal super human, not like an average person.  Why it matters: This misconception leads to setting inappropriate benchmarks for AI performance. Comparing AI to human performance in a general sense is misleading because AI excels in specific, narrow tasks while lacking the broad, flexible intelligence of humans. Understanding this helps evaluate AI systems appropriately for their intended purposes rather than expecting them to replicate all aspects of human behavior.    Misconception: AI is a person  Reality: People often refer to an AI as if talking about a person-like entity with greater-than-human intelligence and maybe even sentience. In practice, AI is a set of many different pieces of algorithmic software similar to smartphone apps. Some AI systems are combined into robots that are designed to look, sound, and behave in ways similar to humans to make them more user-friendly. However, to claim that AI applications communicate as humans do is misleading. AI is not a person as it lacks self-awareness, consciousness, emotional intelligence, and the ability to understand complex human contexts.  Why it matters: Treating AI as a person leads to anthropomorphism and unrealistic expectations about its capabilities. It can also lead to ethical confusion about the rights and responsibilities of AI systems. Understanding that AI is a tool, not a person, helps maintain appropriate human control and accountability.    Select the Truths of AI  AI misconceptions   Which of the following statements are true about artificial intelligence?      AI possesses consciousness through patterns.    This is a myth. AI replicates patterns in data rather than possessing any form of subjective awareness, emotions, or self-consciousness. When an AI generates a poem or offers comforting words, it is not feeling anything.      AI's advancing computing and memory has given it increased capability of human understanding.    This is a myth. Increased computing speed and memory capacity simply allow AI to process more data faster. They do not make AI more intelligent or capable of understanding in the way humans do, nor do they give AI the flexibility and adaptability of human cognition.      AI excels in broader and specific tasks.    Not true. AI systems are highly specialized and excel at specific, well-defined tasks such as playing chess, translating text, or recognizing objects in clear photographs. They lack the broad, flexible intelligence that humans possess.      AI's responses are guided by its intentions.    This is a myth. Current AI systems do not possess the intrinsic motivations, intentions, or subjective experiences associated with human thought. They operate through complex mathematical models designed to recognize statistical correlations.      AI is not an autonomous entity.    Correct! AI is best understood as a tool rather than an autonomous entity. AI is a set of many different pieces of algorithmic software similar to smartphone apps. It lacks self-awareness, consciousness, emotional intelligence, and the ability to understand complex human contexts. Treating AI as a tool helps maintain appropriate human control and accountability.      AI generates text by predicting word sequences.    Correct! When an AI generates a text response, it is statistically predicting which words are most likely to follow previous ones based on its training data. It does not understand meaning or context in the way humans do.      AI's processing speed enables human-like comprehension.    This is a myth. Increased computing speed and memory capacity allow AI to process more data faster, but they do not make AI more capable of understanding in the way humans do. Speed does not give computers the ability to understand things or to be more flexible and less failure-prone.      AI is algorithmic software comparable to other digital applications.    Correct! In practice, AI is a set of many different pieces of algorithmic software similar to smartphone apps. While some AI systems are combined into robots designed to look or behave like humans, the underlying technology is software implementing learning rules and algorithms.      "
},
{
  "id": "asm-myth-ai-outsmart-humans-3",
  "level": "2",
  "url": "sec-mythbusting-ch1.html#asm-myth-ai-outsmart-humans-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singularity singularity "
},
{
  "id": "ai-truths-select-all",
  "level": "2",
  "url": "sec-mythbusting-ch1.html#ai-truths-select-all",
  "type": "Checkpoint",
  "number": "1.3.1",
  "title": "Select the Truths of AI.",
  "body": " Select the Truths of AI  AI misconceptions   Which of the following statements are true about artificial intelligence?      AI possesses consciousness through patterns.    This is a myth. AI replicates patterns in data rather than possessing any form of subjective awareness, emotions, or self-consciousness. When an AI generates a poem or offers comforting words, it is not feeling anything.      AI's advancing computing and memory has given it increased capability of human understanding.    This is a myth. Increased computing speed and memory capacity simply allow AI to process more data faster. They do not make AI more intelligent or capable of understanding in the way humans do, nor do they give AI the flexibility and adaptability of human cognition.      AI excels in broader and specific tasks.    Not true. AI systems are highly specialized and excel at specific, well-defined tasks such as playing chess, translating text, or recognizing objects in clear photographs. They lack the broad, flexible intelligence that humans possess.      AI's responses are guided by its intentions.    This is a myth. Current AI systems do not possess the intrinsic motivations, intentions, or subjective experiences associated with human thought. They operate through complex mathematical models designed to recognize statistical correlations.      AI is not an autonomous entity.    Correct! AI is best understood as a tool rather than an autonomous entity. AI is a set of many different pieces of algorithmic software similar to smartphone apps. It lacks self-awareness, consciousness, emotional intelligence, and the ability to understand complex human contexts. Treating AI as a tool helps maintain appropriate human control and accountability.      AI generates text by predicting word sequences.    Correct! When an AI generates a text response, it is statistically predicting which words are most likely to follow previous ones based on its training data. It does not understand meaning or context in the way humans do.      AI's processing speed enables human-like comprehension.    This is a myth. Increased computing speed and memory capacity allow AI to process more data faster, but they do not make AI more capable of understanding in the way humans do. Speed does not give computers the ability to understand things or to be more flexible and less failure-prone.      AI is algorithmic software comparable to other digital applications.    Correct! In practice, AI is a set of many different pieces of algorithmic software similar to smartphone apps. While some AI systems are combined into robots designed to look or behave like humans, the underlying technology is software implementing learning rules and algorithms.     "
},
{
  "id": "sec-the-dangers-of-ai-as-a-learner",
  "level": "1",
  "url": "sec-the-dangers-of-ai-as-a-learner.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Dangers of AI as a Learner",
  "body": " The Dangers of AI as a Learner   Generative AI has changed education faster than almost any technology in history. In just a few years, students have gained access to AI systems that can answer questions, explain difficult ideas, generate practice problems, summarize readings, and provide feedback in seconds. Whether you are writing an essay, studying for an exam, or learning a new skill, AI is becoming a common part of the learning experience.  Like any educational tool, however, generative AI can be used well or poorly. Used thoughtfully, it can help you understand new concepts, practice difficult material, and become a more independent learner. Used carelessly, it can tempt you to skip the very thinking that leads to lasting understanding. Learning how to use AI effectively is quickly becoming an essential academic skill.  This chapter explores how to make AI work for your learning rather than in place of your learning. Along the way, you will learn how AI can support your education, why productive struggle remains essential for learning, how to write effective prompts, how to recognize AI mistakes, and how to use AI responsibly and ethically.    AI as a Learning Tool  When integrated into study routines, generative AI introduces powerful new ways to engage with academic material. However, because these systems can readily supply answers, framing how they are used becomes critical. Rather than replacing the study process, AI functions best when it serves to deepen comprehension, challenge thinking, and support independent learning.  The answer is not to avoid AI, nor is it to rely on AI for everything. Like calculators, search engines, and spell checkers before it, generative AI is a tool. Used thoughtfully, it can help students learn more effectively and efficiently. Used carelessly, it can bypass the very thinking that leads to genuine understanding. Learning to use AI well is becoming an important academic skill, just as learning to evaluate information on the Internet became an essential skill for previous generations.  This chapter explores both the opportunities and the challenges of learning with AI. You will learn why independent thinking still matters, how AI can become an effective study partner, how to write better prompts, and why it is important to verify AI-generated information instead of accepting it without question.    New Opportunities for Learning  Generative AI has the potential to make learning more personal and more interactive than ever before. Unlike a textbook, AI can adapt its explanations based on your questions, provide examples that match your interests, and continue explaining a concept until it makes sense. It can generate additional practice problems, quiz you on important ideas, and offer feedback while you are learning rather than after an assignment has been graded.  AI can also support creativity and problem solving. It can help you brainstorm ideas, organize information, explain unfamiliar concepts, and explore different approaches to solving a problem. When used as a learning partner instead of an answer machine, AI encourages curiosity and experimentation while giving you immediate access to explanations and examples whenever you need them.    The Risks of Overreliance  Although AI can be a powerful educational tool, learning requires more than producing correct answers. Students develop expertise by practicing, making mistakes, revising their thinking, and reflecting on what they have learned. If AI consistently performs these mental tasks instead of the student, learning may become faster in the short term but weaker in the long term.  AI systems are also imperfect. They sometimes produce incorrect information, misleading explanations, or fabricated citations that appear convincing. For this reason, effective AI users do not simply accept AI-generated responses. They question them, compare them with other sources, and use their own judgment to determine whether the information is accurate and appropriate.    Learning New Skills  As AI becomes a common part of education and the workplace, students will need to develop new skills alongside traditional ones. These include writing clear prompts, evaluating AI-generated responses, recognizing mistakes, and deciding when AI assistance is helpful and when independent thinking is more valuable. These are not replacements for critical thinking; they are extensions of it.  Throughout this chapter, you will learn practical strategies for using AI responsibly and effectively. The goal is not to have AI do your learning for you. Instead, the goal is to use AI as a tool that helps you become a stronger learner, a better problem solver, and a more independent thinker.    Evidence from Mathematics Learning  To establish how much students' learning processes have shifted in response to generative AI, and how that affects their durable learning outcomes, a longitudinal study analyzed 3.2 million mathematics learning interactions over a decade. The results showed that after ChatGPT was released, high school and college students cut their learning time on AI-susceptible problems by 31.3% and 26.9% over nearly three years.  However, this came at a cost; while unsupervised assignments showed an increase in correct answers, supervised evaluations yielded a staggering 25% cumulative decline in the odds of a student giving a correct response. This study highlights that when students use generative AI as an unchecked shortcut to complete assignments faster, they skip the active cognitive engagement at study time that produces deeper understanding, higher mastery, and more durable retention.    Decreased Cognitive Engagement  Beyond immediate performance drops, routine utilization fundamentally recalibrates a student's underlying intellectual traits. A separate empirical study investigated how students' trust in and routine use of generative AI affect their cognitive engagement habits, specifically reflection, the need for understanding, and critical thinking in coursework. The study found that students who regularly depended on generative AI reported significantly lower cognitive engagement, and students with higher enthusiasm for technology, risk tolerance, and computer self-efficacy—traits often celebrated and encouraged in STEM—were actually more prone to these effects. Prior experience with AI or academia offered no protection.   Look Closer...   This reveals a dangerous cognitive debt cycle cognitive debt cycle where routine reliance systematically weakens a student's intellectual habits. Over time, trust-driven AI use can build a general unwillingness to engage in reflection and critical thinking, fundamentally resetting a student's baseline for what cognitive effort feels worth it.       Breaking the Cycle  Ultimately, independent critical thinking and human judgment are not capabilities that can be safely outsourced to AI without causing long-term intellectual atrophy. To break this potential debt cycle, learners must intentionally shift away from treating AI as an engine for fast answers and instead adopt it as a collaborative tool for deeper comprehension. Processing ideas with your own mind, making independent judgments, and working alongside peers remain non-negotiable elements of true mastery. To explore how to strike this balance successfully, details how to responsibly repurpose these tools as an AI-Powered Study Buddy —focusing on how to use AI to brainstorm, explain, or map out different concepts without sacrificing your own cognitive independence.   "
},
{
  "id": "asm-look-closer-cognitive-debt-cycle-2",
  "level": "2",
  "url": "sec-the-dangers-of-ai-as-a-learner.html#asm-look-closer-cognitive-debt-cycle-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cognitive debt cycle "
},
{
  "id": "sec-how-mistakes-help-you-learn",
  "level": "1",
  "url": "sec-how-mistakes-help-you-learn.html",
  "type": "Section",
  "number": "2.2",
  "title": "How Mistakes Help You Learn",
  "body": " How Mistakes Help You Learn  Most students dislike getting questions wrong. It can feel discouraging or even embarrassing, and many people see mistakes as evidence that they \"just aren't good at\" a subject. Research on learning tells a different story. One of the best ways to learn is to make an honest attempt at solving a problem before seeing the answer. When your answer is incomplete or incorrect, your brain is especially ready to learn from feedback.  When you try to answer a question, your brain actively searches for relevant knowledge and connects ideas you already know. Even if your answer is wrong, that effort prepares your brain to incorporate new information. Researchers call this a desirable difficulty desirable difficulty : the learning process feels more challenging, but the extra effort leads to deeper understanding and better long-term retention.  This idea explains why simply reading notes or watching someone else solve problems often feels productive but results in surprisingly little learning. Recognizing information is much easier than recalling it from memory. Activities such as answering practice questions, solving problems, making predictions, or explaining concepts in your own words require you to retrieve what you know. Although these activities require more effort, they are much more effective ways to learn.  Generative AI gives you a powerful way to take advantage of this principle—but only if you resist the temptation to ask for the answer immediately. Before asking an AI chatbot for help, spend a few minutes working on the problem yourself. Make your best attempt, even if you are unsure. Then compare your reasoning with the AI's response. If your answer differs, ask yourself what you missed, why the AI approached the problem differently, and which explanation makes the most sense.  Ironically, the moments when you are wrong are often the moments when you learn the most. By struggling first and using AI to check and refine your thinking rather than replace it, you turn mistakes into opportunities for learning.  AI is most valuable when it helps you learn rather than simply giving you an answer. Before asking AI for help, remember the TRACE learning strategy TRACE learning strategy :   TRACE Learning Strategy     Try → Reason → Ask → Compare → Evaluate    Try. Read the problem carefully and make your own best attempt using only your own knowledge and reasoning.   Reason. Explain your thinking to yourself. Why do you believe your answer is correct?   Ask. Only after you have tried, use AI to explain, critique, or solve the problem.   Compare. Look for differences between your reasoning and the AI's response. Do not assume that the AI is correct.   Evaluate. Decide what you have learned and revise your understanding based on the evidence.       Don't ask AI before you've really tried and engaged your own reasoning. The effort you spend thinking before asking an AI tool (or a professor or a peer) is often the most valuable part of the learning process.  "
},
{
  "id": "sec-how-mistakes-help-you-learn-3",
  "level": "2",
  "url": "sec-how-mistakes-help-you-learn.html#sec-how-mistakes-help-you-learn-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "desirable difficulty "
},
{
  "id": "sec-how-mistakes-help-you-learn-7",
  "level": "2",
  "url": "sec-how-mistakes-help-you-learn.html#sec-how-mistakes-help-you-learn-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "TRACE learning strategy "
},
{
  "id": "def-trace-learning-strategy",
  "level": "2",
  "url": "sec-how-mistakes-help-you-learn.html#def-trace-learning-strategy",
  "type": "Definition",
  "number": "2.2.1",
  "title": "TRACE Learning Strategy.",
  "body": " TRACE Learning Strategy     Try → Reason → Ask → Compare → Evaluate    Try. Read the problem carefully and make your own best attempt using only your own knowledge and reasoning.   Reason. Explain your thinking to yourself. Why do you believe your answer is correct?   Ask. Only after you have tried, use AI to explain, critique, or solve the problem.   Compare. Look for differences between your reasoning and the AI's response. Do not assume that the AI is correct.   Evaluate. Decide what you have learned and revise your understanding based on the evidence.     "
},
{
  "id": "sec-ai-powered-study-buddy",
  "level": "1",
  "url": "sec-ai-powered-study-buddy.html",
  "type": "Section",
  "number": "2.3",
  "title": "AI-Powered Study Buddy",
  "body": " AI-Powered Study Buddy   Generative AI tools can be incredibly effective when reframed as an active learning tool. Educational research on AI implementation reveals that students who use AI to interactively challenge and refine their own ideas instead of just generating quick answers show significantly higher engagement and retention. The findings indicate that the dividing line between accelerated learning and intellectual dependency depends almost entirely on who is doing the heavy lifting during the interaction. When the interaction is well structured, an AI Study Buddy supports cognitive independence rather than replacing it by acting as a personalized, on-demand tutor.    From Static Resources to Dynamic Interaction  To understand the role of an AI study partner, it helps to contrast conversational AI tools with traditional learning materials. Traditional educational resources—such as printed textbooks, static lecture notes, and pre-recorded videos—provide the exact same presentation of material to every student regardless of their background knowledge, learning pace, or specific areas of confusion.  In contrast, conversational AI creates a dynamic feedback loop. Rather than acting as a static repository of information, generative AI operates through two-way dialogue, adapting its explanations based on user input. Engaging with AI as a conversational partner allows students to request customized clarification, ask targeted follow-up questions, and explore concepts at their own pace.  However, effective educational technology requires avoiding two extremes: under-utilization due to skepticism, and indiscriminate reliance that bypasses actual learning. When used thoughtfully, dynamic tools bridge the gap between static study materials and personalized instruction. This dynamic capability forms the foundation for advanced adaptive learning technologies and specialized accessibility tools.    AI for Personalization and Accessibility  AI is suitable for scheduling and resource-optimization tasks. But the most important application is that which deals with inclusion and integration of the differently abled. Human-machine interface has never been as seamless as it is now, making multimedia input and output a real possibility. For example, the app Storysign helps translate words to sign language to help deaf children learn to read.   adaptive learning systems ALS Adaptive learning systems (ALSs) evaluate the learner, be it through quizzes or real-time feedback. Based on this evaluation, they present the student with a predefined learning path. Instead of a one-size-fits-all approach, students can spend more or less time on each topic, explore new and related topics. This adaptive software can help them learn to read, write, pronounce and solve problems.  ALSs can also help learners with special needs. Any specialisation of the systems will be based on proven theories and expert opinion. Targeted systems are likely to be of great assistance in teaching individuals with cognitive disabilities such as Down Syndrome, traumatic brain injury, or dementia, as well as for less severe cognitive conditions such as dyslexia, attention deficit disorder and dyscalculia.  Different groups can be formed for different activities, taking into account the individual strengths and weaknesses of each member.  While these technologies hold immense potential, their ultimate success depends entirely on how effectively they are implemented. The exact same innovative tool can dramatically enhance learning in one classroom while proving ineffective or counterproductive in another.    Strategies for Effective AI Interaction  While adaptive platforms and accessible interfaces provide the underlying infrastructure for personalized learning, technology alone does not guarantee academic success. The true transformative value of an AI Study Buddy depends on the dynamic established during individual study sessions.  Moving from adaptive software to everyday AI tools requires a shift from passive consumption to deliberate, active engagement. Rather than treating AI as an oracle that provides static answers or completes tasks on your behalf, effective interaction requires you to assume the role of director—setting clear boundaries and explicitly guiding the tool's role, tone, and level of assistance.  To maximize your academic growth while maintaining true ownership of your work, you can guide your AI interactions using several targeted strategies:      Brainstorming and Idea Generation: When you get stuck or are starting a new project, utilize AI as a collaborative partner to generate diverse angles, list potential arguments, or suggest topics. Rather than copying the output, use the responses as a baseline to kickstart your own creative process, and get past the tough spot without outsourcing the actual composition.     Concept Explanation: If a textbook definition or lecture slide feels confusing and you're having trouble understanding the concept, instruct the AI to explain the concept using an analogy, break it down into simpler terms, or provide real world examples. You can maximize this by telling the AI to adopt a specific persona—such as a patient tutor or a domain expert—allowing you to personalize the depth and style of the explanation to better fit individual learning needs.     Practice and Self-Testing: Use AI to organize thoughts or synthesize large volumes of information. Prompting it to generate practice questions, test you on key concepts, or break down dense text into simple analogies is a powerful way to deepen your comprehension.     To access AI services programmatically, developers use an API Key API key —a unique password that lets apps connect to AI services. Ultimately, using AI to augment rather than replace critical thinking keeps you as a primary author and thinker in your education. Shifting your approach from asking AI for answers to asking it for guidance, explanations, and targeted practice keeps you in control of your education.  Ultimately, using AI to augment rather than replace critical thinking keeps you as a primary author and thinker in your education. Shifting your approach from asking AI for answers to asking it for guidance, explanations, and targeted practice keeps you in control of your education. While AI isn't needed to succeed, using these strategies to use it effectively can help elevate your learning and save a lot of time on studying. To put these interactive workflows into practice, details how to better form AI prompts to get the best results.      A student is preparing for a major exam and wants to use generative AI effectively as part of their study routine. Which of the following study practices are supported by the evidence and principles discussed discussed in this chapter?      The student asks AI to identify the most important concepts from each chapter and creates flashcards based on the AI's prioritization, concentrating study time on what the AI indicates is most likely to appear on the exam.    Incorrect. This seems efficient and strategic, but it fundamentally outsources the judgment of what matters to the AI. The chapter emphasizes that processing ideas with your own mind is \"non-negotiable\" for true mastery. By letting AI determine what's important, the student bypasses the cognitive work of evaluating, synthesizing, and prioritizing information—exactly the kind of engagement that leads to deeper understanding. While AI might correctly identify exam topics, the student hasn't done the mental work to connect those concepts meaningfully.      When encountering a difficult problem, the student asks AI to explain the solution approach step-by-step, then practices applying that same approach to similar problems to build procedural fluency and confidence.    Incorrect. This approach is tempting because it feels like efficient skill-building—learn the method, then practice it. However, the chapter's research on productive struggle shows that this approach skips the critical cognitive preparation that comes from making an initial attempt. When you see the solution approach first, you lose the opportunity to grapple with the problem, make mistakes, and have your brain in that \"especially ready to learn\" state that feedback triggers. The TRACE strategy requires Try and Reason before Ask—even if your attempt is wrong, that attempt itself is what makes the subsequent explanation valuable.      The student uses AI to generate a detailed outline for their study notes, organizes the AI's output into a structured review document, and studies this comprehensive guide to ensure they haven't missed any key concepts.    Incorrect. This sounds thorough and organized, but it's a form of outsourcing the cognitive work of synthesis and organization. The chapter describes how AI tools can be powerful for brainstorming and idea generation, but only when the student has already engaged with the material themselves. Having AI generate the outline means the student never struggles to connect ideas, identify relationships, or determine what fits where—all of which are essential cognitive processes for building durable understanding. The resulting study guide may look comprehensive, but the student's brain hasn't done the work to make that information stick.      The student provides their lecture notes to an AI tool and asks it to identify gaps or inconsistencies in their understanding, then uses the AI's feedback to target specific areas for deeper review.    Incorrect. This approach sounds like responsible self-assessment—using AI to check your work. However, the chapter emphasizes that effective AI use requires you to engage cognitively first, then use AI for feedback. By giving AI your notes and asking it to identify gaps, you're asking the AI to do the diagnostic work that should be part of your own reflective process. The TRACE strategy (Try, Reason, Ask, Compare, Evaluate) puts the burden of identifying confusion on the learner first, then uses AI to verify and extend that thinking, not replace it.      Before asking AI to explain a concept they find confusing, the student writes down their current understanding of the concept and identifies specific points where they're stuck or uncertain.    Correct! This follows the TRACE strategy's \"Try\" and \"Reason\" steps, where students engage their own thinking before seeking AI assistance. Research on desirable difficulties shows that making an initial attempt—even if incomplete—prepares the brain to learn more effectively from subsequent feedback. The student is doing the cognitive work first and using AI strategically to address specific gaps.      After receiving an AI-generated explanation, the student cross-checks key claims against their textbook, lecture notes, or other authoritative sources rather than accepting the AI's response as verified information.    Correct! This demonstrates the \"Evaluate\" step of the TRACE strategy and addresses the hallucination risks discussed in the chapter. The student maintains intellectual independence by verifying AI output against authoritative sources. The chapter emphasizes that AI systems are imperfect and that \"effective AI users do not simply accept AI-generated responses\"—they question them and use their own judgment.      The student asks AI to generate additional practice problems on topics where they need more practice, works through each problem independently, and then uses AI to check their work and explain any mistakes.    Correct! This follows the TRACE framework (Try, Reason, Ask, Compare, Evaluate) and leverages AI as a dynamic study partner. The student maintains cognitive independence by working problems independently first, then uses AI for targeted feedback. This also addresses the study's finding that practice and self-testing are more effective when you've attempted the work yourself before seeking assistance.      The student uses AI to brainstorm potential essay topics or thesis angles, generates several ideas on their own first, and then combines the strongest ideas from both their own brainstorming and the AI's suggestions.    Correct! This follows the effective brainstorming strategy described in the AI-Powered Study Buddy section. By generating their own ideas first and then using AI to expand and complement their thinking, the student remains the primary author and thinker while using AI as a creative partner. The chapter explicitly describes brainstorming as a way to use AI \"to kickstart your own creative process\" without \"outsourcing the actual composition.\"      After attempting to understand a difficult concept on their own, the student asks AI to explain it using an analogy, then attempts to explain the concept back to the AI in their own words and asks the AI to identify any misconceptions in their explanation.    Correct! This approach uses AI as a conversational study partner in a dynamic feedback loop, as described in the AI-Powered Study Buddy section. By explaining the concept back and asking for critique, the student actively processes the material rather than passively consuming information. This creates the kind of retrieval practice and self-testing that the chapter identifies as effective learning strategies.      Use the TRACE strategy (Try, Reason, Ask, Compare, Evaluate) as your test: supported practices always put the student's own thinking first. Unsupported practices let AI do cognitive work (identifying, organizing, diagnosing, or solving) that the student should be doing themselves.     "
},
{
  "id": "ssec-ai-for-personalization-and-accessibility-3",
  "level": "2",
  "url": "sec-ai-powered-study-buddy.html#ssec-ai-for-personalization-and-accessibility-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adaptive learning systems (ALSs) "
},
{
  "id": "ssec-strategies-for-effective-ai-interaction-6",
  "level": "2",
  "url": "sec-ai-powered-study-buddy.html#ssec-strategies-for-effective-ai-interaction-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "API Key "
},
{
  "id": "sa-learning-ai-integration",
  "level": "2",
  "url": "sec-ai-powered-study-buddy.html#sa-learning-ai-integration",
  "type": "Reading Question",
  "number": "2.3.4.1",
  "title": "",
  "body": "  A student is preparing for a major exam and wants to use generative AI effectively as part of their study routine. Which of the following study practices are supported by the evidence and principles discussed discussed in this chapter?      The student asks AI to identify the most important concepts from each chapter and creates flashcards based on the AI's prioritization, concentrating study time on what the AI indicates is most likely to appear on the exam.    Incorrect. This seems efficient and strategic, but it fundamentally outsources the judgment of what matters to the AI. The chapter emphasizes that processing ideas with your own mind is \"non-negotiable\" for true mastery. By letting AI determine what's important, the student bypasses the cognitive work of evaluating, synthesizing, and prioritizing information—exactly the kind of engagement that leads to deeper understanding. While AI might correctly identify exam topics, the student hasn't done the mental work to connect those concepts meaningfully.      When encountering a difficult problem, the student asks AI to explain the solution approach step-by-step, then practices applying that same approach to similar problems to build procedural fluency and confidence.    Incorrect. This approach is tempting because it feels like efficient skill-building—learn the method, then practice it. However, the chapter's research on productive struggle shows that this approach skips the critical cognitive preparation that comes from making an initial attempt. When you see the solution approach first, you lose the opportunity to grapple with the problem, make mistakes, and have your brain in that \"especially ready to learn\" state that feedback triggers. The TRACE strategy requires Try and Reason before Ask—even if your attempt is wrong, that attempt itself is what makes the subsequent explanation valuable.      The student uses AI to generate a detailed outline for their study notes, organizes the AI's output into a structured review document, and studies this comprehensive guide to ensure they haven't missed any key concepts.    Incorrect. This sounds thorough and organized, but it's a form of outsourcing the cognitive work of synthesis and organization. The chapter describes how AI tools can be powerful for brainstorming and idea generation, but only when the student has already engaged with the material themselves. Having AI generate the outline means the student never struggles to connect ideas, identify relationships, or determine what fits where—all of which are essential cognitive processes for building durable understanding. The resulting study guide may look comprehensive, but the student's brain hasn't done the work to make that information stick.      The student provides their lecture notes to an AI tool and asks it to identify gaps or inconsistencies in their understanding, then uses the AI's feedback to target specific areas for deeper review.    Incorrect. This approach sounds like responsible self-assessment—using AI to check your work. However, the chapter emphasizes that effective AI use requires you to engage cognitively first, then use AI for feedback. By giving AI your notes and asking it to identify gaps, you're asking the AI to do the diagnostic work that should be part of your own reflective process. The TRACE strategy (Try, Reason, Ask, Compare, Evaluate) puts the burden of identifying confusion on the learner first, then uses AI to verify and extend that thinking, not replace it.      Before asking AI to explain a concept they find confusing, the student writes down their current understanding of the concept and identifies specific points where they're stuck or uncertain.    Correct! This follows the TRACE strategy's \"Try\" and \"Reason\" steps, where students engage their own thinking before seeking AI assistance. Research on desirable difficulties shows that making an initial attempt—even if incomplete—prepares the brain to learn more effectively from subsequent feedback. The student is doing the cognitive work first and using AI strategically to address specific gaps.      After receiving an AI-generated explanation, the student cross-checks key claims against their textbook, lecture notes, or other authoritative sources rather than accepting the AI's response as verified information.    Correct! This demonstrates the \"Evaluate\" step of the TRACE strategy and addresses the hallucination risks discussed in the chapter. The student maintains intellectual independence by verifying AI output against authoritative sources. The chapter emphasizes that AI systems are imperfect and that \"effective AI users do not simply accept AI-generated responses\"—they question them and use their own judgment.      The student asks AI to generate additional practice problems on topics where they need more practice, works through each problem independently, and then uses AI to check their work and explain any mistakes.    Correct! This follows the TRACE framework (Try, Reason, Ask, Compare, Evaluate) and leverages AI as a dynamic study partner. The student maintains cognitive independence by working problems independently first, then uses AI for targeted feedback. This also addresses the study's finding that practice and self-testing are more effective when you've attempted the work yourself before seeking assistance.      The student uses AI to brainstorm potential essay topics or thesis angles, generates several ideas on their own first, and then combines the strongest ideas from both their own brainstorming and the AI's suggestions.    Correct! This follows the effective brainstorming strategy described in the AI-Powered Study Buddy section. By generating their own ideas first and then using AI to expand and complement their thinking, the student remains the primary author and thinker while using AI as a creative partner. The chapter explicitly describes brainstorming as a way to use AI \"to kickstart your own creative process\" without \"outsourcing the actual composition.\"      After attempting to understand a difficult concept on their own, the student asks AI to explain it using an analogy, then attempts to explain the concept back to the AI in their own words and asks the AI to identify any misconceptions in their explanation.    Correct! This approach uses AI as a conversational study partner in a dynamic feedback loop, as described in the AI-Powered Study Buddy section. By explaining the concept back and asking for critique, the student actively processes the material rather than passively consuming information. This creates the kind of retrieval practice and self-testing that the chapter identifies as effective learning strategies.      Use the TRACE strategy (Try, Reason, Ask, Compare, Evaluate) as your test: supported practices always put the student's own thinking first. Unsupported practices let AI do cognitive work (identifying, organizing, diagnosing, or solving) that the student should be doing themselves.   "
},
{
  "id": "sec-the-anatomy-of-a-prompt-and-writing-loops",
  "level": "1",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Anatomy of a Prompt and Writing Loops",
  "body": " The Anatomy of a Prompt and Writing Loops   In the context of large language models ( LLMs ) large language model LLM —artificial intelligence systems designed to understand and generate human-like text— prompting prompting refers to the method of providing an LLM with a specific input or cue to generate a desired output or perform a task. Prompting is crucial because it directly influences how effectively these models understand and respond to user queries. A well-crafted prompt can guide an LLM to generate more accurate, relevant, and contextually appropriate responses.  A prompt can be constructed using a prompt template prompt template , which is a segment of text containing placeholders or variables that are filled with specific information depending on the context. Consider a template with a single placeholder:   Basic Prompt Template Example  If {premise} , what are your suggestions for a fun weekend?   The variable {premise} is specified by the user to set the context for the model's recommendations. For instance, if the input is the weather is nice this weekend, the final prompt becomes: If the weather is nice this weekend, what are your suggestions for a fun weekend?   When a problem is difficult to describe purely through specific variables, it is common to provide the LLM with a detailed instruction set or context. One effective strategy is to assign a persona or role to the model.   Persona-Based Prompt Template  You are a computer scientist with extensive knowledge in the field of deep learning. Please explain the following computer-related concept to a child around 10 years old, using simple examples whenever possible: {concept}      In-Context Learning  An essential concept in prompt engineering is in-context learning in-context learning . When prompting an LLM, users can include new information outside the model's static training data—such as step-by-step demonstrations—allowing the LLM to learn how to perform a task within that specific conversation.  For example, an LLM can be provided with a few demonstrations of how to perform text classification:   In-Context Demonstration Example  Here are some examples of text classification.  Example 1: We had a delightful dinner together. Label: Positive.  Example 2: I'm frustrated with the delays. Label: Negative.  What is the label for That comment was quite hurtful. ?  Label:   In-context learning is typically characterized by the number of examples provided prior to the target query:   Zero-shot learning zero-shot learning does not involve providing any concrete examples of solved tasks. Instead, it directly prompts the LLM to address a problem using its baseline training.   Zero-Shot Grammar Prompt  You are a helpful assistant, and are great at grammar correction. You will be provided with a sentence in English. The task is to output the correct sentence.  Input: She don't like going to the park.  Output:    One-shot learning one-shot learning expands on this approach by supplying a single demonstration of the desired task, allowing the model to learn from the provided example:   One-Shot Grammar Prompt  You are a helpful assistant, and are great at grammar correction. You will be provided with a sentence in English. The task is to output the correct sentence.  Input: There is many reasons to celebrate.  Output: There are many reasons to celebrate.  Input: She don't like going to the park.  Output:    Few-shot learning few-shot learning provides multiple demonstrations to establish a clear pattern mapping inputs to outputs, which the model follows to generate its prediction:   Few-Shot Grammar Prompt  You are a helpful assistant, and are great at grammar correction. You will be provided with a sentence in English. The task is to output the correct sentence.  Input: There is many reasons to celebrate.  Output: There are many reasons to celebrate.  Input: Me and my friend goes to the gym every day.  Output: My friend and I go to the gym every day.  Input: She don't like going to the park.  Output:     Strategies for Effective Prompts  Writing effective prompts involves strategic structure and clarity. Key techniques include:      Clarity and Precision : Providing a precise, specific description of the task ensures the model remains aligned with expectations.     Step-by-Step Reasoning : Instructing LLMs to reason through a problem step-by-step improves performance on complex logic tasks.     Context Files context files : Standing documents you give an AI to define how it should work across many tasks, such as your role, preferences, style rules, and background. The AI reads them at the start so you do not have to repeat instructions each time.     Reference Context reference context : Supplying authoritative source text and instructing the model to rely exclusively on that reference helps prevent ungrounded predictions.     Formatting Sensitivity : Modifying structural layout or punctuation can significantly impact the model's output consistency.     To bypass manual trial-and-error, LLMs can be used to automate prompt creation through discrete prompt optimization discrete prompt optimization . By instructing the LLM to act as a prompt engineer, the model can iteratively rewrite, expand, and refine instructions.   Automated Prompt Generation Template  You are given a task to complete using LLMs. Please write a prompt to guide the LLMs. {task-description}    To improve reliability on complex operations, tasks can be divided into smaller components. In prompt chaining prompt chaining , the output of one prompt serves directly as the input for the next, building a sequence of specialized operations to accomplish a multi-step task.    Human-AI Writing Loops  In practice, combining structured prompt design with interactive workflows creates an effective human-AI writing loop human-AI writing loop . This process demonstrates how an LLM functions as an active collaborator rather than a single-use tool:      Preparation & Brainstorming : Begin by gathering research and developing an outline. Prompt the AI to brainstorm alternative approaches aligned with that outline.     Drafting : Combine primary knowledge with selected AI ideas to author an initial draft.     Critique & Verification : Ask the AI for detailed feedback and critique on the draft. Evaluate its suggestions critically, verifying all cited facts and claims manually.     Revision & Polishing : Revise the content and use target prompts to refine sentence mechanics, punctuation, and style.     Attribution & Voice Check : Ensure that the final text reflects your distinct voice, accurate reasoning, and includes proper attribution of AI involvement throughout the writing process.     Relying on iterative workflows allows writers to maintain control and precision, identify errors early, and ensure that final artifacts remain original and aligned with primary learning goals.   "
},
{
  "id": "sec-the-anatomy-of-a-prompt-and-writing-loops-2-1",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#sec-the-anatomy-of-a-prompt-and-writing-loops-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "large language models LLMs prompting "
},
{
  "id": "sec-the-anatomy-of-a-prompt-and-writing-loops-2-2",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#sec-the-anatomy-of-a-prompt-and-writing-loops-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prompt template "
},
{
  "id": "ssec-in-context-learning-2",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-in-context-learning-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "in-context learning "
},
{
  "id": "ssec-in-context-learning-6",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-in-context-learning-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Zero-shot learning "
},
{
  "id": "ssec-in-context-learning-8",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-in-context-learning-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "One-shot learning "
},
{
  "id": "ssec-in-context-learning-10",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-in-context-learning-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Few-shot learning "
},
{
  "id": "ssec-writing-good-prompts-3",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-writing-good-prompts-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Clarity and Precision Step-by-Step Reasoning Context Files Reference Context Formatting Sensitivity "
},
{
  "id": "ssec-writing-good-prompts-4",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-writing-good-prompts-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete prompt optimization "
},
{
  "id": "ssec-writing-good-prompts-6",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-writing-good-prompts-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prompt chaining "
},
{
  "id": "ssec-human-ai-writing-loops-2",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-human-ai-writing-loops-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "human-AI writing loop "
},
{
  "id": "ssec-human-ai-writing-loops-3",
  "level": "2",
  "url": "sec-the-anatomy-of-a-prompt-and-writing-loops.html#ssec-human-ai-writing-loops-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Preparation & Brainstorming Drafting Critique & Verification Revision & Polishing Attribution & Voice Check "
},
{
  "id": "sec-spotting-hallucinations",
  "level": "1",
  "url": "sec-spotting-hallucinations.html",
  "type": "Section",
  "number": "2.5",
  "title": "Spotting Hallucinations",
  "body": " Spotting Hallucinations   A crucial aspect of AI literacy is learning how to fact-check and verify AI output—because simply put: AI makes things up! In computer science, this phenomenon is known as a hallucination hallucination , where a Large Language Model (LLM) generates information that sounds completely plausible and authoritative, yet is factually incorrect or entirely fabricated. As students increasingly rely on generative AI tools for research and coursework, hallucinations pose a growing threat to learning, critical thinking, and academic integrity. To navigate these tools safely and effectively, AI literacy must expand beyond simple prompt engineering to teach users how to spot, investigate, and respond to fabricated output before accepting it as truth.    Why AI Fabricates Information  In particular, large language models ( LLMs ) large language model LLM such as ChatGPT or Google Gemini are built around fundamental generation mechanics:     Designed to predict patterns, not create a repository of truth.    Generate text based on what sounds right, not what is right.    Designed to \"fill in the blanks\" rather than say they don't know.     These hallucinations arise because LLMs are trained to predict next-word sequences through statistical pattern prediction—selecting the most probable next word rather than retrieving verified facts from a database. Despite being technically inclined, many users still view AI as a search engine that looks up stored information. This misconception overlooks the core mechanism of LLMs and leads users to mistake fluent text for factual accuracy. Because these models lack built-in mechanisms to distinguish between learned patterns and plausible fabrications, they produce inaccurate information confidently and convincingly—so much so that AI hallucinations have even made their way into mainstream publications.    Manifestations of Hallucinations  In practice, hallucinations manifest in several forms: fabricated citations with non-existent authors, false historical facts or dates, invented statistics, incorrect explanations of complex concepts, and flawed code presented with apparent confidence.  Students most easily detect hallucinations in coding and technical topics because the output is immediately verifiable—code can be executed and tested against expected outcomes. This highlights a critical verifiability gap: AI is safest when outputs can be objectively validated, yet students frequently rely on it for tasks where verification is difficult, such as evaluating conceptual understanding or argument quality. In these qualitative areas, plausible but incorrect reasoning easily goes unnoticed without checking external ground truths.    Strategies for Fact-Checking AI Output  For this reason, you should always verify the facts and citations an AI provides. It is never a good idea to assume that AI is giving you accurate information. Outputs should always be checked using strategies such as:      Direct Source Requests : If AI makes a claim, ask it directly to cite the sources it is using for that claim.     Citation Verification : When AI provides sources or citations, verify that they actually exist.     Independent Cross-Checking : Make sure you can find the sources and citations outside of the AI tool you are using.     Source Evaluation : If sources and citations are real, check for bias and reliability as you would with any traditional source.      "
},
{
  "id": "sec-spotting-hallucinations-2-1",
  "level": "2",
  "url": "sec-spotting-hallucinations.html#sec-spotting-hallucinations-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hallucination "
},
{
  "id": "ssec-why-ai-fabricates-information-2",
  "level": "2",
  "url": "sec-spotting-hallucinations.html#ssec-why-ai-fabricates-information-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "large language models LLMs "
},
{
  "id": "ssec-verification-strategies-3",
  "level": "2",
  "url": "sec-spotting-hallucinations.html#ssec-verification-strategies-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Direct Source Requests Citation Verification Independent Cross-Checking Source Evaluation "
},
{
  "id": "sec-academic-integrity-and-ai-policies",
  "level": "1",
  "url": "sec-academic-integrity-and-ai-policies.html",
  "type": "Section",
  "number": "2.6",
  "title": "Academic Integrity and AI Policies",
  "body": " Academic Integrity and AI Policies   AI has complicated the concept of academic integrity academic integrity . Some rationalize that everybody uses AI, or AI is just like any other technology tool. Be faithful to this principle: the work you turn in must be authentically yours. Copying AI-produced content verbatim and representing it as your own without attribution is cheating. Cheating with AI deprives you of the opportunity to develop your own skills and intellectual confidence. Your personal development requires you to do the hard work of learning.    The Bright Red Line  If your professor says no use of AI in their class, or on individual assignments, follow the rules. Remember that the rules may vary on certain assignments. In some cases, you may even be required to use AI. To avoid crossing the cheating red line, ask for specific instructions on the use of AI on each assignment.    When the Red Line Can Be a Bit Fuzzy  Some assignments will permit or even require the use of AI. In these cases, keep these basic principles in mind:  When AI is allowed, use it to get oriented to a topic and gather information. Then, after doing your own research and producing a rough draft on your own, share it with the AI systems and ask for feedback and ideas about what you are missing or what could be revised. This will allow you to remain the main author of the project, with AI providing feedback.  No matter how you use AI, the key is to be honest and transparent, giving clear attribution to the ways AI contributed to the work.    All About Attribution  Academic honesty requires that you cite (attribute) the original source of all materials that are not your own. This transparency allows others to understand where information comes from and evaluate its credibility. Plagiarism Plagiarism , a failure to properly attribute sources, is a serious breach of academic integrity.  Follow instructions from your professors on how to cite the use of AI in an assignment. The rules may vary from class to class. The standards for AI attribution continue to evolve as new AI tools emerge and higher education adapts.    Basic Elements of AI Attribution  When you explain how AI was used in your work, specify these four elements:     Name the specific AI tools used    Explain the purpose of the use (brainstorming, data analysis, image generation, copyediting, etc.)    Assess the extent of the AI influence (minimal, moderate, or extensive)    Declare the role of human oversight in reviewing and verifying the AI output     Four ways to attribute the role of AI in your work:      List the use of AI in the acknowledgements section:  The authors acknowledge moderate use of ChatGPT (OpenAI, 2024) in reviewing initial drafts of this material and suggesting revisions for clarity. The final content was reviewed and edited by the authors, who take full responsibility for the work.      Cite the AI like a source in footnotes, endnotes, or bibliography:  OpenAI. (2024). ChatGPT (Jan 2024 version) [Large language model]. Retrieved from      Declare the use of AI in methodology:  AI-assisted data analysis using Python was used to a minimal level, identifying patterns and outlier test results which were then reviewed for accuracy by the authors.      Inline attribution within the text:  According to a summary generated by ChatGPT (2025) and reviewed for accuracy by the author, the main themes of the series of essays on this topic…        Navigating AI Responsibly  Ultimately, academic integrity in the age of AI comes down to intent and transparency. Use AI to support your learning—not to shortcut it. By seeking clear guidance from your professors, maintaining boundaries, and consistently attributing any AI assistance, you preserve your academic integrity while building the skills and intellectual confidence necessary for long-term success.   "
},
{
  "id": "sec-academic-integrity-and-ai-policies-2-1",
  "level": "2",
  "url": "sec-academic-integrity-and-ai-policies.html#sec-academic-integrity-and-ai-policies-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "academic integrity "
},
{
  "id": "ssec-all-about-attribution-2",
  "level": "2",
  "url": "sec-academic-integrity-and-ai-policies.html#ssec-all-about-attribution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Plagiarism "
},
{
  "id": "sec-mythbusting-ch2",
  "level": "1",
  "url": "sec-mythbusting-ch2.html",
  "type": "Section",
  "number": "2.7",
  "title": "Mythbusting",
  "body": " Mythbusting   Now that you have a better understanding of how to use AI as a learning tool—from crafting effective prompts to spotting hallucinations and navigating academic integrity—let's officially dispel some myths about AI's role in education, its complexity, and its potential to replace human educators.    Misconception: AI is too complex for educators  Reality: AI is not inherently complex for educators to use. User-friendly AI tools are accessible and educators can learn to utilize them effectively with support. Many AI-powered educational tools, such as adaptive learning platforms and personalized learning systems, can be integrated into lesson plans without demanding intricate technical knowledge. Educators can effectively use AI tools to enhance their teaching methodologies.  Why it matters: Believing AI is too complex for educators can prevent its beneficial integration into education. Educators who feel capable of using AI are more likely to adopt it and help students develop AI literacy. Providing educators with training and accessible tools empowers them to harness AI's potential for improving education.    Misconception: AI is expensive  Reality: Various affordable or free AI resources are accessible to educators, debunking the notion of AI exclusivity due to costs. OpenAI's offerings such as DALL-E 2 and ChatGPT, Bard, and Google AI-infused apps provide free tools for various applications. Quizizz, SaneBox, Decktopus, and Character AI offer accessible AI functionalities for teachers. These diverse AI tools demonstrate that AI resources are not exclusive to those with large budgets.  Why it matters: The belief that AI is expensive limits its adoption, particularly in resource-constrained educational settings. Recognizing the availability of free and affordable AI tools enables broader access and innovation. It also challenges the narrative that only large corporations can benefit from AI, promoting more equitable distribution of AI's advantages.    Misconception: AI is a threat to schools  Reality: AI enhances efficiency but requires ethical implementation and oversight. It complements but does not replace the fundamental role of educators in quality education. While AI can enrich student learning, aid decision-making, and streamline processes, it must be implemented ethically and monitored vigilantly. Schools must maintain a human-centric approach and be vigilant against the dangers of excessive reliance on technology.  Why it matters: The belief that AI is a threat to schools can prevent its beneficial integration into education. Understanding that AI is a tool that can complement rather than replace educators helps reduce unnecessary fear and encourages productive adoption. This perspective supports a balanced approach where AI enhances educational practices while human educators remain central to the learning experience.    Misconception: AI can solve all educational problems  Reality: Even with effective AI integration, AI cannot address multifaceted issues such as socioeconomic disparities or personalized learning needs without human intervention. Educational challenges include unequal access to quality education, providing mental health support for students, fostering critical thinking skills, and teaching ethics, moral values, and social responsibility. These require nuanced human qualities like subjective interpretation and moral reasoning that are beyond AI's capacity.  Why it matters: Overestimating AI's ability to solve educational problems leads to neglect of the human elements essential to education. Understanding AI's limitations ensures that it is used as a tool to support, not replace, educators and that investments in education address the root causes of educational challenges rather than relying on technological fixes.    Misconception: AI is only for STEM subjects  Reality: While AI is highly applicable in STEM, its influence extends far beyond. AI fosters social-emotional skills among individuals with autism through virtual companions, revolutionizes physical education, cultivates ethical thinking, promotes cooperative problem-solving, transforms political science education, and enhances music education. Studies have demonstrated AI's successful use across diverse domains, from healthcare and education to arts and humanities.  Why it matters: The misconception that AI is only for STEM limits its potential applications in other fields and discourages non-STEM professionals from engaging with AI. Recognizing AI's broad applicability helps democratize AI literacy and ensures that its benefits reach all sectors of society. It also encourages interdisciplinary approaches to problem-solving.     Card Sort: Fact or Myth   Sort the following statements into two categories: Fact or Myth. Use the information provided in the chapter to determine the correct classification for each statement.    Review the myths and realities above and throughout .     Fact  Using AI on unsupervised homework can boost assignment scores, but routine reliance causes a significant drop in performance on supervised exams.  Tech-savvy students with high risk tolerance and strong computer skills are actually more likely to experience reduced critical thinking when using AI regularly.  An AI model can generate a grammatically flawless, highly detailed, and confident response that is entirely fabricated from start to finish.  Students who regularly depend on generative AI for coursework show a steady decline in their willingness to reflect and think critically over time.    Myth  Integrating generative AI into modern coursework typically requires educators to undergo specialized technical training or learn computer programming.  When an LLM responds to a prompt, it searches an internal database of verified facts and sources to assemble an accurate answer.  Accessing generative AI tools that offer genuine educational value generally requires a dedicated school or department budget.  With thoughtful implementation, advanced AI systems can serve as a primary solution for systemic challenges like student engagement and equity gaps.  While generative AI has creative applications in the humanities, its main utility and practical benefits remain largely concentrated in STEM subjects.      "
},
{
  "id": "fact-or-myth",
  "level": "2",
  "url": "sec-mythbusting-ch2.html#fact-or-myth",
  "type": "Reading Question",
  "number": "2.7.1",
  "title": "Card Sort: Fact or Myth.",
  "body": " Card Sort: Fact or Myth   Sort the following statements into two categories: Fact or Myth. Use the information provided in the chapter to determine the correct classification for each statement.    Review the myths and realities above and throughout .     Fact  Using AI on unsupervised homework can boost assignment scores, but routine reliance causes a significant drop in performance on supervised exams.  Tech-savvy students with high risk tolerance and strong computer skills are actually more likely to experience reduced critical thinking when using AI regularly.  An AI model can generate a grammatically flawless, highly detailed, and confident response that is entirely fabricated from start to finish.  Students who regularly depend on generative AI for coursework show a steady decline in their willingness to reflect and think critically over time.    Myth  Integrating generative AI into modern coursework typically requires educators to undergo specialized technical training or learn computer programming.  When an LLM responds to a prompt, it searches an internal database of verified facts and sources to assemble an accurate answer.  Accessing generative AI tools that offer genuine educational value generally requires a dedicated school or department budget.  With thoughtful implementation, advanced AI systems can serve as a primary solution for systemic challenges like student engagement and equity gaps.  While generative AI has creative applications in the humanities, its main utility and practical benefits remain largely concentrated in STEM subjects.    "
},
{
  "id": "sec-trees-and-graphs",
  "level": "1",
  "url": "sec-trees-and-graphs.html",
  "type": "Section",
  "number": "3.1",
  "title": "Trees and Graphs",
  "body": " Trees and Graphs   The search methods we will be dealing with in this chapter are defined on trees and graphs, so we must first go over what trees are and how they work. Throughout this section, we will use the following tree as a guiding example for visualizing the definitions.   Unlabeled tree structure.   A directed tree diagram consisting of six empty circles connected by downward-pointing arrows.   A simple tree diagram showing a hierarchical structure. The diagram is composed of six empty, unlabeled circles. At the top is a single circle with two arrows branching left and right into two more circles. The left circle then branches further into three more circles arranged side-by-side at the bottom. All arrows connecting these circles are pointing strictly downward, indicating the direction of the hierarchy.       Tree Definitions   node Node — the general term for a structure which contains an item, such as a character or even another data structure.   edge Edge — the connection between two nodes. In a tree, the edge will be pointing in a downward direction.   Tree diagram with nodes and edges explicitly labeled.   The empty tree diagram with every circle labeled as \"node\" and every connecting arrow labeled as \"edge\".   The same hierarchical tree diagram from the previous figure, with all structural elements now labeled. Every one of the six circles in the diagram is labeled with the word \"node.\" Every arrow connecting these circles is labeled with the word \"edge.\" This provides a clear visual distinction between the two fundamental components of the tree: the points of data storage (nodes) and the directional connections between them (edges).     This tree has five edges and six nodes. There is no limit to the number of nodes in a tree. The only stipulation is that the tree is fully connected. This means that there cannot be disjoint portions of the tree.   parent node Parent node — a node that is a direct predecessor to one or more nodes.   child node Child node — a node that is a direct successor of another node. In a general tree, the children of a node are an unordered set. There is not a fixed or defined order for generic trees. Child nodes must have exactly one parent node. However, there is no limit to the number of child nodes a parent node can have, but to be a parent node, the node must have at least one child node.   Two tree diagrams illustrating the parent-child relationship from different starting points.   Two side-by-side tree diagrams showing how different nodes can be labeled as parent or child depending on the chosen perspective.   Two identical hierarchical tree diagrams placed side-by-side, demonstrating parent and child relationships using different reference points. In the tree on the left, the topmost node is labeled \"parent,\" with two edges branching down to two nodes, both of which are labeled \"child.\" In the tree on the right, the topmost node is empty. The left node, which receives an edge from the top, is labeled \"parent.\" This node branches down into three nodes at the bottom, all of which are labeled \"child.\" Together, these two diagrams show that a \"parent\" node is simply one that has direct successors, while a \"child\" node is a direct successor of another node.      root node Root node — the topmost node of the tree that has no parent. To be a tree, there MUST be only one root. Also, a tree consisting of only a single node is still considered a tree and that single node would be the root.   Tree diagram with root node explicitly labeled.   The empty tree diagram with the single node at the very top labeled \"root\".   The same hierarchical tree diagram from the previous figures, with one label applied. The single node positioned at the very top of the structure—which has no incoming arrows—is labeled \"root.\" This node acts as the entry point for the entire tree. The rest of the nodes remain empty, with the root node branching down into the rest of the hierarchy, illustrating that a tree must have exactly one root node.     A rule of thumb for discerning trees is this: if you imagine holding the tree up by the root and gravity took effect, then all edges must be pointing downward.   sibling nodes Sibling nodes — nodes with the same parent.   Tree diagram showing two nodes that share the same direct parent labeled as sibings.   The tree diagram with the top node labeled \"Parent\" and its two direct children labeled \"Sibling\".   The same hierarchical tree diagram, now used to demonstrate the concept of siblings. The root node is labeled \"Parent.\" From this parent node, two edges branch downward to two separate nodes. Both of these direct child nodes are labeled \"Sibling.\" This visual shows that siblings are nodes that share the exact same parent.      leaf Leaf — a node with no children. This tree has four leaves. There is no limit to how many leaves can be in a tree.   Tree diagram showing nodes with no children labeled as leaves.   The tree diagram with the four nodes that have no outgoing arrows labeled \"leaf\".   The same hierarchical tree diagram, illustrating leaf nodes. The four nodes located at the very ends of their respective branches—meaning they have no outgoing arrows pointing to any other nodes—are each labeled with the word \"leaf.\" All the parent nodes remain unlabeled, demonstrating that leaves are strictly nodes at the bottom of a tree.       Real World Application of Tree Structure  Many operating systems use a tree structure to organize your directories, folders, and files. Some of you may have a folder, within afolder, within a folder, that leads to your assignments files. The files you reach from a folder would be considered the leaf nodes while the folder(s) that got you to those files would be the parent nodes. Here is a visual of how the files and folders may look as a tree.   A visual representation of a computer file system organized as a tree structure.   A tree diagram with icon-based nodes illustrating a hierarchy of folders and files on a computer.   A tree diagram demonstrating a directory structure commonly used in operating systems. At the top, a root folder icon labeled \"Student_Files\" branches down into four separate subfolder nodes: \"Math,\" \"Physics,\" \"Literature,\" and \"Biology.\" Each of these subfolders acts as a parent node to various file nodes listed beneath them. The files consist of homework, projects and assignments. A box at the bottom of the image clarifies that blue folder icons represent directories, while white document icons represent files. All files are positioned as leaf nodes at the bottom of their branches.       Graphs   graph Graph — a set of nodes connected by edges.  The difference between trees and graphs is that trees are connected graph connected (every pair of nodes has a path between them), and all nodes in a tree must descend from the root in a hierarchy where each node only has one parent. This also means that trees are a subset of graphs (all trees are graphs but all graphs are not trees).  Here is a graph that cannot be a tree because one node has two parents.   A graph with a node having two parents   A graph with two nodes labeled \"Parent\", that both point to the same node, making the node have two parents   The same graph stucture with specific nodes labeled to demonstrate a parent-child relationship. The upmost node is labeled \"Parent\", and branches down left and right to two separate nodes. The left node is also labeled \"Parent,\" and a bolded arrow points horizontally from this left \"Parent\" node to the right node, which is labeled \"Child.\" This bolded arrow highlights that the node can be a direct descendant of more than one node.     disconnected graph Disconnected Graph - A graph where not all nodes are connected by edges.  This graph has two separate pieces that are not connected by an edge, making it disconnected.   A disconnected graph with two separate components.   A graph diagram consisting of two entirely separate, unconnected groups of nodes.   A graph diagram showing two completely disjoint structures. On the right, a single vertical pair of nodes is connected by a downward arrow. On the left, a larger five-node structure branches into a hierarchy. There is no arrow or edge connecting the two components, illustrating that the graph is disconnected.       Real World Examples of Graphs  Graphs are used to model relationships in many real-world domains. Here are some common examples:   Social Networks   Nodes: Users  Edges: Friendships, follows, or connections  Example: Facebook's friend graph or LinkedIn's professional network.    Transportation Networks   Nodes: Locations (cities, stations, airports)  Edges: Roads, railways, or flight routes  Example: Airline route maps where edges may have weights like distance or cost.    Web Page Linking (Internet Graph)   Nodes: Web pages  Edges: Hyperlinks between pages  Example: Google's PageRank algorithm models the web as a directed graph.    Supply Chain and Logistics   Nodes: Warehouses, suppliers, distribution centers  Edges: Shipping routes or supply relationships  Example: Optimizing delivery paths for e-commerce.     Reading Question    Which of the following are true about trees?      siblings share the same parent node    correct      nodes can have 2 parents    nodes can only have one parent      each node has children    leaf nodes have no children      hierarchy    correct      trees must have at least 2 nodes    trees only need one node (the root)      trees must be connected    correct       "
},
{
  "id": "fig-tree-empty",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-tree-empty",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " Unlabeled tree structure.   A directed tree diagram consisting of six empty circles connected by downward-pointing arrows.   A simple tree diagram showing a hierarchical structure. The diagram is composed of six empty, unlabeled circles. At the top is a single circle with two arrows branching left and right into two more circles. The left circle then branches further into three more circles arranged side-by-side at the bottom. All arrows connecting these circles are pointing strictly downward, indicating the direction of the hierarchy.    "
},
{
  "id": "ssec-tree-definitions-2",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-tree-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "node Node "
},
{
  "id": "ssec-tree-definitions-3",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-tree-definitions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "edge Edge "
},
{
  "id": "fig-tree-node-edge",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-tree-node-edge",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " Tree diagram with nodes and edges explicitly labeled.   The empty tree diagram with every circle labeled as \"node\" and every connecting arrow labeled as \"edge\".   The same hierarchical tree diagram from the previous figure, with all structural elements now labeled. Every one of the six circles in the diagram is labeled with the word \"node.\" Every arrow connecting these circles is labeled with the word \"edge.\" This provides a clear visual distinction between the two fundamental components of the tree: the points of data storage (nodes) and the directional connections between them (edges).    "
},
{
  "id": "ssec-tree-definitions-6",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-tree-definitions-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parent node Parent node "
},
{
  "id": "ssec-tree-definitions-7",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-tree-definitions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "child node Child node "
},
{
  "id": "fig-tree-parents-children",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-tree-parents-children",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " Two tree diagrams illustrating the parent-child relationship from different starting points.   Two side-by-side tree diagrams showing how different nodes can be labeled as parent or child depending on the chosen perspective.   Two identical hierarchical tree diagrams placed side-by-side, demonstrating parent and child relationships using different reference points. In the tree on the left, the topmost node is labeled \"parent,\" with two edges branching down to two nodes, both of which are labeled \"child.\" In the tree on the right, the topmost node is empty. The left node, which receives an edge from the top, is labeled \"parent.\" This node branches down into three nodes at the bottom, all of which are labeled \"child.\" Together, these two diagrams show that a \"parent\" node is simply one that has direct successors, while a \"child\" node is a direct successor of another node.    "
},
{
  "id": "ssec-tree-definitions-9",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-tree-definitions-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "root node Root node "
},
{
  "id": "fig-tree-root",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-tree-root",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": " Tree diagram with root node explicitly labeled.   The empty tree diagram with the single node at the very top labeled \"root\".   The same hierarchical tree diagram from the previous figures, with one label applied. The single node positioned at the very top of the structure—which has no incoming arrows—is labeled \"root.\" This node acts as the entry point for the entire tree. The rest of the nodes remain empty, with the root node branching down into the rest of the hierarchy, illustrating that a tree must have exactly one root node.    "
},
{
  "id": "ssec-tree-definitions-12",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-tree-definitions-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sibling nodes Sibling nodes "
},
{
  "id": "fig-tree-siblings",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-tree-siblings",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " Tree diagram showing two nodes that share the same direct parent labeled as sibings.   The tree diagram with the top node labeled \"Parent\" and its two direct children labeled \"Sibling\".   The same hierarchical tree diagram, now used to demonstrate the concept of siblings. The root node is labeled \"Parent.\" From this parent node, two edges branch downward to two separate nodes. Both of these direct child nodes are labeled \"Sibling.\" This visual shows that siblings are nodes that share the exact same parent.    "
},
{
  "id": "ssec-tree-definitions-14",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-tree-definitions-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "leaf Leaf "
},
{
  "id": "fig-tree-leaf",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-tree-leaf",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " Tree diagram showing nodes with no children labeled as leaves.   The tree diagram with the four nodes that have no outgoing arrows labeled \"leaf\".   The same hierarchical tree diagram, illustrating leaf nodes. The four nodes located at the very ends of their respective branches—meaning they have no outgoing arrows pointing to any other nodes—are each labeled with the word \"leaf.\" All the parent nodes remain unlabeled, demonstrating that leaves are strictly nodes at the bottom of a tree.    "
},
{
  "id": "fig-file-tree",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-file-tree",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " A visual representation of a computer file system organized as a tree structure.   A tree diagram with icon-based nodes illustrating a hierarchy of folders and files on a computer.   A tree diagram demonstrating a directory structure commonly used in operating systems. At the top, a root folder icon labeled \"Student_Files\" branches down into four separate subfolder nodes: \"Math,\" \"Physics,\" \"Literature,\" and \"Biology.\" Each of these subfolders acts as a parent node to various file nodes listed beneath them. The files consist of homework, projects and assignments. A box at the bottom of the image clarifies that blue folder icons represent directories, while white document icons represent files. All files are positioned as leaf nodes at the bottom of their branches.    "
},
{
  "id": "ssec-graphs-2",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-graphs-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph Graph "
},
{
  "id": "ssec-graphs-3",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-graphs-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "connected graph connected "
},
{
  "id": "fig-graph-two-parents",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-graph-two-parents",
  "type": "Figure",
  "number": "3.1.8",
  "title": "",
  "body": " A graph with a node having two parents   A graph with two nodes labeled \"Parent\", that both point to the same node, making the node have two parents   The same graph stucture with specific nodes labeled to demonstrate a parent-child relationship. The upmost node is labeled \"Parent\", and branches down left and right to two separate nodes. The left node is also labeled \"Parent,\" and a bolded arrow points horizontally from this left \"Parent\" node to the right node, which is labeled \"Child.\" This bolded arrow highlights that the node can be a direct descendant of more than one node.    "
},
{
  "id": "ssec-graphs-6",
  "level": "2",
  "url": "sec-trees-and-graphs.html#ssec-graphs-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "disconnected graph Disconnected Graph "
},
{
  "id": "fig-graph-disconnected",
  "level": "2",
  "url": "sec-trees-and-graphs.html#fig-graph-disconnected",
  "type": "Figure",
  "number": "3.1.9",
  "title": "",
  "body": " A disconnected graph with two separate components.   A graph diagram consisting of two entirely separate, unconnected groups of nodes.   A graph diagram showing two completely disjoint structures. On the right, a single vertical pair of nodes is connected by a downward arrow. On the left, a larger five-node structure branches into a hierarchy. There is no arrow or edge connecting the two components, illustrating that the graph is disconnected.    "
},
{
  "id": "par-social-networks-3",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-social-networks-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nodes: "
},
{
  "id": "par-social-networks-4",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-social-networks-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Edges: "
},
{
  "id": "par-social-networks-5",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-social-networks-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "par-transportation-networks-3",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-transportation-networks-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nodes: "
},
{
  "id": "par-transportation-networks-4",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-transportation-networks-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Edges: "
},
{
  "id": "par-transportation-networks-5",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-transportation-networks-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "par-web-linking-3",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-web-linking-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nodes: "
},
{
  "id": "par-web-linking-4",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-web-linking-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Edges: "
},
{
  "id": "par-web-linking-5",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-web-linking-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "par-supply-chain-3",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-supply-chain-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nodes: "
},
{
  "id": "par-supply-chain-4",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-supply-chain-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Edges: "
},
{
  "id": "par-supply-chain-5",
  "level": "2",
  "url": "sec-trees-and-graphs.html#par-supply-chain-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "treeProperties",
  "level": "2",
  "url": "sec-trees-and-graphs.html#treeProperties",
  "type": "Reading Question",
  "number": "3.1.5.1",
  "title": "",
  "body": "  Which of the following are true about trees?      siblings share the same parent node    correct      nodes can have 2 parents    nodes can only have one parent      each node has children    leaf nodes have no children      hierarchy    correct      trees must have at least 2 nodes    trees only need one node (the root)      trees must be connected    correct     "
},
{
  "id": "sec-introduction-to-state-spaces",
  "level": "1",
  "url": "sec-introduction-to-state-spaces.html",
  "type": "Section",
  "number": "3.2",
  "title": "Introduction to State Spaces",
  "body": " Introduction to State Spaces   In AI, before an algorithm can search for a solution, we must first mathematically represent the problem itself. This representation is called the state space state space . Think of it as a vast map containing every possible configuration or state the problem can be in, from the starting moment to the final, solved state.  Rather than providing a computer with step-by-step instructions on how to solve a problem, we describe the problem in terms of states and allowable moves, enabling the AI agent to navigate the space and find a solution independently. An Agent (or Agentic AI agentic AI ) is AI that can autonomously take multiple actions to complete complex tasks. Example: AI that can research, write, and edit a report without step-by-step guidance.  Imagine you're trying to find your way out of a maze. At any moment, you're standing in one particular location—that's your current state. The maze itself, with all its twists, turns, and dead ends, represents the state space: every possible location you could be in while trying to find the exit.    Nodes, Arcs, and Relationships  The state space is typically visualized as a graph or a tree, a structure composed of two key elements:      node Node: In the state space, each point, or position, is a node. A node represents a specific, instantaneous configuration or snapshot of the problem. The entire search process starts at the initial state initial state (the root node) and aims to reach a goal state goal state (a node that represents the solution).  A state can be simple or composed of multiple variables. For example, in a warehouse delivery robot problem, a single state node might capture:    The robot's current location (aisle 3, section B)  Whether it's carrying a package  The time of day    The important thing to note is that a state only includes relevant information for solving the problem. The robot doesn't need to remember what color its wheels are or the brand name on its side.     arc Arcs and the relationship between nodes: The connections between nodes are called arcs (or edges). An arc represents an action, a move, or operation that transitions the problem from one state to another. These actions are defined by the rules of the problem. For example, in a travel map, an arc is a road connecting two cities.  In the process of searching, when an algorithm moves from one node to the next, we define a relationship:    The node the search is moving from is the parent node parent node.  The node the search is moving to is the child node child node or successor state successor state .    A child node is generated by applying an action to its parent node. The goal of the entire search is to find a sequence of arcs (actions) that connect the initial state to the goal state—a complete, effective path.       Tic-Tac-Toe Example  Using tic-tac-toe as an example, we can visualize game states using a tree structure where each node represents a specific board configuration. Looking at below, let's say you are player X while AI is player O; we see the initial state, the beginning of the game before any moves have been made. The empty board is the root node. From there, the AI has 9 possible actions for its first move because there are 9 available boxes in a tic-tac-toe grid. Each action leads to a new state, represented by the 9 branches in . This movement from one state to another through an action is called a transition . Each time a player makes a move, the game transitions from the current state to a new state.   Initial state of tic-tac-toe with nine possible first moves   Tree diagram showing the initial empty tic-tac-toe board as the root node with nine branches representing all possible first moves for player O   A tree diagram illustrating the state space for the first move in a tic-tac-toe game, where player O moves first. The diagram is structured vertically from top to bottom with evenly spaced, balanced branches. At the top is the root node, which displays an empty 3x3 tic-tac-toe grid representing the initial state before any moves have been made. From this root node, nine branches extend downward in a balanced tree formation, each leading to a node that displays a 3x3 tic-tac-toe grid showing the resulting board state. Each branch corresponds to one of the nine possible first moves for player O, labeled according to the position on the grid: Action 1 (top-left), Action 2 (top-center), Action 3 (top-right), Action 4 (middle-left), Action 5 (center), Action 6 (middle-right), Action 7 (bottom-left), Action 8 (bottom-center), and Action 9 (bottom-right). In each resulting node, the corresponding position on the 3x3 grid contains an O marking, indicating player O's first move. The tree shows that from the empty board, there are exactly nine possible legal moves for the first player, each leading to a distinct board configuration.     After the first move is made, there are only 8 possible moves, no matter what the first move was. zooms in on just one branch from —specifically, the branch where the AI placed its O in the center square (Action 5). shows your 8 possible moves after the AI's first move. You can place an X in any of the 8 available boxes. Each of these moves represents another transition, moving the game from the center-O state to one of 8 new states.   State space tree after the first move (center square)   Tree diagram showing the initial empty board at the root, with nine branches for the first move, and the Action 5 branch expanded to show the eight possible second moves for player X   A tree diagram illustrating two levels of moves in a tic-tac-toe game, where player O moves first followed by player X. The diagram is structured vertically from top to bottom with a hierarchical branching pattern. At the top is the root node, which displays an empty 3x3 tic-tac-toe grid representing the initial state before any moves have been made.  From the root node, nine branches extend downward, each representing a possible first move for player O. These branches are labeled Action 1 through Action 9, corresponding to the nine positions on the tic-tac-toe grid. Each of these nine branches leads to a node displaying the resulting board state with an O placed in the corresponding position.  The Action 5 branch (representing O placed in the center square) is expanded further. From this node, which shows a 3x3 grid with O in the center, eight branches extend downward, labeled Action 5.1 through Action 5.8. Each branch represents a possible second move for player X, corresponding to the eight remaining empty positions on the grid. Each of these eight branches leads to a node displaying the resulting board state, showing a 3x3 grid with O in the center and X placed in one of the eight available positions: top-left, top-center, top-right, middle-left, middle-right, bottom-left, bottom-center, or bottom-right.  The other eight branches from the root (Actions 1, 2, 3, 4, 6, 7, 8, and 9) are shown as complete first-level paths with their corresponding O placed in the respective positions, but these branches are not expanded further, emphasizing that this diagram focuses specifically on the branch where O plays in the center position. The tree is evenly spaced at the first level, with the Action 5 branch receiving additional depth while the others remain unexpanded.     AI uses these state spaces to work towards a goal state. Let's fast forward to a state where only 3 moves are left. shows a state with only 3 empty squares remaining. The goal state is any state where the AI wins the game, so the AI will evaluate its possible actions to see which ones bring it closer to that goal state. Each action the AI considers is a potential transition, moving the game from the current state toward a winning state. By exploring these state spaces and the transitions between them, the AI can look ahead and choose actions that lead toward victory.   State approaching a goal state with three moves remaining   Tree diagram showing a current tic-tac-toe state at the root with three possible moves, each branching to further moves   A tree diagram illustrating three levels of moves in a tic-tac-toe game. The diagram is structured vertically from top to bottom with a hierarchical branching pattern. At the top is the root node, which displays a 3x3 tic-tac-toe grid representing the current state of the game with three empty squares remaining.  From the root node, three branches extend downward, labeled Action 1, Action 2, and Action 3. Each branch represents a possible move for player O, corresponding to one of the three remaining empty positions on the grid. Each node at this level displays the resulting board state with O placed in the corresponding position.  At the second level, each action branches further. Action 1 leads to two branches labeled Action 1.1 and Action 1.2. Action 2 leads to two branches labeled Action 2.1 and Action 2.2. Action 3 leads to two branches labeled Action 3.1 and Action 3.2. Each of these branches represents a possible response move for player X from the resulting state after O's first action. Each node at this level displays the resulting board state with X placed in the corresponding position.  At the third level, Action 1.1 leads to Action 1.1.1, Action 1.2 leads to Action 1.2.1, Action 2.2 leads to Action 2.2.1, and Action 3.2 leads to Action 3.2.1, representing possible moves for player O from the resulting states. Action 2.1 and Action 3.1 are shown without further branching. Each node at this level displays the resulting board state with O placed in the corresponding position.       The Problem-Solving Process  With states and actions defined, an AI agent solves a problem by navigating its state space through a structured four-part framework:    Initial State: The AI determines its starting point within the state space.  Goal State: The AI identifies the target configuration or conditions that define a successful solution.  Actions: The AI evaluates the valid transitions available from its current node to adjacent nodes.  Search: The AI systematically explores sequences of actions to discover a valid sequence of transitions connecting the initial state to the goal state.    During the search process, the AI traverses the state space by evaluating candidate actions and transitioning through successor states. As it evaluates different branches of the state space tree, the algorithm may encounter dead-end nodes that offer no further valid moves, or loops that return to previously visited states. The objective of the search algorithm is to navigate past these inefficient paths and isolate an optimal sequence of actions that leads directly to the goal state.    Real-World State Spaces  State spaces are used throughout AI. Here are some common examples:     Route Planning    States: Cities, intersections, or specific locations  Actions: Driving along roads between locations  Goal: Reaching your destination      Puzzle Solving    States: Arrangements of puzzle pieces  Actions: Moving pieces according to the rules  Goal: A specific arrangement (the solution)      Task Scheduling    States: Which tasks are completed and which remain  Actions: Starting or completing a task  Goal: All tasks completed      Game Playing    States: Positions of pieces on a board  Actions: Making a legal move  Goal: Achieving a winning position         Important Characteristics of State Spaces  State spaces can be enormous. The game of chess has approximately possible states (that's a 1 with 47 zeros after it). Yet AI systems can play chess brilliantly by exploring only a tiny fraction of these states intelligently.  Some state spaces are small enough to explore completely. Others are so vast that we must use clever strategies to find solutions without examining every possibility.    The Challenge of Representation  How you represent states matters tremendously. A well-designed state representation captures everything relevant and nothing irrelevant. It makes the problem easier to solve.  Consider planning a delivery route through a city:    Too simple: Just the city name (not enough detail for route planning)  Too complex: The exact address, traffic conditions, weather, time of day, and the driver's mood (too much detail)  Just right: Location coordinates and which streets connect to which    Finding the right balance is part of the art of AI problem-solving.   "
},
{
  "id": "sec-introduction-to-state-spaces-2-1",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#sec-introduction-to-state-spaces-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "state space "
},
{
  "id": "sec-introduction-to-state-spaces-2-2",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#sec-introduction-to-state-spaces-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Agentic AI "
},
{
  "id": "ssec-nodes-and-arcs-3",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#ssec-nodes-and-arcs-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Node: initial state goal state Arcs and the relationship between nodes: successor state "
},
{
  "id": "ssec-tic-tac-toe-example-2",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#ssec-tic-tac-toe-example-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transition "
},
{
  "id": "fig-tic-tac-toe-initial-state",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#fig-tic-tac-toe-initial-state",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Initial state of tic-tac-toe with nine possible first moves   Tree diagram showing the initial empty tic-tac-toe board as the root node with nine branches representing all possible first moves for player O   A tree diagram illustrating the state space for the first move in a tic-tac-toe game, where player O moves first. The diagram is structured vertically from top to bottom with evenly spaced, balanced branches. At the top is the root node, which displays an empty 3x3 tic-tac-toe grid representing the initial state before any moves have been made. From this root node, nine branches extend downward in a balanced tree formation, each leading to a node that displays a 3x3 tic-tac-toe grid showing the resulting board state. Each branch corresponds to one of the nine possible first moves for player O, labeled according to the position on the grid: Action 1 (top-left), Action 2 (top-center), Action 3 (top-right), Action 4 (middle-left), Action 5 (center), Action 6 (middle-right), Action 7 (bottom-left), Action 8 (bottom-center), and Action 9 (bottom-right). In each resulting node, the corresponding position on the 3x3 grid contains an O marking, indicating player O's first move. The tree shows that from the empty board, there are exactly nine possible legal moves for the first player, each leading to a distinct board configuration.    "
},
{
  "id": "fig-tic-tac-toe-first-move",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#fig-tic-tac-toe-first-move",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " State space tree after the first move (center square)   Tree diagram showing the initial empty board at the root, with nine branches for the first move, and the Action 5 branch expanded to show the eight possible second moves for player X   A tree diagram illustrating two levels of moves in a tic-tac-toe game, where player O moves first followed by player X. The diagram is structured vertically from top to bottom with a hierarchical branching pattern. At the top is the root node, which displays an empty 3x3 tic-tac-toe grid representing the initial state before any moves have been made.  From the root node, nine branches extend downward, each representing a possible first move for player O. These branches are labeled Action 1 through Action 9, corresponding to the nine positions on the tic-tac-toe grid. Each of these nine branches leads to a node displaying the resulting board state with an O placed in the corresponding position.  The Action 5 branch (representing O placed in the center square) is expanded further. From this node, which shows a 3x3 grid with O in the center, eight branches extend downward, labeled Action 5.1 through Action 5.8. Each branch represents a possible second move for player X, corresponding to the eight remaining empty positions on the grid. Each of these eight branches leads to a node displaying the resulting board state, showing a 3x3 grid with O in the center and X placed in one of the eight available positions: top-left, top-center, top-right, middle-left, middle-right, bottom-left, bottom-center, or bottom-right.  The other eight branches from the root (Actions 1, 2, 3, 4, 6, 7, 8, and 9) are shown as complete first-level paths with their corresponding O placed in the respective positions, but these branches are not expanded further, emphasizing that this diagram focuses specifically on the branch where O plays in the center position. The tree is evenly spaced at the first level, with the Action 5 branch receiving additional depth while the others remain unexpanded.    "
},
{
  "id": "fig-tic-tac-toe-goal-state",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#fig-tic-tac-toe-goal-state",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " State approaching a goal state with three moves remaining   Tree diagram showing a current tic-tac-toe state at the root with three possible moves, each branching to further moves   A tree diagram illustrating three levels of moves in a tic-tac-toe game. The diagram is structured vertically from top to bottom with a hierarchical branching pattern. At the top is the root node, which displays a 3x3 tic-tac-toe grid representing the current state of the game with three empty squares remaining.  From the root node, three branches extend downward, labeled Action 1, Action 2, and Action 3. Each branch represents a possible move for player O, corresponding to one of the three remaining empty positions on the grid. Each node at this level displays the resulting board state with O placed in the corresponding position.  At the second level, each action branches further. Action 1 leads to two branches labeled Action 1.1 and Action 1.2. Action 2 leads to two branches labeled Action 2.1 and Action 2.2. Action 3 leads to two branches labeled Action 3.1 and Action 3.2. Each of these branches represents a possible response move for player X from the resulting state after O's first action. Each node at this level displays the resulting board state with X placed in the corresponding position.  At the third level, Action 1.1 leads to Action 1.1.1, Action 1.2 leads to Action 1.2.1, Action 2.2 leads to Action 2.2.1, and Action 3.2 leads to Action 3.2.1, representing possible moves for player O from the resulting states. Action 2.1 and Action 3.1 are shown without further branching. Each node at this level displays the resulting board state with O placed in the corresponding position.    "
},
{
  "id": "ssec-problem-solving-process-3",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#ssec-problem-solving-process-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Initial State: Goal State: Actions: Search: "
},
{
  "id": "ssec-real-world-state-spaces-3",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#ssec-real-world-state-spaces-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Route Planning Puzzle Solving Task Scheduling Game Playing "
},
{
  "id": "ssec-challenge-of-representation-4",
  "level": "2",
  "url": "sec-introduction-to-state-spaces.html#ssec-challenge-of-representation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Too simple: Too complex: Just right: "
},
{
  "id": "sec-uninformed-search",
  "level": "1",
  "url": "sec-uninformed-search.html",
  "type": "Section",
  "number": "3.3",
  "title": "Uninformed Search",
  "body": " Uninformed Search   Now that we understand trees, graphs, and state spaces, we can finally explore how AI systems actually search through these structures to find solutions. In this section, we'll look at uninformed search uninformed search —sometimes called blind search blind search —which is the most basic approach to searching through a state space.  An uninformed search strategy uses only the information that comes with the problem itself: where you start, what moves you can make, and how to recognize when you've reached the goal. The algorithm has no additional guidance about which paths are more promising or how close a state might be to the goal.  Think of it like exploring a maze with no map, no compass, and no sense of direction. You can only move step by step and explore systematically, but you have no \"intuition\" about which direction to head. You might try every path until you eventually find the exit—or get hopelessly lost.  Because they lack guidance, uninformed search methods are generally slower than informed methods and take more time to find solutions. However, they are guaranteed to find a solution (if one exists) and, in some cases, guaranteed to find the best one. This makes them valuable tools when:     No helpful \"rule of thumb\" is available to guide the search    The state space is small enough to explore completely    You need a guaranteed best answer in a known problem domain      Think of It This Way...  Uninformed search is like trying to find a book in a huge library without using the catalog. You have to walk down every aisle, check every shelf, and examine every book until you happen to find the one you're looking for. It will work eventually, but it's not very efficient!     Breadth-First Search (BFS)   Breadth-first search (BFS) breadth-first search BFS is one of the simplest search strategies. It explores all nodes at the current level before moving to the next level. In other words, BFS examines the shallowest (closest to the start) unexamined node first.   How it works:   Imagine you're at the entrance of a maze. BFS is like exploring every path one step at a time: you take one step down every possible corridor, then two steps down every possible corridor, then three steps, and so on. You never go deeper down any single path until you've checked everything at your current distance from the start.  The algorithm works like this:  Start with the initial node and place it in a queue queue (think of a line at a store—first in, first out)  Remove the first node from the queue  If this node is the goal, you're done!  Otherwise, expand the queue by generating all its children and add them to the back of the queue  Repeat until the queue is empty or the goal is found     Properties of BFS:    Properties of Breadth-First Search    Property  What It Means    Complete  Yes—it will always find a solution if one exists    Optimal  Yes—but only if all moves have the same cost    Time  Can be very slow—it may need to explore many nodes    Space  Can use a lot of memory—it stores many nodes at once      Best for: Problems where the shortest path is the goal, the number of possible moves from each state is small, memory is not a concern, and all moves cost the same.   Weakness: BFS can use a huge amount of memory. For a problem where each state has 10 possible moves, BFS might need to store billions of states in memory before finding a solution!   Example: Finding the shortest route in a city where all roads take the same amount of time.    Depth-First Search (DFS)   Depth-first search (DFS) depth-first search DFS takes the opposite approach. DFS explores as far as possible along each branch before turning back. It expands the deepest (farthest from the start) unexpanded node first.   How it works:   Imagine you're exploring a maze by walking down one corridor as far as it goes. When you hit a dead end, you turn back to the last fork and try the next corridor. You keep doing this until you find the exit.  The algorithm works like this:  Start with the initial node and place it on a stack stack (think of a stack of plates—last in, first out)  Remove the top node from the stack  If this node is the goal, you're done!  Otherwise, expand the node by generating all its children and push them onto the stack  Repeat until the stack is empty or the goal is found     Properties of DFS:    Properties of Depth-First Search    Property  What It Means    Complete  No—it can get stuck going in circles forever    Optimal  No—it may find a long, winding path instead of a short one    Time  Can be very slow—it may explore very deep paths    Space  Very efficient—it only stores the current path      Best for: Problems where the solution is deep in the tree, memory is limited, or you need to explore all possible solutions.   Weakness: DFS can get stuck in infinite loops if the state space has cycles. It also might find a solution that is not the best one.   Example: Solving a puzzle where the goal is far from the start, and you want to explore all possibilities without using too much memory.    Depth-Limited Search (DLS)   Depth-limited search (DLS) depth-limited search DLS is a version of DFS that avoids the infinite-loop problem by setting a maximum depth limit. The algorithm stops exploring any branch once it reaches this limit.   How it works:   It works exactly like DFS, but with a rule: \"Don't go deeper than depth L.\" If you reach depth L without finding the goal, simply stop exploring that branch and turn back.   Properties of DLS:    Properties of Depth-Limited Search    Property  What It Means    Complete  No—if your limit is too shallow, you'll miss the solution    Optimal  Only if the solution is within the depth limit    Time  Depends on your chosen limit    Space  Very efficient—it only stores the current path and the limit value      Best for: Problems where you know how deep the solution is, or you want to avoid infinite loops.   Weakness: If you set the limit too low, you might not find the solution. If you set it too high, the search becomes as slow as regular DFS.    Comparing Uninformed Search Strategies   Comparison of all uninformed search strategies    Algorithm  Complete?  Finds Best?  Memory Use  Best For    BFS  Yes  Yes*  High  Shortest path, all moves equal    DFS  No  No  Low  Deep solutions, memory-limited    DLS  No  No  Low  Known depth limit     *Finds the best solution only when all moves have the same cost    When to Use Uninformed Search  Uninformed search is the right tool when:     You have no helpful hints — If you can't define a \"rule of thumb\" to guide the search, uninformed search may be your only option.    The problem is small — For small state spaces (like Tic-Tac-Toe), the extra work of designing a clever strategy isn't worth it.    You need guaranteed results — Uninformed search provides mathematical guarantees that informed methods might not offer.     You're building a foundation — Understanding uninformed search is a prerequisite for understanding informed search, just as learning basic arithmetic comes before algebra.   Choosing Your Uninformed Search Strategy  Think of it like searching for a lost item in a building: If you want to check every room on each floor before moving up, use BFS. If you want to search the same room on every floor (101, 201, 301) before moving to the next, use DFS.    "
},
{
  "id": "intro-uninformed-search-1",
  "level": "2",
  "url": "sec-uninformed-search.html#intro-uninformed-search-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uninformed search blind search "
},
{
  "id": "subsec-breadth-first-search-2",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-breadth-first-search-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Breadth-first search (BFS) "
},
{
  "id": "subsec-breadth-first-search-5",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-breadth-first-search-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "queue "
},
{
  "id": "tbl-bfs-properties",
  "level": "2",
  "url": "sec-uninformed-search.html#tbl-bfs-properties",
  "type": "Table",
  "number": "3.3.1",
  "title": "Properties of Breadth-First Search",
  "body": " Properties of Breadth-First Search    Property  What It Means    Complete  Yes—it will always find a solution if one exists    Optimal  Yes—but only if all moves have the same cost    Time  Can be very slow—it may need to explore many nodes    Space  Can use a lot of memory—it stores many nodes at once    "
},
{
  "id": "subsec-breadth-first-search-8",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-breadth-first-search-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Best for: "
},
{
  "id": "subsec-breadth-first-search-9",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-breadth-first-search-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Weakness: "
},
{
  "id": "subsec-breadth-first-search-10",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-breadth-first-search-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-depth-first-search-2",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-depth-first-search-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Depth-first search (DFS) "
},
{
  "id": "subsec-depth-first-search-5",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-depth-first-search-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stack "
},
{
  "id": "tbl-dfs-properties",
  "level": "2",
  "url": "sec-uninformed-search.html#tbl-dfs-properties",
  "type": "Table",
  "number": "3.3.2",
  "title": "Properties of Depth-First Search",
  "body": " Properties of Depth-First Search    Property  What It Means    Complete  No—it can get stuck going in circles forever    Optimal  No—it may find a long, winding path instead of a short one    Time  Can be very slow—it may explore very deep paths    Space  Very efficient—it only stores the current path    "
},
{
  "id": "subsec-depth-first-search-8",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-depth-first-search-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Best for: "
},
{
  "id": "subsec-depth-first-search-9",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-depth-first-search-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Weakness: "
},
{
  "id": "subsec-depth-first-search-10",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-depth-first-search-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-depth-limited-search-2",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-depth-limited-search-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Depth-limited search (DLS) "
},
{
  "id": "tbl-dls-properties",
  "level": "2",
  "url": "sec-uninformed-search.html#tbl-dls-properties",
  "type": "Table",
  "number": "3.3.3",
  "title": "Properties of Depth-Limited Search",
  "body": " Properties of Depth-Limited Search    Property  What It Means    Complete  No—if your limit is too shallow, you'll miss the solution    Optimal  Only if the solution is within the depth limit    Time  Depends on your chosen limit    Space  Very efficient—it only stores the current path and the limit value    "
},
{
  "id": "subsec-depth-limited-search-7",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-depth-limited-search-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Best for: "
},
{
  "id": "subsec-depth-limited-search-8",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-depth-limited-search-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Weakness: "
},
{
  "id": "tbl-uninformed-comparison",
  "level": "2",
  "url": "sec-uninformed-search.html#tbl-uninformed-comparison",
  "type": "Table",
  "number": "3.3.4",
  "title": "Comparison of all uninformed search strategies",
  "body": " Comparison of all uninformed search strategies    Algorithm  Complete?  Finds Best?  Memory Use  Best For    BFS  Yes  Yes*  High  Shortest path, all moves equal    DFS  No  No  Low  Deep solutions, memory-limited    DLS  No  No  Low  Known depth limit    "
},
{
  "id": "subsec-when-to-use-uninformed-3",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-when-to-use-uninformed-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "You have no helpful hints The problem is small You need guaranteed results "
},
{
  "id": "subsec-when-to-use-uninformed-4",
  "level": "2",
  "url": "sec-uninformed-search.html#subsec-when-to-use-uninformed-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "You're building a foundation "
},
{
  "id": "sec-informed-search",
  "level": "1",
  "url": "sec-informed-search.html",
  "type": "Section",
  "number": "3.4",
  "title": "Informed Search",
  "body": " Informed Search   In the previous section, you learned about uninformed search strategies, where the algorithm had no additional information about the problem beyond its basic definition. Uninformed search methods lack problem-specific knowledge and are too slow for most real-world problems. The good news is that in many situations, we can dramatically improve search speed by using knowledge about the problem itself. This is the core idea behind informed search informed search , also known as heuristic search heuristic search .  Informed search algorithms use problem-specific knowledge to find solutions more efficiently than uninformed methods. The key difference is that informed search uses a heuristic heuristic —a rule of thumb that estimates how close a state is to the goal. This knowledge allows algorithms to prioritize promising directions and dramatically reduce the number of states explored.   Think of It This Way...  Imagine you're trying to find a friend's house in an unfamiliar city. An uninformed search would be like walking down every street systematically until you happen to find the right house. An informed search is like having a GPS that gives you the straight-line distance to your destination—you still don't know every turn, but you at least know which direction is generally correct.     What Is a Heuristic?  A heuristic heuristic is a rule of thumb, a guideline, or an educated guess that helps point the search in a promising direction. In everyday life, we use heuristics all the time:     \"If you're lost in a forest, follow a stream downhill—it will eventually lead to civilization.\"    \"When packing a suitcase, put heavy items at the bottom.\"    \"In a restaurant, choose the dish the waiter recommends—it's probably the freshest.\"     In AI search, a heuristic estimates how far a given state is from the goal. It doesn't need to be perfect—it just needs to be useful. The better the heuristic, the faster the search will find a solution.  For example, in a route-finding problem, a good heuristic might be the straight-line distance to your destination. Even though you can't drive in a straight line, this estimate helps the search focus on cities that are generally in the right direction.    Best-First Search   Best-first search best-first search is a general approach where the algorithm always chooses the most promising node to explore next. It uses an evaluation function to determine which node looks best. The algorithm always picks the node that seems closest to the goal—at least according to its heuristic.  However, the evaluation function may not be perfect. The node that appears to be the \"best\" might not actually be the best in reality. Different strategies use different ways of evaluating which node is \"best.\"    Greedy Best-First Search   Greedy best-first search greedy best-first search always expands the node that appears closest to the goal. It uses only the heuristic to make its decision, completely ignoring how much it has already cost to get there.     How it works:  At each step, pick the node with the lowest heuristic value—the one that seems closest to the goal.    Strengths:  Very fast—it heads straight for what looks like the goal.    Weaknesses:  It can be fooled. A path that looks good at first might turn out to be a dead end, and by then you've already invested time exploring it.      Analogy:  Imagine you're trying to find a friend's house in an unfamiliar city. You know the general direction, so you just keep heading that way, turning down any street that points toward your destination. You might get there quickly, or you might hit a dead end and have to backtrack.    Best for: Situations where speed matters more than finding the absolute best path, and you have a reliable heuristic.    Uniform-Cost Search   Uniform-cost search uniform-cost search uses the cost of the path so far to determine which node to explore next. It expands the node with the lowest path cost path cost (how expensive it has been to get there).     How it works:  At each step, pick the node that has cost the least to reach.    Strengths:  It always finds the cheapest path.    Weaknesses:  It doesn't use any information about the goal, so it might wander around exploring cheap paths that lead nowhere.      Analogy:  Imagine you're looking for the cheapest way to travel across the country. You always take the cheapest next leg of the trip, without considering whether it's actually taking you in the right direction. You might find a very cheap route—or you might end up in the wrong state entirely!    Important: Uniform-cost search is actually considered an uninformed strategy because it doesn't use any goal information—it only looks backward at where you've been, not forward at where you're going.    A* Search   A* search A* search (pronounced \"A-star\") combines the best of both worlds. It considers both how much it has cost to get to a node and how much it will cost to reach the goal from there. It was first published in 1968 by Peter Hart, Nils Nilsson, and Bertram Raphael, and remains one of the most widely used search algorithms more than fifty years later.   How it works:   At each step, pick the node with the lowest value of:   f(n) = cost so far + estimated cost to goal   Where:   cost so far (g) = how expensive it has been to reach this node    estimated cost to goal (h) = how far this node appears to be from the goal      Analogy:  Imagine planning a road trip. You consider both how far you've already driven and how far you still need to go. If one route has already taken you 100 miles but you're almost there, while another has only taken you 10 miles but you're still far away, A* will consider both factors to choose the better route.      Strengths:    It finds the optimal (best) solution—provided your heuristic is good  It's much faster than uninformed search  It balances exploring new areas with following promising paths      Weaknesses:    It uses a lot of memory—it must store all nodes it's considering  It requires a good heuristic to work well  For very large problems, even A* can be too slow        Best for: Route planning, game pathfinding, robotics, and any problem where you need a guaranteed best path and have a good heuristic available.   Properties of A*:    Properties of A* Search    Property  What It Means    Complete  Yes—it will always find a solution if one exists    Optimal  Yes—but only if the heuristic is admissible    Time  Can be slow, but much faster than uninformed search with a good heuristic    Space  Uses a lot of memory—it stores many nodes at once       Heuristic Functions  The quality of a heuristic is crucial. A good heuristic can make A* find a solution in milliseconds. A bad heuristic can make it barely better than blind exploration.    Admissible Heuristics  For A* to guarantee finding the best possible solution, the heuristic must be admissible admissible heuristic . This is a fancy word that simply means: the heuristic never overestimates the true cost. In other words, it's always optimistic—it thinks you're at least as close to the goal as you actually are.   Example: In route planning, straight-line distance is admissible because a straight line is always the shortest possible distance. The actual driving distance will always be at least as long as the straight-line distance.  If a heuristic occasionally overestimates, the search might ignore the best path because it looks too expensive. It might then find a worse path and mistakenly think it's the best one.   Examples of admissible heuristics:   Straight-line distance in route-finding  Number of tiles in the wrong position in the 8-puzzle  Sum of distances of tiles from their goal position (called Manhattan distance Manhattan distance ) in the 8-puzzle      Consistency  A heuristic is consistent consistent heuristic if a simple rule holds: the estimated cost from a node to the goal should never exceed the cost of moving to a neighboring node plus the estimated cost from that neighbor to the goal.  Don't worry too much about the formal definition. What matters is this: most well-designed heuristics are consistent, and consistency guarantees that A* will find the best solution.    Comparing Informed Search Strategies   Comparison of informed search strategies    Algorithm  Complete?  Finds Best?  Memory Use  Best For    Greedy BFS  No  No  Moderate  Speed over optimality    Uniform-Cost  Yes  Yes  High  Cheapest path, no heuristic    A*  Yes  Yes*  High  Optimal path with good heuristic     *Finds the best solution only when the heuristic is admissible and consistent    When to Use Informed Search  Informed search is the right tool when:     You have a good heuristic — If you can define a reliable rule of thumb, informed search will be much faster than uninformed search.    The problem is large — For large state spaces, uninformed search is often too slow to be practical.    You need optimality — With an admissible heuristic, A* guarantees the best solution.    Speed matters — Even a simple heuristic can dramatically reduce search time compared to uninformed methods.      Choosing Your Search Strategy  Think of it like choosing a travel strategy: If you have a good map (heuristic), use it to plan your route (A*). If you're in a hurry and don't need the absolute best route, just head toward your destination (Greedy BFS). If you're on a tight budget and the map is unreliable, take the cheapest steps (Uniform-Cost).    "
},
{
  "id": "intro-informed-search-1",
  "level": "2",
  "url": "sec-informed-search.html#intro-informed-search-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "informed search heuristic search "
},
{
  "id": "intro-informed-search-2",
  "level": "2",
  "url": "sec-informed-search.html#intro-informed-search-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heuristic "
},
{
  "id": "subsec-what-is-a-heuristic-2",
  "level": "2",
  "url": "sec-informed-search.html#subsec-what-is-a-heuristic-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heuristic "
},
{
  "id": "subsec-best-first-search-2",
  "level": "2",
  "url": "sec-informed-search.html#subsec-best-first-search-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Best-first search "
},
{
  "id": "subsec-greedy-best-first-2",
  "level": "2",
  "url": "sec-informed-search.html#subsec-greedy-best-first-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Greedy best-first search "
},
{
  "id": "subsec-greedy-best-first-5",
  "level": "2",
  "url": "sec-informed-search.html#subsec-greedy-best-first-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Best for: "
},
{
  "id": "subsec-uniform-cost-2",
  "level": "2",
  "url": "sec-informed-search.html#subsec-uniform-cost-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Uniform-cost search path cost "
},
{
  "id": "subsec-uniform-cost-5",
  "level": "2",
  "url": "sec-informed-search.html#subsec-uniform-cost-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Important: "
},
{
  "id": "subsec-a-star-search-2",
  "level": "2",
  "url": "sec-informed-search.html#subsec-a-star-search-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "A* search "
},
{
  "id": "subsec-a-star-search-6",
  "level": "2",
  "url": "sec-informed-search.html#subsec-a-star-search-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cost so far (g) estimated cost to goal (h) "
},
{
  "id": "subsec-a-star-search-9",
  "level": "2",
  "url": "sec-informed-search.html#subsec-a-star-search-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Best for: "
},
{
  "id": "subsec-a-star-search-10",
  "level": "2",
  "url": "sec-informed-search.html#subsec-a-star-search-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Properties of A*: "
},
{
  "id": "tbl-astar-properties",
  "level": "2",
  "url": "sec-informed-search.html#tbl-astar-properties",
  "type": "Table",
  "number": "3.4.1",
  "title": "Properties of A* Search",
  "body": " Properties of A* Search    Property  What It Means    Complete  Yes—it will always find a solution if one exists    Optimal  Yes—but only if the heuristic is admissible    Time  Can be slow, but much faster than uninformed search with a good heuristic    Space  Uses a lot of memory—it stores many nodes at once    "
},
{
  "id": "subsec-admissible-heuristics-2",
  "level": "2",
  "url": "sec-informed-search.html#subsec-admissible-heuristics-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "admissible "
},
{
  "id": "subsec-admissible-heuristics-3",
  "level": "2",
  "url": "sec-informed-search.html#subsec-admissible-heuristics-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-admissible-heuristics-5",
  "level": "2",
  "url": "sec-informed-search.html#subsec-admissible-heuristics-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Examples of admissible heuristics: Manhattan distance "
},
{
  "id": "subsec-consistency-2",
  "level": "2",
  "url": "sec-informed-search.html#subsec-consistency-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent "
},
{
  "id": "tbl-informed-comparison",
  "level": "2",
  "url": "sec-informed-search.html#tbl-informed-comparison",
  "type": "Table",
  "number": "3.4.2",
  "title": "Comparison of informed search strategies",
  "body": " Comparison of informed search strategies    Algorithm  Complete?  Finds Best?  Memory Use  Best For    Greedy BFS  No  No  Moderate  Speed over optimality    Uniform-Cost  Yes  Yes  High  Cheapest path, no heuristic    A*  Yes  Yes*  High  Optimal path with good heuristic    "
},
{
  "id": "subsec-when-to-use-informed-3",
  "level": "2",
  "url": "sec-informed-search.html#subsec-when-to-use-informed-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "You have a good heuristic The problem is large You need optimality Speed matters "
},
{
  "id": "sec-adversarial-search",
  "level": "1",
  "url": "sec-adversarial-search.html",
  "type": "Section",
  "number": "3.5",
  "title": "Adversarial Search",
  "body": " Adversarial Search   So far, we've looked at search problems where the environment simply follows the rules—there's no opponent actively working against you. But what happens when your AI has to face an adversary? This is the domain of adversarial search adversarial search , and it's the foundation of game-playing AI.  In adversarial search, the AI agent faces an opponent with opposing goals. The AI must account for the actions of an adversary who is trying to win. This is the kind of search used in game-playing AI, where the AI must plan its moves while assuming the opponent will do everything possible to defeat it.   Think of It This Way...  Imagine playing chess against a friend who's just as good as you. Before making a move, you think not just about what the board looks like now, but what your opponent could do in response, and what you could do after that, and so on. You choose the move that gives you the best result assuming your opponent will make the strongest possible counter-move. That's adversarial search in a nutshell!     The Minimax Algorithm  The fundamental algorithm for adversarial search is Minimax Minimax . In games with two players, the AI evaluates all possible moves to guarantee optimal play. The algorithm assumes that both players play optimally: one player tries to maximize the outcome, while the other tries to minimize it.  Think of it like playing chess against a friend who's just as good as you. Before making a move, you consider not just what the board looks like now, but what your opponent could do in response, and what you could do after that, and so on. You choose the move that gives you the best result assuming your opponent will make the strongest possible counter-move.   How it works:    Explore the game tree to a certain depth  Evaluate the end states (win, lose, draw) using a scoring system  Work backwards up the tree:   If it's your turn, take the maximum value among your options  If it's the opponent's turn, take the minimum value among their options     This allows the AI to look ahead and choose moves that lead to winning positions while assuming the opponent will choose the move that is worst for the AI.    Game State Spaces  The challenge in adversarial search is the size of the state space. For example, chess has an incredibly large state space, making it impossible to explore completely. Games like Tic-Tac-Toe, however, have a small enough state space to explore in its entirety.  Let's revisit Tic-Tac-Toe from . Using the minimax algorithm, the AI can examine all possible moves, evaluate each board position, and choose the move that maximizes its chances of winning—even against an optimal opponent. Because Tic-Tac-Toe has a relatively small state space, the AI can search the entire game tree and play perfectly.   Key insight: With Tic-Tac-Toe, there are only 9 possible first moves, then 8 possible responses, then 7, and so on. The total number of possible games is about 255,168—small enough for a computer to examine all of them.   State space sizes for common games    Game  Approximate States  Searchable?    Tic-Tac-Toe  ~255,168  Yes (fully searchable)    Checkers  ~10^20  Partially (with pruning)    Chess  ~10^47  No (requires heuristics)       Alpha-Beta Pruning  For larger games, the naive Minimax algorithm is too slow. Alpha-Beta Pruning alpha-beta pruning is an optimization that dramatically speeds up Minimax by ignoring branches that cannot possibly affect the final decision.   How it works:    Analogy:  Imagine you're looking for the best route to a destination. You've already found a route that takes 3 hours. While exploring another route, you realize it's already taken 3 hours and you're still far from the destination. You can stop exploring that route immediately—it's already worse than what you've found!   Alpha-beta pruning works the same way. It maintains two values:  Alpha (α) : The best value the AI can guarantee (the lower bound)  Beta (β) : The best value the opponent can guarantee (the upper bound)    If at any point alpha is greater than or equal to beta, the remaining branches can be pruned (cut off) because they cannot improve the outcome.   Result: Alpha-beta pruning can reduce the search time by about half in the best case. This makes it possible to search twice as deep in the same amount of time!    Why Larger Games Still Need Heuristics  Even with alpha-beta pruning, games like chess (≈10^47 states) remain too large to search completely. This is why game-playing AI systems also use heuristics to evaluate board positions without searching all the way to the end.  Instead of searching all the way to a win or loss, the AI searches to a limited depth and then uses an evaluation function evaluation function to estimate how favorable the current position is. For example, a chess AI might evaluate a position by:    Counting the value of pieces on the board (queens = 9, rooks = 5, bishops = 3, etc.)  Considering king safety and pawn structure  Evaluating control of the center of the board  Looking at mobility (how many possible moves a player has)     Think of It This Way...  A good chess player doesn't need to see every possible move until checkmate. Instead, they evaluate a position using their experience and knowledge: \"My pieces are well-developed, I control the center, and my king is safe.\" An AI evaluation function does the same thing—it uses a heuristic to estimate how good a position is without exploring every possible future move.   This is how systems like Deep Blue Deep Blue (the chess AI that beat world champion Garry Kasparov Kasparov, Garry ) and AlphaGo AlphaGo (the Go AI that beat world champion Lee Sedol Sedol, Lee ) achieved world-class performance—they combined deep search with sophisticated evaluation heuristics.    Real-World Applications  Adversarial search extends well beyond board games:     Video Game AI  Non-player characters (NPCs) that plan their actions against you in games like Halo , StarCraft , or The Last of Us    Robotics  Planning in environments where other robots or people may interfere with your robot's goals    Security  Cybersecurity systems defending against attackers who are actively trying to break in    Economics  Strategic decision-making in competitive markets where other companies are trying to out-compete you      Putting It All Together  Adversarial search is everywhere—from the chess AI on your phone to the NPC enemies in your favorite video game. The key insight is that when you face an opponent, you need to plan not just for what you want to do, but for what your opponent will do in response. Minimax and alpha-beta pruning give AI systems the ability to think several steps ahead, anticipating and countering an opponent's best moves.     Summary: Key Concepts in Adversarial Search   Key concepts in adversarial search    Concept  What It Does  Best Used For    Minimax  Explores all possible moves assuming optimal play from both sides  Small games that can be fully explored (Tic-Tac-Toe)    Alpha-Beta Pruning  Speeds up minimax by ignoring branches that can't affect the outcome  Larger games where minimax alone is too slow    Evaluation Function  Estimates how good a position is without searching to the end  Very large games like chess and Go        Match the Search Methods   Match each search method with it's description.    Review , , and .     Informed Search  Prioritizes nodes that appear closer to the goal, but can be misled by inaccurate guidance    Uninformed Search  Follows a fixed pattern of exploration that guarantees success only when applied correctly    Adversarial Search  Applies different selection criteria at alternating levels      "
},
{
  "id": "intro-adversarial-search-1",
  "level": "2",
  "url": "sec-adversarial-search.html#intro-adversarial-search-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "adversarial search "
},
{
  "id": "subsec-minimax-algorithm-2",
  "level": "2",
  "url": "sec-adversarial-search.html#subsec-minimax-algorithm-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Minimax "
},
{
  "id": "subsec-minimax-algorithm-5",
  "level": "2",
  "url": "sec-adversarial-search.html#subsec-minimax-algorithm-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maximum minimum "
},
{
  "id": "subsec-game-state-spaces-4",
  "level": "2",
  "url": "sec-adversarial-search.html#subsec-game-state-spaces-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Key insight: "
},
{
  "id": "tbl-game-state-sizes",
  "level": "2",
  "url": "sec-adversarial-search.html#tbl-game-state-sizes",
  "type": "Table",
  "number": "3.5.1",
  "title": "State space sizes for common games",
  "body": " State space sizes for common games    Game  Approximate States  Searchable?    Tic-Tac-Toe  ~255,168  Yes (fully searchable)    Checkers  ~10^20  Partially (with pruning)    Chess  ~10^47  No (requires heuristics)    "
},
{
  "id": "subsec-alpha-beta-pruning-2",
  "level": "2",
  "url": "sec-adversarial-search.html#subsec-alpha-beta-pruning-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Alpha-Beta Pruning "
},
{
  "id": "subsec-alpha-beta-pruning-5",
  "level": "2",
  "url": "sec-adversarial-search.html#subsec-alpha-beta-pruning-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Alpha (α) Beta (β) "
},
{
  "id": "subsec-alpha-beta-pruning-7",
  "level": "2",
  "url": "sec-adversarial-search.html#subsec-alpha-beta-pruning-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Result: "
},
{
  "id": "subsec-heuristics-in-games-3",
  "level": "2",
  "url": "sec-adversarial-search.html#subsec-heuristics-in-games-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evaluation function "
},
{
  "id": "subsec-adversarial-applications-3",
  "level": "2",
  "url": "sec-adversarial-search.html#subsec-adversarial-applications-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Video Game AI Robotics Security Economics "
},
{
  "id": "tbl-adversarial-summary",
  "level": "2",
  "url": "sec-adversarial-search.html#tbl-adversarial-summary",
  "type": "Table",
  "number": "3.5.2",
  "title": "Key concepts in adversarial search",
  "body": " Key concepts in adversarial search    Concept  What It Does  Best Used For    Minimax  Explores all possible moves assuming optimal play from both sides  Small games that can be fully explored (Tic-Tac-Toe)    Alpha-Beta Pruning  Speeds up minimax by ignoring branches that can't affect the outcome  Larger games where minimax alone is too slow    Evaluation Function  Estimates how good a position is without searching to the end  Very large games like chess and Go    "
},
{
  "id": "matching-search",
  "level": "2",
  "url": "sec-adversarial-search.html#matching-search",
  "type": "Reading Question",
  "number": "3.5.7.1",
  "title": "Match the Search Methods.",
  "body": " Match the Search Methods   Match each search method with it's description.    Review , , and .     Informed Search  Prioritizes nodes that appear closer to the goal, but can be misled by inaccurate guidance    Uninformed Search  Follows a fixed pattern of exploration that guarantees success only when applied correctly    Adversarial Search  Applies different selection criteria at alternating levels    "
},
{
  "id": "sec-data-literacy",
  "level": "1",
  "url": "sec-data-literacy.html",
  "type": "Section",
  "number": "4.1",
  "title": "Data Literacy",
  "body": " Data Literacy    Data science data science allows us to extract insights and knowledge from data, driving decision-making and innovation in business, health care, entertainment, and beyond. The field has roots in math, statistics, and computer science, but it only began to emerge as its own distinct field in the early 2000s with the proliferation of digital data and advances in computing power and technology. It gained significant momentum and recognition around the mid to late 2000s with the rise of big data and the need for sophisticated techniques to analyze and derive insights from large and complex datasets. Its evolution since then has been rapid, and it is quickly becoming a cornerstone of many industries and domains.  Data, however, is not new! Humans have been collecting data and generating datasets from the beginning of time. This started in the Stone Age when people carved shapes and pictures, called petroglyphs petroglyphs , on rock. Petroglyphs provide insights into how animals looked and how people carried out their daily lives, offering valuable historical data. Ancient Egyptians invented papyrus—an early form of paper—to journal their data. Papyrus made it easier to store data in bulk, such as listing inventories, recording financial transactions, and preserving stories for future generations.    What Exactly is Data?  The word data data is the plural of the Latin word datum , which translates as something that is given or used. It is often used to mean a single piece of information or a single point of reference in a dataset.  When you hear the word data, you may think of numbers. While numbers are a primary form of data, there are many other forms of data all around us. Anything that we can analyze to compile information—high-level insights—is considered data.    Types of Data  Data can be categorized based on its structure and mathematical properties:      Quantitative Data quantitative data : Deals with quantities, amounts, and numeric measurements. It is highly structured and naturally suited for mathematical calculations and statistical analysis. Quantitative variables are divided into two main types:      Numeric Data numeric data : Represented by numbers indicating measurable quantities. Numeric data can be further split into:      Continuous Data numeric data continuous data : Can take any value within a range, including infinite fractions and decimals. Continuous data must be measured rather than counted (for example, there is an infinite number of possible values between 0 and 0.1, such as 0.05, 0.001, or 0.0001).     Discrete Data numeric data discrete data : Takes numerical values that follow specific intervals, making it directly countable. Examples include shoe sizes (e.g., 5, 5.5, 6, 6.5, 7), where 5.5 is valid, but 5.25 is not.        Categorical Data categorical data : Represented in various forms such as words, symbols, or code numbers. The possible values a categorical variable can take are called its levels . Unlike numeric data, categorical values do not indicate a physically measurable quantity. Instead, values are chosen from a finite set of classes:      Nominal Data categorical data nominal data : Unordered categorical variables where the set of possible values carries no natural order. Examples include state of residence (AL, AK, WY), binary indicators (Yes\/No), or experimental groups (treatment\/control).     Ordinal Data categorical data ordinal data : Categorical variables where the levels possess a natural, logical ordering, even if the exact mathematical distance between values cannot be measured. Examples include letter grades (A, B, C, D, F), education levels (high school diploma, some college, bachelor's degree), or satisfaction ratings ( Not recommended at all to Highly recommended ).           Qualitative Data qualitative data : Consists of non-numerical data that describe subjective attributes, experiences, or characteristics. Unlike categorical data which is cleanly structured into predefined categories, qualitative data often deals with unquantifiable, complex details. Examples include raw descriptions, field observations, personal interviews, open-ended survey responses, or photos.       Datasets  A dataset dataset is a collection of observations or data entities organized for analysis and interpretation. Many datasets can be represented as a table where each row indicates a unique data entity and each column defines the structure of those entities.   Example of a Structured Course Dataset    Semester  Instructor  Class Size  Rating    Fall 2023  Dr. Smith  35  4.5    Spring 2024  Dr. Jones  45  4.2    Fall 2024  Dr. Smith  120  2.4    Spring 2025  Dr. Lee  85  3.9    Fall 2025  Dr. Jones  110  4.8    Spring 2026  Dr. Lee  90  3.2     The dataset in has six entities (also referred to as items, entries, or instances), distinguished by semester. Each entity is defined by a combination of four attributes or characteristics (also known as features features or variables variables )— Semester , Instructor , Class Size , and Rating .  Although the actual values of the attributes vary across entities, all entities have values for the same four attributes, making this a structured dataset structured dataset . Structured datasets are organized in a tabular format with clearly defined fields and relationships.  By contrast, an unstructured dataset unstructured dataset lacks a predefined or organized data model. Unstructured data lacks a fixed schema and is often in the form of text, images, videos, audio recordings, or other content where information does not fit neatly into rows and columns.  Unstructured data is extremely common—some estimates suggest that most real-world data is unstructured. Examples include product reviews, social media posts, public images, and short online videos. In practice, these unstructured datasets are often processed into structured formats so data scientists can analyze them effectively, as discussed in .    Variable Types   A researcher collects the following data from a survey of university students:   Student ID number (e.g., 100234)  Year of birth (e.g., 2004)  Letter grade in a course (e.g., B+)  Number of credits completed (e.g., 72)  Self-reported happiness level on a scale from 1 to 10, where 1 is \"not at all happy\" and 10 is \"extremely happy\"   Match each variable with its correct data type.     Student ID number  Nominal    Year of birth  Number of credits completed  Discrete    Numeric    Letter grade in a course  Self-reported happiness level  Ordinal    Continuous     "
},
{
  "id": "sec-data-literacy-2-1",
  "level": "2",
  "url": "sec-data-literacy.html#sec-data-literacy-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data science "
},
{
  "id": "sec-data-literacy-2-2",
  "level": "2",
  "url": "sec-data-literacy.html#sec-data-literacy-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "petroglyphs "
},
{
  "id": "ssec-what-is-data-2",
  "level": "2",
  "url": "sec-data-literacy.html#ssec-what-is-data-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "data "
},
{
  "id": "ssec-types-of-data-3",
  "level": "2",
  "url": "sec-data-literacy.html#ssec-types-of-data-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quantitative Data Numeric Data Continuous Data Discrete Data Categorical Data levels Nominal Data Ordinal Data Qualitative Data "
},
{
  "id": "ssec-datasets-2",
  "level": "2",
  "url": "sec-data-literacy.html#ssec-datasets-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dataset "
},
{
  "id": "tbl-course-dataset-example",
  "level": "2",
  "url": "sec-data-literacy.html#tbl-course-dataset-example",
  "type": "Table",
  "number": "4.1.1",
  "title": "Example of a Structured Course Dataset",
  "body": " Example of a Structured Course Dataset    Semester  Instructor  Class Size  Rating    Fall 2023  Dr. Smith  35  4.5    Spring 2024  Dr. Jones  45  4.2    Fall 2024  Dr. Smith  120  2.4    Spring 2025  Dr. Lee  85  3.9    Fall 2025  Dr. Jones  110  4.8    Spring 2026  Dr. Lee  90  3.2    "
},
{
  "id": "ssec-datasets-4",
  "level": "2",
  "url": "sec-data-literacy.html#ssec-datasets-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "features variables "
},
{
  "id": "ssec-datasets-5",
  "level": "2",
  "url": "sec-data-literacy.html#ssec-datasets-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "structured dataset "
},
{
  "id": "ssec-datasets-6",
  "level": "2",
  "url": "sec-data-literacy.html#ssec-datasets-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unstructured dataset "
},
{
  "id": "variable-types",
  "level": "2",
  "url": "sec-data-literacy.html#variable-types",
  "type": "Checkpoint",
  "number": "4.1.2",
  "title": "Variable Types.",
  "body": " Variable Types   A researcher collects the following data from a survey of university students:   Student ID number (e.g., 100234)  Year of birth (e.g., 2004)  Letter grade in a course (e.g., B+)  Number of credits completed (e.g., 72)  Self-reported happiness level on a scale from 1 to 10, where 1 is \"not at all happy\" and 10 is \"extremely happy\"   Match each variable with its correct data type.     Student ID number  Nominal    Year of birth  Number of credits completed  Discrete    Numeric    Letter grade in a course  Self-reported happiness level  Ordinal    Continuous    "
},
{
  "id": "sec-reading-the-distribution",
  "level": "1",
  "url": "sec-reading-the-distribution.html",
  "type": "Section",
  "number": "4.2",
  "title": "Reading the Distribution",
  "body": " Reading the Distribution  Graphing data is the first and often most important step in data analysis. In this day of computers, researchers all too often see only the results of complex computer analyses without ever taking a close look at the data themselves. This is all the more unfortunate because computers can create many types of graphs quickly and easily. This section covers some effective ways of graphing distributions distributions (a mathematical function that describes how the possible values of a variable are spread out and how frequently they occur).   Frequency Tables  All of the graphical methods shown in this section are derived from frequency tables. shows a frequency table for the results of a study to find out whether the iMac was expanding Apple’s market share. To find out, 500 iMac customers were interviewed. Each customer was categorized as a previous Macintosh owner, a previous Windows owner, or a new computer purchaser. The table shows the frequencies of the various response categories and the relative frequencies relative frequency , which are the proportion of responses in each category. For example, the relative frequency for none is .   Previous computer ownership for iMac purchasers    Previous Ownership  Frequency  Relative Frequency    None  85  0.17    Windows  60  0.12    Macintosh  355  0.71    Total  500  1.00       Pie Charts and Bar Charts  In a pie chart pie chart , each category is represented by a slice of the pie. The area of the slice is proportional to the percentage of responses in the category. Although most iMac purchasers were Macintosh owners, Apple was encouraged by the 12% of purchasers who were former Windows users, and by the 17% of purchasers who were buying a computer for the first time ( ).   Pie chart of iMac purchases illustrating frequencies of previous computer ownership.   Pie chart showing iMac buyers' previous computer ownership: Macintosh 71%, None 17%, and Windows 12%.   A standard circular pie chart divided into three slices showing previous computer ownership among iMac buyers. The largest slice represents previous Macintosh owners at 71%, followed by buyers who previously owned no computer at 17%, and former Windows users making up the smallest slice at 12%.     Pie charts are effective for displaying the relative frequencies of a small number of categories.   Bar charts bar chart can also be used to represent frequencies of different categories. A bar chart of the iMac purchases is shown in . Frequencies are shown on the vertical axis and the type of computer previously owned is shown on the horizontal axis. Typically, the vertical axis shows the number of observations in each category rather than the percentage of observations in each category as is typical in pie charts.   Bar chart of iMac purchases as a function of previous computer ownership.   Bar chart of iMac buyers by previous computer owned: Macintosh 355, None 85, and Windows 60.   A vertical bar chart displaying the frequency of iMac purchases based on previous computer ownership. The horizontal axis lists three categories: None, Windows, and Macintosh. The vertical axis measures the number of buyers, ranging from 0 to 400. The bar for Macintosh is the tallest at 355 buyers, followed by None at 85 buyers, and Windows at 60 buyers.       Comparing Distributions  Often we need to compare the results of different surveys, or of different conditions within the same overall survey. Bar charts are often excellent for illustrating differences between two distributions. shows the number of people playing card games at the Yahoo website on a Sunday and on a Wednesday in the spring of 2001. We see that there were more players overall on Wednesday compared to Sunday. The number of people playing Pinochle was nonetheless the same on these two days. In contrast, there were about twice as many people playing Hearts on Wednesday as on Sunday. Facts like these emerge clearly from a well-designed bar chart.  Here the bars are oriented horizontally rather than vertically. The horizontal format is useful when you have many categories because there is more room for the category labels.   A bar chart of the number of people playing different card games on Sunday and Wednesday.   Horizontal bar chart comparing card game participation on Sunday and Wednesday across ten games, ranging from under 1,000 to over 7,000 players.   A horizontal bar chart comparing player counts for various card games on Sunday (represented in yellow) and Wednesday (represented in blue). The horizontal axis indicates player volume, scaled from 0 to over 7,000, while the vertical axis lists ten card games ordered by overall popularity from top to bottom.  Participation levels across the games are as follows:  Poker and Blackjack record the lowest participation, with fewer than 1,000 players each and minimal difference between days. Bridge and Gin show moderate increases, with Wednesday participation visibly exceeding Sunday's. Cribbage centers around 2,000 players per day. Hearts shows a notable contrast, with Wednesday participation (approximately 3,000 players) nearly doubling Sunday's total. Canasta and Pinochle reach mid-tier volumes, with Pinochle showing equal turnout for both days at approximately 3,500 players. Euchre and Spades draw the largest audiences by a wide margin: Euchre ranges from 5,500 on Sunday to 6,300 on Wednesday, while Spades peaks as the most played game, reaching about 6,600 players on Sunday and over 7,000 on Wednesday.       Histograms  A histogram histogram is a graphical method for displaying the shape of a distribution. Histograms are particularly useful when there are a large number of observations. We begin with an example consisting of the scores of 642 students on a psychology test. The test consists of 197 items, each graded as correct or incorrect. The students' scores ranged from 46 to 167.  The first step is to create a frequency table. Unfortunately, a simple frequency table would be too big, containing over 100 rows. To simplify the table, the range of scores was broken into intervals, called class intervals class interval . The first interval is from 39.5 to 49.5, the second from 49.5 to 59.5, etc. Next, the number of scores falling into each interval was counted to obtain the class frequencies.  Next, we put this data into a histogram ( ). The class frequencies are represented by bars, where the height of each bar corresponds to its class frequency.   Histogram of scores on a psychology test.   Histogram of psychology test scores from 39.5 to 169.5 in bin intervals of 10, peaking between 79.5 and 89.5 with nearly 150 students.   A vertical histogram illustrating the distribution of student scores on a psychology test. The horizontal axis represents test scores divided into 10-point class intervals ranging from 39.5 to 169.5. The vertical axis measures student frequency, scaled from 0 to 150.  The distribution is right-skewed, rising sharply from low frequencies at the low end to a prominent peak in the middle before tapering off gradually across a long upper tail:  The lowest interval (39.5–49.5) contains only 2 to 3 students. Frequencies increase rapidly in subsequent bins, with approximately 12 students in the 49.5–59.5 range, 50 in 59.5–69.5, and just over 100 in 69.5–79.5. The distribution reaches its peak in the 79.5–89.5 interval at nearly 150 students. Beyond the peak, frequencies steadily decline: just over 125 students in 89.5–99.5, around 75 in 99.5–109.5, 60 in 109.5–119.5, 35 in 119.5–129.5, 15 in 129.5–139.5, and 8 in 139.5–149.5. The final two high-score intervals each contain only a single student.     The histogram makes it plain that most of the scores are in the middle of the distribution, with fewer scores in the extremes. You can also see that the distribution is not symmetric: the scores extend to the right farther than they do to the left. The distribution is therefore said to be skewed  skewed distribution to the right. If the opposite was true, the distribution would be left-skewed.    Frequency Polygons and Cumulative Polygons   Frequency polygons frequency polygon serve the same purpose as histograms, but are especially helpful for comparing sets of data. They are also a good choice for displaying cumulative frequency distributions.   displays the psychology test scores using a frequency polygon:   Frequency polygon for the psychology test scores.   Frequency polygon of psychology test scores plotted at interval centers labeled 35 to 175, following the same right-skewed distribution as the histogram.   A line-based frequency polygon displaying the distribution of psychology test scores. The horizontal axis is labeled with score points from 35 to 175 in increments of 10, while the vertical axis represents student frequency scaled from 0 to 160.  The line tracks the exact same right-skewed pattern as the histogram: starting near zero at 35, rising sharply through 45, 55, and 65 to reach a peak of nearly 150 students at 85, and then steadily descending through 95, 105, and 115 before tapering off near zero between 145 and 175.     A cumulative frequency polygon for the same test scores is shown in . The graph is similar to the frequency polygon except that the vertical value for each point is the number of students in the corresponding interval plus all numbers in lower intervals. For example, there are no scores in the interval labeled 35, three in the interval 45, and 10 in the interval 55. Therefore, the vertical value corresponding to 55 is 13. Since 642 students took the test, the cumulative frequency for the last interval is 642.   Cumulative frequency polygon for the psychology test scores.   Cumulative frequency polygon of psychology test scores from 35 to 165, accumulating to a total frequency near 650 on a Y-axis scaled to 700.   A line graph displaying the cumulative frequency distribution of psychology test scores. The horizontal axis lists test scores labeled from 35 to 165, while the vertical axis represents total accumulated student frequency marked in increments of 100 up to 700.  The line forms a characteristic S-shaped cumulative curve that continually rises from left to right as scores increase:  Starting near zero at a score of 35, the curve stays below the 100-mark through scores 45, 55, and 65. It then climbs steeply through the most common score range, crossing above 150 near score 75, passing 300 by score 85, and hitting 450 around 95. Above 95, the upward trajectory slows down as it crosses 500, steadily flattening out as it approaches its total count of just over 600 near score 165.     Frequency polygons are useful for comparing distributions. This is achieved by overlaying the frequency polygons drawn for different data sets. The data in comes from a task in which the goal is to move a computer cursor to a target on the screen as fast as possible. On 20 of the trials, the target was a small rectangle; on the other 20, the target was a large rectangle. Time to reach the target was recorded on each trial. The two distributions (one for each target) are plotted together. The figure shows that, although there is some overlap in times, it generally took longer to move the cursor to the small target than to the large one.   Overlaid frequency polygons.   Overlayed frequency polygons comparing response times in milliseconds for large targets (blue) and small targets (red), showing faster completion times for large targets.   An overlayed line graph comparing movement time distributions (in milliseconds) for two different target sizes: a large target (represented by a blue line) and a small target (represented by a red line). The horizontal axis measures time in milliseconds from 350 to 1150 in 100-msec intervals, while the vertical axis measures frequency from 0 to 10 in increments of 2.5.  The two distributions highlight a clear difference in performance time depending on target size:  The blue curve for the large target sits further to the left, indicating faster movement times. It begins at 0 at 350 msec, rises rapidly to a peak frequency of 10 at 550 msec, and drops back to 0 by 750 msec.  In contrast, the red curve for the small target is shifted further to the right, showing longer movement times. It remains at 0 through 450 msec, rises to a peak around 650 msec, and maintains moderate frequencies between 650 and 850 msec before tapering off and reaching zero near 1150 msec.     It is also possible to plot two cumulative frequency distributions in the same graph ( ).   Overlaid cumulative frequency polygons.   Overlayed cumulative frequency polygons comparing response times in milliseconds for large targets (blue) and small targets (red), both accumulating to 20 total trials.   An overlayed line graph showing the cumulative frequency distributions of movement times (in milliseconds) for large targets (blue line) and small targets (red line). The horizontal axis measures response time in milliseconds from 350 to 1150, while the vertical axis measures total accumulated trials from 0 to 20.  Both curves form S-shaped cumulative patterns, but their horizontal placement highlights the speed advantage for larger targets:  The blue curve for the large target ascends steeply between 350 and 650 msec, reaching its total of 20 trials much earlier. In contrast, the red curve for the small target is shifted to the right, beginning its rise around 550 msec and climbing more gradually until reaching 20 trials near 1050 msec.     Once you know how to read a distribution, you can easily summarize a mountain of raw numbers using just its visual shape, its center (averages), and its spread (variation). But looking at one variable at a time only tells us half the story. In the next section, we will look at pairs of data to see how they move together. We will learn how to spot trends, measure how closely two things are linked, and explore correlation versus causation.    Frequency Polygon and Cumulative Frequency Polygon   A researcher administers a math proficiency test to 800 students. The test scores range from 0 to 200. The researcher creates a histogram with class intervals of 10 points (e.g., 39.5–49.5, 49.5–59.5, etc.) and observes that the distribution is skewed to the left. The researcher then creates a frequency polygon and a cumulative frequency polygon from the same data.  Which of the following statements correctly describes the relationship between these graphical representations for this dataset?      The frequency polygon will peak in the interval 39.5–49.5, while the cumulative frequency polygon will rise most steeply in the interval 149.5–159.5.    If a distribution were skewed to the right, the peak would be on the left (lower values) and the tail would stretch to the right. How does left-skew differ from that?      The frequency polygon will peak in the interval 149.5–159.5, while the cumulative frequency polygon will rise most steeply in the interval 149.5–159.5.    Correct! In a left-skewed distribution, the data are concentrated on the right (higher scores), so the frequency polygon peaks in the higher interval. The cumulative frequency polygon rises most steeply where the frequency is highest, which is also in that same higher interval.      The frequency polygon will peak in the interval 149.5–159.5, while the cumulative frequency polygon will rise most steeply in the interval 39.5–49.5.    If the cumulative frequency polygon rises most steeply in a particular interval, that means many data points are being added in that interval. Would you expect that to happen in a low-frequency interval or a high-frequency interval?      The frequency polygon will peak in the interval 39.5–49.5, while the cumulative frequency polygon will rise most steeply in the interval 39.5–49.5.    In a left-skewed distribution, the tail is on the left. Is a peak also on the tail, or is the peak somewhere else? Where would a left-skewed distribution's peak be located?      "
},
{
  "id": "sec-reading-the-distribution-2",
  "level": "2",
  "url": "sec-reading-the-distribution.html#sec-reading-the-distribution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distributions "
},
{
  "id": "subsec-frequency-tables-2",
  "level": "2",
  "url": "sec-reading-the-distribution.html#subsec-frequency-tables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative frequencies "
},
{
  "id": "tab-imac-ownership",
  "level": "2",
  "url": "sec-reading-the-distribution.html#tab-imac-ownership",
  "type": "Table",
  "number": "4.2.1",
  "title": "Previous computer ownership for iMac purchasers",
  "body": " Previous computer ownership for iMac purchasers    Previous Ownership  Frequency  Relative Frequency    None  85  0.17    Windows  60  0.12    Macintosh  355  0.71    Total  500  1.00    "
},
{
  "id": "subsec-pie-charts-bar-charts-2",
  "level": "2",
  "url": "sec-reading-the-distribution.html#subsec-pie-charts-bar-charts-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pie chart "
},
{
  "id": "fig-42-pie-chart",
  "level": "2",
  "url": "sec-reading-the-distribution.html#fig-42-pie-chart",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " Pie chart of iMac purchases illustrating frequencies of previous computer ownership.   Pie chart showing iMac buyers' previous computer ownership: Macintosh 71%, None 17%, and Windows 12%.   A standard circular pie chart divided into three slices showing previous computer ownership among iMac buyers. The largest slice represents previous Macintosh owners at 71%, followed by buyers who previously owned no computer at 17%, and former Windows users making up the smallest slice at 12%.    "
},
{
  "id": "subsec-pie-charts-bar-charts-5",
  "level": "2",
  "url": "sec-reading-the-distribution.html#subsec-pie-charts-bar-charts-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bar charts "
},
{
  "id": "fig-42-simple-bar-graph",
  "level": "2",
  "url": "sec-reading-the-distribution.html#fig-42-simple-bar-graph",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": " Bar chart of iMac purchases as a function of previous computer ownership.   Bar chart of iMac buyers by previous computer owned: Macintosh 355, None 85, and Windows 60.   A vertical bar chart displaying the frequency of iMac purchases based on previous computer ownership. The horizontal axis lists three categories: None, Windows, and Macintosh. The vertical axis measures the number of buyers, ranging from 0 to 400. The bar for Macintosh is the tallest at 355 buyers, followed by None at 85 buyers, and Windows at 60 buyers.    "
},
{
  "id": "fig-42-complex-bar-graph",
  "level": "2",
  "url": "sec-reading-the-distribution.html#fig-42-complex-bar-graph",
  "type": "Figure",
  "number": "4.2.4",
  "title": "",
  "body": " A bar chart of the number of people playing different card games on Sunday and Wednesday.   Horizontal bar chart comparing card game participation on Sunday and Wednesday across ten games, ranging from under 1,000 to over 7,000 players.   A horizontal bar chart comparing player counts for various card games on Sunday (represented in yellow) and Wednesday (represented in blue). The horizontal axis indicates player volume, scaled from 0 to over 7,000, while the vertical axis lists ten card games ordered by overall popularity from top to bottom.  Participation levels across the games are as follows:  Poker and Blackjack record the lowest participation, with fewer than 1,000 players each and minimal difference between days. Bridge and Gin show moderate increases, with Wednesday participation visibly exceeding Sunday's. Cribbage centers around 2,000 players per day. Hearts shows a notable contrast, with Wednesday participation (approximately 3,000 players) nearly doubling Sunday's total. Canasta and Pinochle reach mid-tier volumes, with Pinochle showing equal turnout for both days at approximately 3,500 players. Euchre and Spades draw the largest audiences by a wide margin: Euchre ranges from 5,500 on Sunday to 6,300 on Wednesday, while Spades peaks as the most played game, reaching about 6,600 players on Sunday and over 7,000 on Wednesday.    "
},
{
  "id": "subsec-histograms-2",
  "level": "2",
  "url": "sec-reading-the-distribution.html#subsec-histograms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "histogram "
},
{
  "id": "subsec-histograms-3",
  "level": "2",
  "url": "sec-reading-the-distribution.html#subsec-histograms-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class intervals "
},
{
  "id": "fig-42-histogram",
  "level": "2",
  "url": "sec-reading-the-distribution.html#fig-42-histogram",
  "type": "Figure",
  "number": "4.2.5",
  "title": "",
  "body": " Histogram of scores on a psychology test.   Histogram of psychology test scores from 39.5 to 169.5 in bin intervals of 10, peaking between 79.5 and 89.5 with nearly 150 students.   A vertical histogram illustrating the distribution of student scores on a psychology test. The horizontal axis represents test scores divided into 10-point class intervals ranging from 39.5 to 169.5. The vertical axis measures student frequency, scaled from 0 to 150.  The distribution is right-skewed, rising sharply from low frequencies at the low end to a prominent peak in the middle before tapering off gradually across a long upper tail:  The lowest interval (39.5–49.5) contains only 2 to 3 students. Frequencies increase rapidly in subsequent bins, with approximately 12 students in the 49.5–59.5 range, 50 in 59.5–69.5, and just over 100 in 69.5–79.5. The distribution reaches its peak in the 79.5–89.5 interval at nearly 150 students. Beyond the peak, frequencies steadily decline: just over 125 students in 89.5–99.5, around 75 in 99.5–109.5, 60 in 109.5–119.5, 35 in 119.5–129.5, 15 in 129.5–139.5, and 8 in 139.5–149.5. The final two high-score intervals each contain only a single student.    "
},
{
  "id": "subsec-histograms-6",
  "level": "2",
  "url": "sec-reading-the-distribution.html#subsec-histograms-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skewed "
},
{
  "id": "subsec-frequency-polygons-2",
  "level": "2",
  "url": "sec-reading-the-distribution.html#subsec-frequency-polygons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Frequency polygons "
},
{
  "id": "fig-42-frequency-polygon",
  "level": "2",
  "url": "sec-reading-the-distribution.html#fig-42-frequency-polygon",
  "type": "Figure",
  "number": "4.2.6",
  "title": "",
  "body": " Frequency polygon for the psychology test scores.   Frequency polygon of psychology test scores plotted at interval centers labeled 35 to 175, following the same right-skewed distribution as the histogram.   A line-based frequency polygon displaying the distribution of psychology test scores. The horizontal axis is labeled with score points from 35 to 175 in increments of 10, while the vertical axis represents student frequency scaled from 0 to 160.  The line tracks the exact same right-skewed pattern as the histogram: starting near zero at 35, rising sharply through 45, 55, and 65 to reach a peak of nearly 150 students at 85, and then steadily descending through 95, 105, and 115 before tapering off near zero between 145 and 175.    "
},
{
  "id": "fig-42-cumulative-freq-poly",
  "level": "2",
  "url": "sec-reading-the-distribution.html#fig-42-cumulative-freq-poly",
  "type": "Figure",
  "number": "4.2.7",
  "title": "",
  "body": " Cumulative frequency polygon for the psychology test scores.   Cumulative frequency polygon of psychology test scores from 35 to 165, accumulating to a total frequency near 650 on a Y-axis scaled to 700.   A line graph displaying the cumulative frequency distribution of psychology test scores. The horizontal axis lists test scores labeled from 35 to 165, while the vertical axis represents total accumulated student frequency marked in increments of 100 up to 700.  The line forms a characteristic S-shaped cumulative curve that continually rises from left to right as scores increase:  Starting near zero at a score of 35, the curve stays below the 100-mark through scores 45, 55, and 65. It then climbs steeply through the most common score range, crossing above 150 near score 75, passing 300 by score 85, and hitting 450 around 95. Above 95, the upward trajectory slows down as it crosses 500, steadily flattening out as it approaches its total count of just over 600 near score 165.    "
},
{
  "id": "fig-42-overlayed-freq-poly",
  "level": "2",
  "url": "sec-reading-the-distribution.html#fig-42-overlayed-freq-poly",
  "type": "Figure",
  "number": "4.2.8",
  "title": "",
  "body": " Overlaid frequency polygons.   Overlayed frequency polygons comparing response times in milliseconds for large targets (blue) and small targets (red), showing faster completion times for large targets.   An overlayed line graph comparing movement time distributions (in milliseconds) for two different target sizes: a large target (represented by a blue line) and a small target (represented by a red line). The horizontal axis measures time in milliseconds from 350 to 1150 in 100-msec intervals, while the vertical axis measures frequency from 0 to 10 in increments of 2.5.  The two distributions highlight a clear difference in performance time depending on target size:  The blue curve for the large target sits further to the left, indicating faster movement times. It begins at 0 at 350 msec, rises rapidly to a peak frequency of 10 at 550 msec, and drops back to 0 by 750 msec.  In contrast, the red curve for the small target is shifted further to the right, showing longer movement times. It remains at 0 through 450 msec, rises to a peak around 650 msec, and maintains moderate frequencies between 650 and 850 msec before tapering off and reaching zero near 1150 msec.    "
},
{
  "id": "fig-42-cumulative-over-freq-poly",
  "level": "2",
  "url": "sec-reading-the-distribution.html#fig-42-cumulative-over-freq-poly",
  "type": "Figure",
  "number": "4.2.9",
  "title": "",
  "body": " Overlaid cumulative frequency polygons.   Overlayed cumulative frequency polygons comparing response times in milliseconds for large targets (blue) and small targets (red), both accumulating to 20 total trials.   An overlayed line graph showing the cumulative frequency distributions of movement times (in milliseconds) for large targets (blue line) and small targets (red line). The horizontal axis measures response time in milliseconds from 350 to 1150, while the vertical axis measures total accumulated trials from 0 to 20.  Both curves form S-shaped cumulative patterns, but their horizontal placement highlights the speed advantage for larger targets:  The blue curve for the large target ascends steeply between 350 and 650 msec, reaching its total of 20 trials much earlier. In contrast, the red curve for the small target is shifted to the right, beginning its rise around 550 msec and climbing more gradually until reaching 20 trials near 1050 msec.    "
},
{
  "id": "frequency-polygon-relationship",
  "level": "2",
  "url": "sec-reading-the-distribution.html#frequency-polygon-relationship",
  "type": "Checkpoint",
  "number": "4.2.10",
  "title": "Frequency Polygon and Cumulative Frequency Polygon.",
  "body": " Frequency Polygon and Cumulative Frequency Polygon   A researcher administers a math proficiency test to 800 students. The test scores range from 0 to 200. The researcher creates a histogram with class intervals of 10 points (e.g., 39.5–49.5, 49.5–59.5, etc.) and observes that the distribution is skewed to the left. The researcher then creates a frequency polygon and a cumulative frequency polygon from the same data.  Which of the following statements correctly describes the relationship between these graphical representations for this dataset?      The frequency polygon will peak in the interval 39.5–49.5, while the cumulative frequency polygon will rise most steeply in the interval 149.5–159.5.    If a distribution were skewed to the right, the peak would be on the left (lower values) and the tail would stretch to the right. How does left-skew differ from that?      The frequency polygon will peak in the interval 149.5–159.5, while the cumulative frequency polygon will rise most steeply in the interval 149.5–159.5.    Correct! In a left-skewed distribution, the data are concentrated on the right (higher scores), so the frequency polygon peaks in the higher interval. The cumulative frequency polygon rises most steeply where the frequency is highest, which is also in that same higher interval.      The frequency polygon will peak in the interval 149.5–159.5, while the cumulative frequency polygon will rise most steeply in the interval 39.5–49.5.    If the cumulative frequency polygon rises most steeply in a particular interval, that means many data points are being added in that interval. Would you expect that to happen in a low-frequency interval or a high-frequency interval?      The frequency polygon will peak in the interval 39.5–49.5, while the cumulative frequency polygon will rise most steeply in the interval 39.5–49.5.    In a left-skewed distribution, the tail is on the left. Is a peak also on the tail, or is the peak somewhere else? Where would a left-skewed distribution's peak be located?     "
},
{
  "id": "sec-the-power-of-correlation",
  "level": "1",
  "url": "sec-the-power-of-correlation.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Power of Correlation",
  "body": " The Power of Correlation  Measures of central tendency central tendency , variability variability , and spread spread summarize a single variable by providing important information about its distribution. Often, more than one variable is collected on each individual. For example, in large health studies of populations, it is common to obtain variables such as age, sex, height, weight, blood pressure, and total cholesterol on each individual. In this section, we consider bivariate data bivariate data , which consists of two quantitative variables for each individual. Our primary interest is in summarizing such data in a way that preserves the underlying relationship between the two variables.   Spotting Trends with Scatter Plots  To illustrate bivariate data, consider something familiar: age. Do people tend to marry other people of about the same age? Looking at a sample of spousal ages for 10 White American couples ( ), we see that husbands and wives tend to be of about the same age, with men having a tendency to be slightly older than their wives:   Sample of spousal ages for 10 couples    Husband  36  72  37  36  51  50  47  50  37  41    Wife  35  67  33  35  50  46  47  42  36  41     In a larger dataset consisting of 282 pairs of spousal ages, summarizing each variable separately using histograms or summary statistics (such as the mean and standard deviation) causes critical information to be lost. For this sample, the mean age for husbands is 49 (standard deviation = 11) and for wives is 47 (standard deviation = 11), with both distributions being fairly skewed with a long right tail.  However, not all husbands are older than their wives. This fact is lost when we separate the variables. Even though summary statistics are provided on each variable, the pairing within couples is lost. Based on the means alone, we cannot say what percentage of couples has younger husbands than wives; we have to count across pairs. Only by maintaining the pairing can meaningful answers be found about couples per se, such as finding the average age of husbands with 45-year-old wives or identifying the overall relationship between a husband's age and a wife's age.  We can learn much more by displaying bivariate data in a graphical form that maintains the pairing: a scatter plot scatter plot . In a scatter plot, each pair is plotted as a point defined by its horizontal ( ) and vertical ( ) coordinates ( ).   Scatter plot showing wife’s age as a function of husband’s age.   A scatter plot displaying a strong, positive linear relationship between a husband's age and his wife's age.   A scatter plot showing a strong positive association between the ages of husbands and wives. The horizontal axis, labeled \"Husband's Age,\" ranges from 30 to 80. The vertical axis, labeled \"Wife's Age,\" also ranges from 30 to 85. The plot contains hundreds of data points in a light blue color. The points cluster very tightly along an upward-sloping diagonal line, indicating that as the husband's age increases, the wife's age increases at a nearly identical rate. While most points follow the diagonal trend, there is a slight tendency for points to sit just below the diagonal for older age groups, reflecting that husbands are sometimes slightly older than their wives.     A scatter plot reveals key characteristics of bivariate data:      association positive  association negative  Positive vs. Negative Association: When one variable ( ) increases with the second variable ( ), and have a positive association. In the spousal age plot, the older the husband, the older the wife. Conversely, when decreases as increases, they have a negative association.     linear relationship  non-linear relationship  Linear vs. Nonlinear Relationships: When points cluster along a straight line, the relationship is called a linear relationship.     Another example of a linear relationship is shown in a study of 149 individuals working in physically demanding jobs (such as electricians, construction and maintenance workers, and auto mechanics), shown in .   Scatter plot of Grip Strength and Arm Strength.   A scatter plot illustrating a moderate positive correlation between individuals' grip strength and their arm strength.   A scatter plot showing the relationship between physical strength measurements. The horizontal axis, labeled \"Grip Strength,\" ranges from 20 to 200. The vertical axis, labeled \"Arm Strength,\" ranges from 10 to 140. The plot displays a large collection of dark blue data points representing individuals. There is a clear positive association visible; as grip strength increases, arm strength generally increases as well. However, the points are spread out in a wide, diffuse cloud around the diagonal trend, showing much more variability than the spousal age graph. This spread indicates a moderate positive linear relationship, rather than a perfect or tight fit.     As expected, the stronger someone's grip, the stronger their arm tends to be, showing a positive association. Although the points cluster along a line, they are not clustered quite as closely as they are for spousal age.  Not all scatter plots show linear relationships. Consider Galileo's experiment on projectile motion ( ), where he rolled balls down an incline and measured how far they traveled as a function of release height.   Galileo's data showing a non-linear relationship.   A scatter plot displaying a curved, non-linear relationship between the release height of a ball and the distance it travels.   A scatter plot illustrating Galileo's data on projectile motion, showing a distinct non-linear trend. The horizontal axis, labeled \"Release Height,\" ranges from 0 to 1250. The vertical axis, labeled \"Distance Traveled,\" ranges from 200 to 600. The plot contains only seven distinct data points plotted as light blue dots. The points follow a clear upward curve. Because the slope of the trend becomes shallower as the release height increases, the data creates a convex, parabolic shape. A straight line drawn through the data would leave the middle points sitting far above it, demonstrating that the relationship between release height and distance traveled is not linear.     The relationship between Release Height and Distance Traveled is not described well by a straight line: if you drew a line connecting the lowest point and highest point, all remaining points would sit above the line. These data are better fit by a parabola (nonlinear relationship).    Values of Pearson’s Correlation  Scatter plots that show linear relationships can differ in their slope and in how tightly points cluster around the line. A statistical measure of the strength of the linear relationship between two quantitative variables is the Pearson product-moment correlation coefficient correlation coefficient Pearson's correlation Pearson product-moment correlation coefficient (referred to as Pearson's correlation or simply the correlation coefficient ).  If the relationship between variables is not linear, the correlation coefficient does not adequately represent the strength of the relationship.      Symbols: The symbol for Pearson's correlation in a population is (rho), and in a sample it is .     Range: Pearson's ranges from to .     The values of represent specific linear patterns:      Perfect Positive Linear Relationship ( ):  linear relationship Perfect positive Indicates a perfect positive linear relationship where all points fall exactly on an upward straight line ( ).      A perfect linear relationship, .   A scatter plot showing a perfect positive linear relationship, where points fall exactly on a straight line sloping upward.   A scatter plot demonstrating a perfect positive linear correlation. The horizontal axis is labeled \"x\" and ranges from -3 to 3. The vertical axis is labeled \"y\" and ranges from -6 to 4. The plot contains a series of light blue data points that fall precisely and exactly on a straight diagonal line moving from the bottom left to the top right. There is no scatter or deviation from this line, meaning that for every unit increase in x, y increases by a perfectly consistent amount. This visual represents a correlation coefficient of exactly r = 1.         Perfect Negative Linear Relationship ( ):  linear relationship Perfect negative Indicates a perfect negative linear relationship where points fall on a downward straight line ( ).      A perfect negative linear relationship, .   A scatter plot showing a perfect negative linear relationship, where points fall exactly on a straight line sloping downward.   A scatter plot demonstrating a perfect negative linear correlation. The horizontal axis is labeled \"x\" and ranges from -3 to 3. The vertical axis is labeled \"y\" and ranges from -6 to 8. The plot consists of light blue data points that lie perfectly and exactly on a straight diagonal line moving from the top left to the bottom right. There is no scatter or deviation from this line, meaning that for every unit increase in x, y decreases by a perfectly consistent amount. This visual represents a correlation coefficient of exactly r = -1.         No Linear Relationship ( ):  linear relationship None Indicates no linear relationship between variables and ( ).      A scatter plot for which .   A scatter plot displaying no apparent linear relationship, where points form a random, scattered cloud.   A scatter plot illustrating a dataset with no linear relationship. The horizontal axis is labeled \"x\" and ranges from -3 to 3. The vertical axis is labeled \"y\" and ranges from -3 to 4. The data is plotted using dark blue diamond-shaped points. Instead of following a line, the points are distributed randomly and widely across the entire plotting area. While there are two distinct vertical clusters of points around x = -0.5 and x = 2, the points within these columns are scattered vertically with no clear upward or downward trend. This random, directionless scatter represents a correlation coefficient of approximately r = 0.     With real-world data, values of are rarely exactly , , or :     The data for spousal ages has an of ( ), showing a very tight clustering along a line.    The data for grip strength and arm strength has an of ( ), reflecting a moderate positive linear relationship.       Core Mathematical Properties of  Pearson’s obeys three fundamental mathematical rules that dictate how it behaves in any dataset:      Strict Bounds ( to ): The value of always stays between and . The sign indicates direction (positive or negative), while the absolute magnitude reflects strength.     Symmetry: Correlation works identically in both directions. The correlation of with is the exact same as with —measuring weight versus height yields the same value as height versus weight.     scale invariance  Invariance to Scale Changes: Pearson’s is completely unaffected by linear transformations (adding, subtracting, multiplying, or dividing by a constant). For instance, the correlation between height and weight remains identical whether height is measured in inches, feet, or meters. Similarly, adding five bonus points to every student's test score will not alter how those scores correlate with GPA.       Interpreting in Real-World Contexts  Beyond its mathematical definitions, two practical factors heavily influence how a correlation coefficient should be interpreted in practice:      coefficient of determination   explained variance  Explained Variance ( ): Squaring the correlation coefficient ( ) gives the coefficient of determination , which measures the proportion of variance in one variable that is predictable from the other:      High Shared Variance: In the spousal age dataset ( ), , meaning 94% of the variance in wives' ages is accounted for by their husbands' ages.     Moderate Shared Variance: For arm and grip strength ( ), , leaving 60% of the variance unexplained by grip strength alone.        restriction of range  Restriction of Range: Truncating or limiting data to a narrow range of values can artificially deflate the calculated correlation.    Across the general high school population, standardized admissions test scores and academic performance share a strong positive correlation. However, if an analysis focuses solely on students admitted to an elite university—where test scores fall within a restricted, highly competitive band—the observed correlation between test scores and college GPA drops significantly, hiding the true strength of the broader relationship.         Correlation vs. Causation  When two variables consistently move together, it is natural to assume that one must be driving the other. In everyday thinking, we tend to link strong patterns directly to cause-and-effect relationships cause-and-effect relationships : if and always change together, seems like the obvious cause of . However, this instinct can be misleading. A strong correlation between two variables does not mean that a causal relationship exists between them. The primary pitfall in inferring causation from observational data is known as the third-variable problem third-variable problem , which occurs when an unmeasured third factor is actually responsible for the observed connection between the two main variables.  An excellent example comes from a study in Taiwan in the 1970s that found a strong positive correlation between the use of contraception and the number of electric appliances in a person's house. Of course, using contraception does not induce someone to buy electrical appliances, nor does buying appliances cause people to use contraception. Instead, a third variable—education level (or socioeconomic status)—affects both factors independently.  Does the possibility of a third-variable problem make it impossible to draw causal inferences without doing an experiment? One approach is to simply assume that you do not have a third-variable problem. This approach, although common, is not very satisfactory. However, be aware that the assumption of no third-variable problem may be hidden behind a complex causal model that contains sophisticated and elegant mathematics.  A better, though admittedly more difficult, approach is to find converging evidence converging evidence , where multiple independent lines of evidence point to the same causal relationship. This was the approach taken to conclude that smoking causes cancer. The analysis included converging evidence from retrospective studies, prospective studies, lab studies with animals, and theoretical understandings of cancer causes.  A second major obstacle in non-experimental data is determining the directionality problem direction of causality. A correlation between two variables does not indicate which variable is causing which. For example, Reinhart and Rogoff (2010) found a strong correlation between public debt and GDP growth. Although some argued that high public debt slows economic growth, most evidence supports the alternative direction: slow GDP growth increases public debt.    Establishing Causation in Experiments  Because non-experimental correlations are vulnerable to the third-variable problem and directionality issues, establishing a clear causal connection often requires a controlled experiment.  Consider a simple experiment where people are chosen at random from a population and assigned randomly to either an experimental group or a control group. To make this concrete, imagine the experimental group receives a drug for insomnia, the control group receives a placebo, and researchers measure how many minutes each person sleeps that night. If the experimental group sleeps significantly longer on average than the control group, does that prove the drug caused the difference?  An obvious obstacle to drawing a causal conclusion is that many unmeasured variables affect sleep: stress levels, genetics, caffeine intake, or sleep quality from the night before. Could differences in these background factors be the real reason one group slept longer?  At first glance, it might seem that random assignment random assignment —the process of randomly assigning participants to different groups—eliminates these outside factors. However, random assignment only ensures that differences in unmeasured variables are chance differences—it does not remove them entirely. By pure luck, more subjects in the control group might happen to be under high stress. That stress could prevent them from sleeping, creating a difference between the two groups that has nothing to do with the drug.  This seems like a huge problem: how can you account for variables you never measured?  While researchers cannot measure every individual background factor, they can measure the combined effect of all unmeasured variables. Because everyone within the same group receives the exact same treatment, any differences in sleep duration among people in that same group must be caused by these unmeasured individual differences.  By calculating the overall spread (or variance) of scores within each group, researchers can estimate how much natural noise exists in the data. Inferential statistics inferential statistics uses this background noise to calculate a simple probability: How likely is it that chance alone produced a difference this big between the two groups? If that probability is very low, researchers infer that the treatment had a genuine causal effect rather than a lucky fluke. Because that probability is never strictly zero, total certainty is never possible—but it gives us a reliable way to separate real cause-and-effect from pure chance.    Correlation and Transformations   A researcher collects data on 200 employees and calculates the correlation between years of work experience and annual salary. The researcher finds a Pearson's correlation of .  The researcher then converts all salary values from dollars to thousands of dollars and adds 2 years to every employee's work experience to account for previous unpaid internships. The researcher also restricts the analysis to only employees with 10–15 years of experience and recalculates the correlation for this subgroup.  Which of the following statements best describes what will happen to the correlation coefficient after these transformations?      The correlation will remain because Pearson's is unaffected by linear transformations, and it will remain unchanged in the restricted subgroup because subgroups preserve the original correlation.    Restriction of range can artificially deflate the calculated correlation. Limiting the data to only employees with 10–15 years of experience reduces the variability in work experience. How might reduced variability affect the correlation?      The correlation will change because converting salary to thousands of dollars is not a linear transformation, and it will remain unchanged in the restricted subgroup.    Pearson's is completely unaffected by linear transformations such as multiplying or dividing by a constant.      The correlation will remain because Pearson's is unaffected by linear transformations, but it will decrease in the restricted subgroup due to restriction of range.    Correct! Converting salary from dollars to thousands of dollars and adding 2 years to work experience are both linear transformations, so Pearson's remains . However, restricting the data to only employees with 10–15 years of experience reduces the variability in work experience, which typically weakens the correlation (restriction of range).      The correlation will change because adding 2 years to work experience is not a linear transformation, and it will decrease in the restricted subgroup due to restriction of range.    Pearson's is completely unaffected by linear transformations such as adding, subtracting, multiplying, or dividing by a constant.      "
},
{
  "id": "sec-the-power-of-correlation-2",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#sec-the-power-of-correlation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "central tendency variability spread bivariate data "
},
{
  "id": "tab-spousal-ages",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#tab-spousal-ages",
  "type": "Table",
  "number": "4.3.1",
  "title": "Sample of spousal ages for 10 couples",
  "body": " Sample of spousal ages for 10 couples    Husband  36  72  37  36  51  50  47  50  37  41    Wife  35  67  33  35  50  46  47  42  36  41    "
},
{
  "id": "subsec-spotting-trends-scatter-plots-6",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-spotting-trends-scatter-plots-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scatter plot "
},
{
  "id": "fig-43-wife-husband-age",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#fig-43-wife-husband-age",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": " Scatter plot showing wife’s age as a function of husband’s age.   A scatter plot displaying a strong, positive linear relationship between a husband's age and his wife's age.   A scatter plot showing a strong positive association between the ages of husbands and wives. The horizontal axis, labeled \"Husband's Age,\" ranges from 30 to 80. The vertical axis, labeled \"Wife's Age,\" also ranges from 30 to 85. The plot contains hundreds of data points in a light blue color. The points cluster very tightly along an upward-sloping diagonal line, indicating that as the husband's age increases, the wife's age increases at a nearly identical rate. While most points follow the diagonal trend, there is a slight tendency for points to sit just below the diagonal for older age groups, reflecting that husbands are sometimes slightly older than their wives.    "
},
{
  "id": "subsec-spotting-trends-scatter-plots-9",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-spotting-trends-scatter-plots-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Positive vs. Negative Association: Linear vs. Nonlinear Relationships: "
},
{
  "id": "fig-43-grip-arm-strength",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#fig-43-grip-arm-strength",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " Scatter plot of Grip Strength and Arm Strength.   A scatter plot illustrating a moderate positive correlation between individuals' grip strength and their arm strength.   A scatter plot showing the relationship between physical strength measurements. The horizontal axis, labeled \"Grip Strength,\" ranges from 20 to 200. The vertical axis, labeled \"Arm Strength,\" ranges from 10 to 140. The plot displays a large collection of dark blue data points representing individuals. There is a clear positive association visible; as grip strength increases, arm strength generally increases as well. However, the points are spread out in a wide, diffuse cloud around the diagonal trend, showing much more variability than the spousal age graph. This spread indicates a moderate positive linear relationship, rather than a perfect or tight fit.    "
},
{
  "id": "fig-43-dis-t-rel-h",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#fig-43-dis-t-rel-h",
  "type": "Figure",
  "number": "4.3.4",
  "title": "",
  "body": " Galileo's data showing a non-linear relationship.   A scatter plot displaying a curved, non-linear relationship between the release height of a ball and the distance it travels.   A scatter plot illustrating Galileo's data on projectile motion, showing a distinct non-linear trend. The horizontal axis, labeled \"Release Height,\" ranges from 0 to 1250. The vertical axis, labeled \"Distance Traveled,\" ranges from 200 to 600. The plot contains only seven distinct data points plotted as light blue dots. The points follow a clear upward curve. Because the slope of the trend becomes shallower as the release height increases, the data creates a convex, parabolic shape. A straight line drawn through the data would leave the middle points sitting far above it, demonstrating that the relationship between release height and distance traveled is not linear.    "
},
{
  "id": "subsec-values-pearsons-correlation-2",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-values-pearsons-correlation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pearson product-moment correlation coefficient Pearson's correlation correlation coefficient "
},
{
  "id": "subsec-values-pearsons-correlation-4",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-values-pearsons-correlation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Symbols: Range: "
},
{
  "id": "subsec-values-pearsons-correlation-6",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-values-pearsons-correlation-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Perfect Positive Linear Relationship ( ): "
},
{
  "id": "fig-43-per-pos-lin-rel",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#fig-43-per-pos-lin-rel",
  "type": "Figure",
  "number": "4.3.5",
  "title": "",
  "body": " A perfect linear relationship, .   A scatter plot showing a perfect positive linear relationship, where points fall exactly on a straight line sloping upward.   A scatter plot demonstrating a perfect positive linear correlation. The horizontal axis is labeled \"x\" and ranges from -3 to 3. The vertical axis is labeled \"y\" and ranges from -6 to 4. The plot contains a series of light blue data points that fall precisely and exactly on a straight diagonal line moving from the bottom left to the top right. There is no scatter or deviation from this line, meaning that for every unit increase in x, y increases by a perfectly consistent amount. This visual represents a correlation coefficient of exactly r = 1.    "
},
{
  "id": "subsec-values-pearsons-correlation-8",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-values-pearsons-correlation-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Perfect Negative Linear Relationship ( ): "
},
{
  "id": "fig-43-per-neg-lin-rel",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#fig-43-per-neg-lin-rel",
  "type": "Figure",
  "number": "4.3.6",
  "title": "",
  "body": " A perfect negative linear relationship, .   A scatter plot showing a perfect negative linear relationship, where points fall exactly on a straight line sloping downward.   A scatter plot demonstrating a perfect negative linear correlation. The horizontal axis is labeled \"x\" and ranges from -3 to 3. The vertical axis is labeled \"y\" and ranges from -6 to 8. The plot consists of light blue data points that lie perfectly and exactly on a straight diagonal line moving from the top left to the bottom right. There is no scatter or deviation from this line, meaning that for every unit increase in x, y decreases by a perfectly consistent amount. This visual represents a correlation coefficient of exactly r = -1.    "
},
{
  "id": "subsec-values-pearsons-correlation-10",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-values-pearsons-correlation-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "No Linear Relationship ( ): "
},
{
  "id": "fig-43-r-0",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#fig-43-r-0",
  "type": "Figure",
  "number": "4.3.7",
  "title": "",
  "body": " A scatter plot for which .   A scatter plot displaying no apparent linear relationship, where points form a random, scattered cloud.   A scatter plot illustrating a dataset with no linear relationship. The horizontal axis is labeled \"x\" and ranges from -3 to 3. The vertical axis is labeled \"y\" and ranges from -3 to 4. The data is plotted using dark blue diamond-shaped points. Instead of following a line, the points are distributed randomly and widely across the entire plotting area. While there are two distinct vertical clusters of points around x = -0.5 and x = 2, the points within these columns are scattered vertically with no clear upward or downward trend. This random, directionless scatter represents a correlation coefficient of approximately r = 0.    "
},
{
  "id": "subsec-core-mathematical-properties-3",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-core-mathematical-properties-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Strict Bounds ( to ): Symmetry: Invariance to Scale Changes: "
},
{
  "id": "subsec-interpreting-r-real-world-3",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-interpreting-r-real-world-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Explained Variance ( ): coefficient of determination High Shared Variance: Moderate Shared Variance: Restriction of Range: "
},
{
  "id": "subsec-correlation-vs-causation-2",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-correlation-vs-causation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cause-and-effect relationships third-variable problem "
},
{
  "id": "subsec-correlation-vs-causation-5",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-correlation-vs-causation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converging evidence "
},
{
  "id": "subsec-establishing-causation-experiments-5",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-establishing-causation-experiments-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random assignment "
},
{
  "id": "subsec-establishing-causation-experiments-8",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#subsec-establishing-causation-experiments-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inferential statistics "
},
{
  "id": "correlation-transformations",
  "level": "2",
  "url": "sec-the-power-of-correlation.html#correlation-transformations",
  "type": "Checkpoint",
  "number": "4.3.9",
  "title": "Correlation and Transformations.",
  "body": " Correlation and Transformations   A researcher collects data on 200 employees and calculates the correlation between years of work experience and annual salary. The researcher finds a Pearson's correlation of .  The researcher then converts all salary values from dollars to thousands of dollars and adds 2 years to every employee's work experience to account for previous unpaid internships. The researcher also restricts the analysis to only employees with 10–15 years of experience and recalculates the correlation for this subgroup.  Which of the following statements best describes what will happen to the correlation coefficient after these transformations?      The correlation will remain because Pearson's is unaffected by linear transformations, and it will remain unchanged in the restricted subgroup because subgroups preserve the original correlation.    Restriction of range can artificially deflate the calculated correlation. Limiting the data to only employees with 10–15 years of experience reduces the variability in work experience. How might reduced variability affect the correlation?      The correlation will change because converting salary to thousands of dollars is not a linear transformation, and it will remain unchanged in the restricted subgroup.    Pearson's is completely unaffected by linear transformations such as multiplying or dividing by a constant.      The correlation will remain because Pearson's is unaffected by linear transformations, but it will decrease in the restricted subgroup due to restriction of range.    Correct! Converting salary from dollars to thousands of dollars and adding 2 years to work experience are both linear transformations, so Pearson's remains . However, restricting the data to only employees with 10–15 years of experience reduces the variability in work experience, which typically weakens the correlation (restriction of range).      The correlation will change because adding 2 years to work experience is not a linear transformation, and it will decrease in the restricted subgroup due to restriction of range.    Pearson's is completely unaffected by linear transformations such as adding, subtracting, multiplying, or dividing by a constant.     "
},
{
  "id": "sec-the-data-split",
  "level": "1",
  "url": "sec-the-data-split.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Data Split",
  "body": " The Data Split   Before any analysis or learning can take place, data must first be collected. Compiling a dataset involves identifying a target population target population —the entire group of individuals, objects, or events about which conclusions are to be drawn—as well as defining and measuring relevant features features and labels labels .  Because it is rarely feasible to collect data from an entire target population, practitioners rely on sampling sampling to collect a representative subset. In practice, machine learning teams frequently utilize existing, pre-compiled datasets rather than conducting new data collection from scratch. However, if the sampled data does not accurately reflect the broader population, the model risks inheriting significant representation bias representation bias .   Example  For a loan-approval system, the target population could be people who live in the state in which the system will be used, have previously applied for loans, own credit cards, and so on. The particular sample that ends up in the data set will be a subset of this target population, heavily depending on the sampling method used (e.g., sourcing information from public records or surveying people). There is also the question of which features to measure, such as debt history, number of credit cards, income, and occupation. Some of these things will be chosen to serve as labels: for example, information about whether the person received or paid back a loan in the past.     Data Preprocessing and Data Splitting  Depending on the data modality (e.g., text, images, tabular data) and the specific learning task, raw datasets undergo data preprocessing data preprocessing and data cleaning data cleaning before being fed into a model. Common preprocessing steps include handling missing values, normalizing feature scales, encoding categorical variables, and removing noisy or corrupted records.  Once cleaned, datasets are partitioned to support the model lifecycle. The data is divided into training data training data used during model optimization, validation data validation data set aside for hyperparameter tuning and model selection, and test data test data reserved exclusively for final evaluation.   Example  For the loan-approval system, preprocessing might involve addressing missing data (e.g., imputing missing credit history values via interpolation), simplifying the feature space (e.g., grouping occupations in broader categories like “physician” rather than encoding detailed specialties), or normalizing continuous measurements (e.g., scaling income so it lies on a 0-to-1 scale). If a resulting data set included 1,000 examples (e.g., data collected from 1,000 people), 600 might be allocated for training, 100 as a validation set during training, and 300 for postdevelopment testing.     Data Splitting Strategies  Deciding how to split data into training and validation sets is a crucial step. It ensures the model gets enough varied examples to learn from, while leaving aside enough fair, unbiased data to accurately measure its performance. Different strategies balance randomness, fairness, and coverage in different ways:      cross-validation Cross-Validation (CV): Imagine dividing your dataset into equal groups (called folds ). The model trains on all groups except one, tests its accuracy on the remaining group, and repeats this process until every single group has had a turn acting as the test set. A special variation where every individual data point gets its own turn as a test set is called leave-one-out cross-validation LOO-CV leave-one-out cross-validation (LOO-CV) .     bootstrap strategy MCCV Monte-Carlo Cross-Validation Bootstrap and Monte-Carlo Cross-Validation (MCCV): These methods work like drawing names out of a hat. In Bootstrap , after a data point's name is drawn for the training set, it is placed back into the hat, meaning the same example can be chosen multiple times (typically resulting in roughly 63% of the data used for training and 37% for validation). Monte-Carlo Cross-Validation works similarly, but names are drawn without putting them back, ensuring each data point is only picked once per round.     bootstrapped latin partition BLP Bootstrapped Latin Partition (BLP): This approach combines randomness with careful organization. It shuffles data within specific categories so that every category is evenly represented in both training and testing, while guaranteeing every sample gets tested exactly once.     Kennard-Stone algorithm SPXY algorithm Kennard-Stone (K-S) and SPXY Algorithms: Instead of picking samples randomly, these smart selection methods measure the \"distance\" between data points to deliberately pick the most diverse, wide-ranging examples for training. This ensures the model learns from a well-rounded dataset rather than accidentally missing important edge cases.       Model Building and Training  When performing sample classification across complex datasets, most classification models possess one or more model parameters that control the overall complexity of the model. While higher model complexity provides greater discriminating power, it also increases the risk of overfitting .   overfitting Overfitting occurs when a trained model performs extremely well on the specific samples used during training but performs poorly on new, unknown samples—meaning the model fails to generalize effectively. To find an optimal set of parameters that achieves a balance between model complexity and generalizability, it is essential to partition the available data into distinct training and validation sets.   Example  The development team would first instantiate a specific model architecture and define its objective function. During the optimization process, the model attempts to learn a function that maps inputs (e.g., income, occupation, credit history) to the target output (e.g., whether the applicant paid back a previous loan).     Model Validation and Data Splitting  The training set training set is used to build the model across multiple parameter settings, after which each trained model configuration is evaluated against the validation set validation set . The validation set contains samples with known ground truth, but these labels are withheld from the model during testing. Predictions on the validation set allow developers to assess model accuracy and select optimal parameters based on the lowest validation error—a procedure known as model selection model selection .  Historically, it was assumed that performance measured on a validation set served as an unbiased estimator of general performance. However, recent studies demonstrate that validation performance—including estimates derived from cross-validation cross-validation or single train-test splits—can often yield over-optimistic or erroneous estimates of model accuracy.  Furthermore, validation procedures are susceptible to evaluation bias evaluation bias . This occurs when the validation dataset or chosen benchmark metrics fail to accurately represent the target population or do not adequately capture performance disparities across sensitive demographic subgroups.   Example  The team might train a number of candidate models with varying hyperparameter settings or architectures (e.g., decision trees vs. neural networks). They evaluate these models based on validation error to choose the best configuration, reserving a completely separate test set for final performance reporting.     Testing on Unseen Data  After the optimal model is selected and tuned, its true generalization capability must be evaluated using an independent, blind test set holdout set test set (often called a holdout set ). Crucially, the test data is strictly isolated and never touched during the feature selection, model training, or hyperparameter optimization phases. Using test data prior to this final evaluation risks data leakage data leakage , which leads to over-optimistic performance claims that fail when deployed in real-world environments.  To ensure a model works reliably beyond the specific environment where it was built, researchers often evaluate models against external benchmark datasets benchmark datasets —standardized datasets used across the field to test and compare different algorithms under identical conditions.  This process, known as external validation external validation , allows direct comparison against existing methods in the literature and verifies whether the model’s predictive power holds across different collection environments, instruments, or demographic groups.  However, even when evaluating on a blind test set, it remains impossible to know with complete mathematical certainty how well the measured test performance matches the true underlying distribution of the entire real-world population. In real-world applications, the true population distribution is inherently unknown. Operators must rely on the statistical assumption that the blind test set serves as an unbiased, accurate estimator of model performance for all future, unseen samples drawn from that same distribution.  While sampling an entire population is impossible in practice, proper resampling strategies and sufficient sample sizes help approximate the central limit theorem central limit theorem , giving confidence that the observed test performance reflects underlying reality rather than random chance. Ultimately, the estimated test performance depends heavily on the chosen metrics (e.g., accuracy, precision, recall, or root-mean-square error), the degree of overlap between datasets, and how effectively the original data was partitioned.   Example  In the loan approval model, the development team reserves a final 15% holdout set of loan applications that was completely hidden during training and hyperparameter tuning. Evaluating the finalized model on this blind test set provides an unbiased estimate of how accurately and fairly the system will evaluate real-world applicants once live.     Model Postprocessing  Once a model has been trained, various model postprocessing steps that may be needed before its predictions can be used in real-world applications. For example, if a model performing binary classification binary classification outputs a raw probability score, but the system requires a discrete, categorical answer, developers must select appropriate classification threshold classification thresholds to convert continuous outputs into hard decisions.   Example  The resulting model for predicting loan approval likely outputs a continuous score between 0 and 1. The team might choose to transform this score into discrete buckets (e.g., low risk of defaulting, unsure, high risk of defaulting) or a binary recommendation (e.g., should\/should not receive a loan).     Model Deployment Performance Drop   A data science team is developing a model to predict whether a patient will be readmitted to the hospital within 30 days of discharge. The team has collected a dataset of 10,000 patient records and preprocesses the data. They split the data into training, validation, and test sets. During development, they use the validation set to compare multiple model architectures and select the best one. After selecting the final model, they evaluate it on the test set and achieve 92% accuracy. The team then deploys the model, but it performs significantly worse on new patients, achieving only 78% accuracy.  Which of the following best explains the most likely cause of this performance drop?      The team used the test set during model selection, causing data leakage and over-optimistic performance estimates.    The team used the validation set for model selection, not the test set. If the test set had been used during model selection, the 92% accuracy would indeed be over-optimistic, but that is not what happened in this scenario.      The team used the validation set to select the model, but the test set was not representative of the target population.    Correct! The validation set was used appropriately for model selection, and the test set gave 92% accuracy. However, the drop to 78% on new patients suggests the test set did not accurately represent the broader target population. Even with proper data splitting, if the test set differs from the real-world distribution, performance will not generalize.      The team used cross-validation instead of a simple train-test split, which overfitted the model to the training data.    Cross-validation typically reduces overfitting by training on multiple folds and averaging performance, providing more reliable estimates than a single split. The team used a validation set approach, not cross-validation.      The team used the validation set to select the model, but the test set should have been used for model selection instead.    Using the test set for model selection would defeat its purpose as a blind evaluation set. The test set must remain untouched during model development to provide an unbiased estimate of real-world performance.      "
},
{
  "id": "sec-the-data-split-2-1",
  "level": "2",
  "url": "sec-the-data-split.html#sec-the-data-split-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "target population features labels "
},
{
  "id": "sec-the-data-split-2-2",
  "level": "2",
  "url": "sec-the-data-split.html#sec-the-data-split-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sampling representation bias "
},
{
  "id": "ssec-data-preprocessing-2",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-data-preprocessing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "data preprocessing data cleaning "
},
{
  "id": "ssec-data-preprocessing-3",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-data-preprocessing-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "training data validation data test data "
},
{
  "id": "ssec-data-splitting-strategies-3",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-data-splitting-strategies-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cross-Validation (CV): leave-one-out cross-validation (LOO-CV) Bootstrap and Monte-Carlo Cross-Validation (MCCV): Bootstrap Monte-Carlo Cross-Validation Bootstrapped Latin Partition (BLP): Kennard-Stone (K-S) and SPXY Algorithms: "
},
{
  "id": "ssec-model-building-and-training-2",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-model-building-and-training-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overfitting "
},
{
  "id": "ssec-model-validation-and-data-splitting-2",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-model-validation-and-data-splitting-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "training set validation set model selection "
},
{
  "id": "ssec-model-validation-and-data-splitting-3",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-model-validation-and-data-splitting-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cross-validation "
},
{
  "id": "ssec-model-validation-and-data-splitting-4",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-model-validation-and-data-splitting-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evaluation bias "
},
{
  "id": "ssec-testing-on-unseen-data-2",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-testing-on-unseen-data-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "test set holdout set data leakage "
},
{
  "id": "ssec-testing-on-unseen-data-3",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-testing-on-unseen-data-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "benchmark datasets "
},
{
  "id": "ssec-testing-on-unseen-data-4",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-testing-on-unseen-data-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "external validation "
},
{
  "id": "ssec-testing-on-unseen-data-6",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-testing-on-unseen-data-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "central limit theorem "
},
{
  "id": "ssec-model-postprocessing-2",
  "level": "2",
  "url": "sec-the-data-split.html#ssec-model-postprocessing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary classification classification thresholds "
},
{
  "id": "model-deployment-performance-drop",
  "level": "2",
  "url": "sec-the-data-split.html#model-deployment-performance-drop",
  "type": "Checkpoint",
  "number": "4.4.1",
  "title": "Model Deployment Performance Drop.",
  "body": " Model Deployment Performance Drop   A data science team is developing a model to predict whether a patient will be readmitted to the hospital within 30 days of discharge. The team has collected a dataset of 10,000 patient records and preprocesses the data. They split the data into training, validation, and test sets. During development, they use the validation set to compare multiple model architectures and select the best one. After selecting the final model, they evaluate it on the test set and achieve 92% accuracy. The team then deploys the model, but it performs significantly worse on new patients, achieving only 78% accuracy.  Which of the following best explains the most likely cause of this performance drop?      The team used the test set during model selection, causing data leakage and over-optimistic performance estimates.    The team used the validation set for model selection, not the test set. If the test set had been used during model selection, the 92% accuracy would indeed be over-optimistic, but that is not what happened in this scenario.      The team used the validation set to select the model, but the test set was not representative of the target population.    Correct! The validation set was used appropriately for model selection, and the test set gave 92% accuracy. However, the drop to 78% on new patients suggests the test set did not accurately represent the broader target population. Even with proper data splitting, if the test set differs from the real-world distribution, performance will not generalize.      The team used cross-validation instead of a simple train-test split, which overfitted the model to the training data.    Cross-validation typically reduces overfitting by training on multiple folds and averaging performance, providing more reliable estimates than a single split. The team used a validation set approach, not cross-validation.      The team used the validation set to select the model, but the test set should have been used for model selection instead.    Using the test set for model selection would defeat its purpose as a blind evaluation set. The test set must remain untouched during model development to provide an unbiased estimate of real-world performance.     "
},
{
  "id": "sec-an-overview",
  "level": "1",
  "url": "sec-an-overview.html",
  "type": "Section",
  "number": "5.1",
  "title": "An Overview of Machine Learning",
  "body": " An Overview of Machine Learning   This chapter introduces the foundational concepts of machine learning. We begin by understanding what makes machine learning different from traditional programming. Then we explore the three major paradigms—supervised learning, unsupervised learning, and reinforcement learning—before discussing how to evaluate whether a model is truly successful. By the end of this chapter, you will understand the basic vocabulary and frameworks needed to think about how computers can learn from data.  Human knowledge is wide, variable, and inherently difficult to capture. The human mind can absorb and work with complex knowledge because it operates not merely by memorizing facts, but by generating underlying models of how the world works.    a surprisingly efficient and even elegant system that operates with small amounts of information; it seeks not to infer brute correlations among data points but to create explanations.   Noam Chomsky Chomsky, Noam    Chomsky's observation highlights a crucial difference between human minds and raw computational power. While traditional algorithms rely on human programmers to explicitly code every rule and explanation, machine learning aims to bridge this gap by enabling computers to discover patterns and build explanatory models directly from data.     Traditional Computing vs. Machine Learning   Machine learning machine learning was created in order to replicate aspects of this capability. As a major subfield of artificial intelligence artificial intelligence ( AI ) AI , the overarching goal of machine learning is to understand the structure of data and fit that data into models that can be understood, interpreted, and utilized by people.  The field of machine learning is concerned with the question of how to construct computer programs that automatically improve with experience. This definition captures the essence of the field: rather than programming every possible scenario, we design systems that learn from data and experience.  Machine learning is one of the most exciting areas of computer science because it enables computers to perform tasks that would be impossible to program manually. For example, how would a programmer write explicit rules to recognize a cat in any possible photograph? The cat might be sitting, standing, sleeping, or hiding. The lighting might be bright, dim, or shadowed. The cat might be seen from the front, side, or back. Writing rules for every possible scenario is impossible. Machine learning solves this problem by letting the computer discover the patterns on its own.  The idea of machines that can learn has been around since the early days of computing. In 1959, Arthur Samuel Samuel, Arthur defined machine learning as a field of study that gives computers the ability to learn without being explicitly programmed. Samuel created a program that learned to play checkers by playing thousands of games against itself—an early example of what we now call reinforcement learning.  Since then, the field has grown enormously. Early machine learning systems were limited by the amount of available data and computing power. Today, we have access to vast amounts of data and powerful computers, which has enabled breakthroughs in areas like image recognition, language translation, and medical diagnosis.  Although machine learning is a core field within computer science, it differs fundamentally from traditional computing traditional computing . In traditional computing, algorithms algorithm are sets of explicitly programmed instructions written by human developers to calculate solutions or perform specific tasks. Machine learning algorithms, by contrast, allow computers to train on data inputs and use statistical analysis to output predictions or decisions. Rather than requiring explicit instructions for every edge case, machine learning enables computers to build models from sample data in order to automate decision-making processes.   Look Closer   Consider the difference between traditional software and machine learning. In traditional software, a programmer writes: Data + Rules = Answers . If you want a program to recognize photos of cats, you would have to write rules defining ears, whiskers, and tails. In machine learning, the formula is flipped: Data + Answers = Rules . By showing the computer thousands of labeled cat photos, the algorithm learns to identify the defining patterns on its own.    At the heart of every machine learning system is data. Machine learning algorithms learn from examples. The quality and quantity of the data used for training directly affect how well the algorithm performs. This is often summarized as \"garbage in, garbage out\"—if the training data is incomplete, biased, or incorrect, the resulting model will reflect those problems.  This is why data collection and preparation are such important steps in any machine learning project. Data scientists spend a significant amount of time cleaning and organizing data before they even begin training models.  Any technology user today benefits daily from machine learning applications:    Facial recognition facial recognition technology allows social media platforms and photo libraries to automatically recognize, tag, and organize images of friends and family.   Optical character recognition optical character recognition OCR ( OCR ) converts physical documents and images of text into searchable, editable digital text.   Recommendation engines recommendation engine analyze individual viewing histories and broader user trends to suggest movies, television shows, or music tailored to personal preferences.   Autonomous vehicles autonomous vehicle (self-driving cars) rely on complex machine learning systems to interpret sensor data, detect obstacles, and navigate roadways safely.   There are many different problem classes in machine learning, categorized primarily by the type of data provided and the specific conclusions to be drawn from that data. In the following sections of this chapter, we will explore three foundational paradigms: supervised learning , unsupervised learning , and reinforcement learning .   "
},
{
  "id": "intro-ml-overview-4",
  "level": "2",
  "url": "sec-an-overview.html#intro-ml-overview-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "machine learning "
},
{
  "id": "subsec-traditional-vs-ml-2",
  "level": "2",
  "url": "sec-an-overview.html#subsec-traditional-vs-ml-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Machine learning artificial intelligence AI "
},
{
  "id": "subsec-traditional-vs-ml-7",
  "level": "2",
  "url": "sec-an-overview.html#subsec-traditional-vs-ml-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "traditional computing algorithms "
},
{
  "id": "subsec-traditional-vs-ml-12",
  "level": "2",
  "url": "sec-an-overview.html#subsec-traditional-vs-ml-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Facial recognition Optical character recognition OCR Recommendation engines Autonomous vehicles "
},
{
  "id": "subsec-traditional-vs-ml-13",
  "level": "2",
  "url": "sec-an-overview.html#subsec-traditional-vs-ml-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "supervised learning unsupervised learning reinforcement learning "
},
{
  "id": "sec-supervised-learning",
  "level": "1",
  "url": "sec-supervised-learning.html",
  "type": "Section",
  "number": "5.2",
  "title": "Supervised Learning",
  "body": " Supervised Learning    Supervised learning supervised learning is a type of machine learning in which the learning system is provided with example inputs that are paired with their desired outputs. In this setup, the algorithm is given training data and explicitly told which specific labels or target values should be associated with each input.  The process of supervised learning can be broken into several steps. First, the algorithm receives a set of training examples. Each example consists of an input and its correct output. Second, the algorithm makes a prediction based on the input. Third, the algorithm compares its prediction to the correct output and calculates the difference—this is the error. Fourth, the algorithm adjusts its internal parameters to reduce this error. Fifth, the algorithm repeats this process many times, gradually improving its predictions.  This process is often called training training . During training, the model learns the relationship between inputs and outputs by adjusting its parameters to minimize error. Once training is complete, the model can be used to make predictions on new, unseen data.  By comparing its predicted output with the true output, the algorithm measures its error, learns from its mistakes, and modifies the underlying model accordingly. The primary goal of supervised learning is to learn underlying patterns from labeled data so that the model can accurately predict the labels or values of new, previously unseen data.   Labeled data labeled data means that each example in the training set has been annotated with the correct answer. For example, if we want to train a model to recognize handwritten digits, we would need thousands of images of handwritten digits, each labeled with the digit it represents (0, 1, 2, and so on).  Creating labeled data is often expensive and time-consuming because it typically requires human expertise. For this reason, labeled data is sometimes called \"ground truth.\" It is the standard against which the model's predictions are measured.  Because the correct target is required for every training example, supervised learning relies heavily on labeled data, which is often annotated by human experts or domain specialist systems.   Look Closer   Why is it called \"supervised\" learning? Think of the algorithm as a student studying with flashcards. The front of the card has the input (such as an image or a set of measurements), and the back has the correct answer (the label). The \"supervisor\" or teacher provides the correct answers during training so the student can check its work, adjust its understanding, and prepare to take a test on brand-new questions it has never seen before.      Categories of Supervised Learning  Supervised learning problems are generally divided into two main categories based on the type of output being predicted:    Classification   Classification algorithms classification algorithm predict a label or category from a finite set of discrete values. Classification problems may be binary classification binary classification , where there are only two possible classes (such as \"spam\" or \"not spam\"), or multi-class classification multi-class classification , featuring three or more possible categories. During training, the model learns from paired inputs and labels—for instance, an algorithm might learn from images of sharks labeled as \"fish\" alongside images of oceans labeled as \"water.\" After training, the model should correctly categorize new, unlabeled images.    Regression   Regression algorithms regression algorithm are structured similarly to classification models, except that they predict continuous numerical values rather than discrete categories. Like classification, regression algorithms learn from pairs of input data and corresponding target values. Regression is commonly applied when the goal is to predict measurements, prices, temperatures, or other continuous quantities.    To understand the difference between classification and regression, consider some examples. If a doctor wants to predict whether a patient has a specific disease (yes or no), this is a classification problem. If a real estate agent wants to predict the price of a house based on its size and location, this is a regression problem.  The key distinction is the type of output: classification predicts discrete categories, while regression predicts continuous numbers. Both types of problems are common in practice, and choosing the right approach depends on what you want to predict.    Applications of Supervised Learning  Supervised learning is widely used across technology to predict statistically likely future events from historical data. Common applications include:   Analyzing historical stock market information to anticipate future value fluctuations.  Evaluating email features to automatically identify and filter spam from an inbox.  Classifying unlabeled photos or diagnostic medical scans after training on curated, labeled sets of images.   Supervised learning powers many technologies we use daily. Email spam filters use classification to decide whether an incoming message is spam or legitimate. Speech recognition systems, like those in smartphones and smart speakers, use supervised learning to convert spoken words into text. Weather prediction models use regression to forecast temperature and precipitation. Credit scoring systems use classification to determine whether a loan applicant is likely to repay a loan.  These applications all share the same pattern: they learn from labeled examples and then apply that learning to new, unseen situations.      Sort each of the following problems into the most appropriate supervised learning method category: Regression , Binary Classification , or Multi-Class Classification .    Regression predicts continuous numerical values, Binary Classification predicts one of two outcomes, and Multi-Class Classification categorizes inputs into three or more distinct classes.     Regression  Predicting a student's final grade percentage based on hours studied, attendance, and previous test scores.  Forecasting the total sales revenue for a retail store next quarter.    Binary Classification  Determining whether a customer will renew their subscription next month.  Identifying whether an MRI scan shows signs of a tumor.    Multi-Class Classification  Sorting customer support tickets into categories: billing, technical, returns, or general inquiry.  Classifying an image of a fruit as an apple, orange, banana, or grape based on color, shape, and texture.      "
},
{
  "id": "intro-supervised-learning-1",
  "level": "2",
  "url": "sec-supervised-learning.html#intro-supervised-learning-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Supervised learning "
},
{
  "id": "intro-supervised-learning-3",
  "level": "2",
  "url": "sec-supervised-learning.html#intro-supervised-learning-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "training "
},
{
  "id": "intro-supervised-learning-5",
  "level": "2",
  "url": "sec-supervised-learning.html#intro-supervised-learning-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Labeled data "
},
{
  "id": "subsec-supervised-categories-3",
  "level": "2",
  "url": "sec-supervised-learning.html#subsec-supervised-categories-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Classification Classification algorithms binary classification multi-class classification Regression Regression algorithms "
},
{
  "id": "supervised-learning-card-sort",
  "level": "2",
  "url": "sec-supervised-learning.html#supervised-learning-card-sort",
  "type": "Reading Question",
  "number": "5.2.3.1",
  "title": "",
  "body": "  Sort each of the following problems into the most appropriate supervised learning method category: Regression , Binary Classification , or Multi-Class Classification .    Regression predicts continuous numerical values, Binary Classification predicts one of two outcomes, and Multi-Class Classification categorizes inputs into three or more distinct classes.     Regression  Predicting a student's final grade percentage based on hours studied, attendance, and previous test scores.  Forecasting the total sales revenue for a retail store next quarter.    Binary Classification  Determining whether a customer will renew their subscription next month.  Identifying whether an MRI scan shows signs of a tumor.    Multi-Class Classification  Sorting customer support tickets into categories: billing, technical, returns, or general inquiry.  Classifying an image of a fruit as an apple, orange, banana, or grape based on color, shape, and texture.    "
},
{
  "id": "sec-unsupervised-learning",
  "level": "1",
  "url": "sec-unsupervised-learning.html",
  "type": "Section",
  "number": "5.3",
  "title": "Unsupervised Learning",
  "body": " Unsupervised Learning   What Is Unsupervised Learning?  Unlike supervised learning, unsupervised learning unsupervised learning does not involve learning a mapping function based on paired input-output examples. Instead, the learning algorithm is provided with a dataset consisting entirely of unlabeled data unlabeled data and is tasked with discovering inherent structure, patterns, or relationships within it.  Unsupervised learning is valuable because most of the data in the world is unlabeled. Imagine trying to label every photo on the internet, every customer purchase record, or every medical scan. The cost and time required would be enormous.  Unsupervised learning lets us find patterns in this sea of unlabeled data. While we may not know the \"correct\" answer in advance, we can still discover useful structure. For example, an online store might use unsupervised learning to group customers with similar purchasing behaviors, even without knowing in advance what those groups look like.  Because unlabeled data is vastly more abundant and cheaper to collect than human-annotated data, machine learning methods that support unsupervised learning are exceptionally valuable across data science.   Look Closer   Imagine handing a child a giant box of mixed, unlabeled Lego bricks. Without telling them what to build or providing an instruction manual (no \"supervisor\"), the child naturally starts organizing the bricks: putting red blocks in one pile, long blocks in another, and wheels in a third. Unsupervised learning works the same way—it searches for natural groupings, similarities, and patterns in data without ever being told what the \"right answer\" is.    The objective of unsupervised learning can be as straightforward as uncovering hidden patterns within a dataset, or it can involve feature learning feature learning . Feature learning enables a system to automatically discover the representations needed to analyze raw data. Without receiving explicit targets, unsupervised methods organize complex information into meaningful structures.    Common Unsupervised Learning Tasks  Unsupervised learning problems generally fall into three main functional categories:   Clustering clustering algorithms group together samples that exhibit similar traits. The goal is to discover a natural partitioning of the dataset that highlights underlying structure. For instance, an algorithm given a collection of untagged photos of dogs can analyze visual likenesses and automatically group similar dog images together.  Clustering is one of the most common unsupervised learning tasks. The goal is to partition data into groups, or clusters, such that items within the same cluster are more similar to each other than to items in other clusters.  There are many approaches to clustering. One of the simplest is k-means clustering k-means clustering , where the algorithm chooses a number of clusters and then repeatedly assigns each data point to the nearest cluster center and updates the centers. The algorithm continues until the clusters stabilize. Clustering is used in customer segmentation, image compression, and document organization, among many other applications.   Density estimation density estimation aims to model the underlying probability distribution of the input data itself. Because the algorithm focuses purely on the distribution of input features without needing target values, it operates as a purely unsupervised task. Once trained, the model can estimate the probability of encountering new data points or generate brand-new synthetic samples from the learned distribution.   Dimensionality reduction dimensionality reduction re-represents complex data using fewer variables or features while preserving its most critical information. This technique is particularly valuable for visualizing and compressing high-dimensional data high-dimensional data , which are datasets containing a large number of attributes relative to the overall number of samples. For example, a single image might contain thousands of pixels, each representing a feature. While having many features can be useful, it also makes analysis more difficult.  High-dimensional data can suffer from what is called the \"curse of dimensionality.\" As the number of dimensions increases, the data becomes sparse, and distance measures become less meaningful. Dimensionality reduction techniques reduce the number of features while preserving the essential structure of the data, making it easier to visualize and analyze.  One of the most common dimensionality reduction techniques is principal component analysis (PCA)  principal component analysis PCA , which finds the directions of maximum variance in the data and projects the data onto those directions.    Applications of Unsupervised Learning  Unsupervised learning algorithms are widely deployed in business, security, and analytics. Key applications include:   Analyzing customer transactional data to reveal hidden purchasing patterns and relationships that might not be obvious to human analysts.  Powering anomaly detection anomaly detection systems to flag unusual transactions, such as potential credit card fraud, by detecting data points that deviate from normal behavior.  Driving recommendation systems recommendation system that cluster similar products or user profiles to suggest items to buy or watch next.    "
},
{
  "id": "subsec-what-is-unsupervised-learning-2",
  "level": "2",
  "url": "sec-unsupervised-learning.html#subsec-what-is-unsupervised-learning-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unsupervised learning unlabeled data "
},
{
  "id": "subsec-what-is-unsupervised-learning-7",
  "level": "2",
  "url": "sec-unsupervised-learning.html#subsec-what-is-unsupervised-learning-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "feature learning "
},
{
  "id": "subsec-unsupervised-tasks-3",
  "level": "2",
  "url": "sec-unsupervised-learning.html#subsec-unsupervised-tasks-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Clustering "
},
{
  "id": "subsec-unsupervised-tasks-5",
  "level": "2",
  "url": "sec-unsupervised-learning.html#subsec-unsupervised-tasks-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "k-means clustering "
},
{
  "id": "subsec-unsupervised-tasks-6",
  "level": "2",
  "url": "sec-unsupervised-learning.html#subsec-unsupervised-tasks-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Density estimation "
},
{
  "id": "subsec-unsupervised-tasks-7",
  "level": "2",
  "url": "sec-unsupervised-learning.html#subsec-unsupervised-tasks-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dimensionality reduction high-dimensional data "
},
{
  "id": "subsec-unsupervised-tasks-9",
  "level": "2",
  "url": "sec-unsupervised-learning.html#subsec-unsupervised-tasks-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "principal component analysis (PCA) "
},
{
  "id": "subsec-unsupervised-applications-3",
  "level": "2",
  "url": "sec-unsupervised-learning.html#subsec-unsupervised-applications-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "anomaly detection recommendation systems "
},
{
  "id": "sec-reinforcement-learning",
  "level": "1",
  "url": "sec-reinforcement-learning.html",
  "type": "Section",
  "number": "5.4",
  "title": "Reinforcement Learning",
  "body": " Reinforcement Learning    Reinforcement learning reinforcement learning is a type of machine learning in which a learning system improves its performance through direct interaction with an environment. Unlike supervised learning, reinforcement learning does not rely on a fixed training dataset that specifies the correct target output for every input. Instead, the system learns by trying different actions and receiving feedback in the form of rewards or penalties based on the outcomes.  The trial-and-error nature of reinforcement learning makes it particularly suitable for problems where the correct action is not immediately obvious. The agent must explore different actions, observe the consequences, and gradually learn which actions lead to better outcomes.  Unlike supervised learning, where the algorithm is told the correct answer for each example, reinforcement learning requires the agent to discover the correct behavior through experience. This makes reinforcement learning more similar to how humans and animals learn through interaction with their environment.   Look Closer   Think of reinforcement learning like teaching a dog a new trick or playing a complex video game. Nobody hands the game character a pre-written manual specifying every button to press at every second (supervised learning). Instead, the system tries different moves: pressing the jump button at the right moment earns points (a reward), while stepping into a hazard causes a loss (a penalty). Through trial and error, the agent discovers the optimal strategy to maximize its overall score.      The Agent and Environment Loop  In a reinforcement learning framework, the learning system is called an agent agentic AI , and everything outside the system is the environment environment . The learning process unfolds as an interactive loop:   The agent observes the current state of the environment.  The agent chooses and executes an action action .  The environment updates its state as a result of that action and returns a numerical reward reward (positive or negative) to the agent.   Over time and across thousands or millions of interactions, the agent learns which specific actions are more likely to yield higher cumulative rewards in different situations.    Policies and Long-Term Strategy  The ultimate objective of reinforcement learning is to discover an optimal strategy, known as a policy policy . A policy acts as a mapping function that dictates which action an agent should take when encountering a given state in order to maximize its cumulative, long-term rewards.  Developing an effective policy requires the system to account for delayed gratification—evaluating the future consequences of an action rather than simply pursuing immediate, short-term gains.  One of the key challenges in reinforcement learning is the exploration-exploitation tradeoff exploration-exploitation tradeoff . Exploration means trying new actions to discover whether they lead to better rewards. Exploitation means using known actions that have already produced good rewards.  If the agent always exploits, it may never discover a better strategy. If the agent always explores, it may never accumulate enough reward to succeed. Finding the right balance is essential. Effective reinforcement learning algorithms manage this tradeoff by exploring more in the beginning, when less is known, and exploiting more later, as the agent becomes more confident in its strategy.    Applications of Reinforcement Learning  Reinforcement learning is well-suited for dynamic environments where decision-making must happen sequentially over time:   Strategy Games  RL agents have achieved superhuman performance in complex board and video games (such as Chess, Go, and StarCraft) by playing millions of self-play matches to discover novel strategies that human players had never considered.    Robotic Control  Robots use reinforcement learning to master physical tasks like balancing, walking, or grasping objects of varying shapes through simulated trial and error before deploying to physical hardware.    Autonomous Systems  From drone flight control to resource management in power grids, reinforcement learning systems adaptively adjust settings to optimize efficiency while safety constraints act as environmental boundaries.    Resource Management  Reinforcement learning is also used in resource management, where systems must make sequential decisions about allocating limited resources. In healthcare, reinforcement learning is being explored for personalized treatment planning, where the system learns the best sequence of treatments for individual patients. In finance, reinforcement learning is used for algorithmic trading, where the agent learns to buy and sell assets to maximize profit.  What these applications have in common is that they involve sequential decision-making under uncertainty. The agent must act, observe the outcome, and adjust its strategy over time.    "
},
{
  "id": "intro-reinforcement-learning-1",
  "level": "2",
  "url": "sec-reinforcement-learning.html#intro-reinforcement-learning-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reinforcement learning "
},
{
  "id": "subsec-agent-environment-2",
  "level": "2",
  "url": "sec-reinforcement-learning.html#subsec-agent-environment-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "agent environment "
},
{
  "id": "subsec-agent-environment-3",
  "level": "2",
  "url": "sec-reinforcement-learning.html#subsec-agent-environment-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "action reward "
},
{
  "id": "subsec-policy-and-goals-2",
  "level": "2",
  "url": "sec-reinforcement-learning.html#subsec-policy-and-goals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "policy "
},
{
  "id": "subsec-policy-and-goals-4",
  "level": "2",
  "url": "sec-reinforcement-learning.html#subsec-policy-and-goals-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exploration-exploitation tradeoff "
},
{
  "id": "sec-evaluating-success",
  "level": "1",
  "url": "sec-evaluating-success.html",
  "type": "Section",
  "number": "5.5",
  "title": "Evaluating Success",
  "body": " Evaluating Success   Once a machine learning model has been trained, it must be thoroughly evaluated to ensure its predictions are both accurate and reliable. This evaluation process assesses the model's validity validity —its overall correctness, soundness, and ability to precisely measure what it was engineered to predict before it is deployed in real-world settings.  Evaluation is a critical step in the machine learning pipeline. A model that performs well on training data but poorly on new data is not useful in practice. Evaluation helps us answer two important questions: Does this model actually solve the problem we intended? And will it continue to work when it encounters new situations?  Without proper evaluation, we risk deploying models that perform well under controlled conditions but fail in the real world. This is particularly important in high-stakes applications like medical diagnosis, autonomous driving, and financial decision-making, where mistakes can have serious consequences.   Look Closer   Imagine studying for a final exam by memorizing the exact answers to a single practice test. If the real exam features those exact same questions, you might score 100%—but that doesn't mean you actually learned the subject! In machine learning, evaluating a model on brand-new test data ensures it didn't just \"memorize\" its training examples, but truly understands the underlying patterns.      Data Splitting and Overfitting  One primary way to evaluate a model is through a validation set validation set —a distinct subset of data reserved specifically for testing a trained model's quality. Because the validation set is completely separate from the training data, this practice guards against overfitting overfitting , a common failure mode where a model learns the training data too closely and fails to generalize to new information.  Overfitting is a common problem in machine learning. It occurs when a model learns the training data too well, including its noise and random fluctuations, rather than the underlying patterns that generalize to new data.  An overfitted model may achieve perfect accuracy on the training data but perform poorly on new, unseen data. This is like a student who memorizes the exact answers to practice problems but cannot solve slightly different versions of the same problem. The student has learned the specific examples but not the underlying concepts.  Overfitting tends to happen when models are too complex relative to the amount of training data. A complex model can fit almost any data perfectly, but at the cost of poor generalization. This is sometimes called the bias-variance tradeoff bias-variance tradeoff : simpler models have higher bias but lower variance, while complex models have lower bias but higher variance.  Traditionally, a complete dataset is divided into three mutually exclusive subsets:   Training Set  The training set training set contains the sample data used directly by the algorithm to learn patterns and adjust its parameters.    Validation Set  The validation set validation set provides an initial evaluation during training to fine-tune model settings and detect overfitting early.    Test Set  The test set test set is held back for the final, unbiased assessment of how the fully trained model will perform in the real world.   The validation set serves as a \"middle ground\" between training and final evaluation. During the development process, data scientists often try many different model configurations, which are known as hyperparameters hyperparameters . The validation set is used to evaluate these different configurations and choose the best one without ever touching the test set.  Using a validation set helps prevent overfitting to the test set. If a model is evaluated on the test set too many times during development, it can inadvertently learn patterns in the test set, and the final evaluation will be overly optimistic. The validation set allows for honest evaluation during development while keeping the test set pristine for final assessment.  Ideally, each example in the dataset should belong to strictly one of these three subsets. For example, a single data point should never appear in both the training set and the validation set.    Loss Functions and Error Severity  The quality of predictions from a model is formally measured using a loss function loss function . A loss function quantifies how much a model is penalized when its predicted output differs from the actual true value.  Different loss functions are selected depending on the problem class, as certain errors carry far greater consequences than others. For example, in medical diagnostics, incorrectly predicting that a patient does not have a serious condition when they actually do (a missed diagnosis) is generally far more dangerous than incorrectly flagging a healthy patient for follow-up testing.    False Positives vs. False Negatives  In classification problems, prediction errors are categorized based on the nature of the mistake:   False Positives  A false positive false positive occurs when a model incorrectly indicates that a condition or class is present when it is actually absent. For example, a medical diagnostic test incorrectly flagging a healthy patient as having a disease, or a spam filter incorrectly sending a legitimate email to the junk folder.    False Negatives  A false negative false negative occurs when a test result incorrectly indicates that a condition is absent when it is actually present. In medical testing, this means telling a sick patient that they are healthy, missing a critical window for treatment.   The distinction between false positives and false negatives is important because the cost of each type of error can be very different in practice. In some situations, false positives are more serious. For example, in a spam filter, a false positive (flagging a legitimate email as spam) might cause you to miss an important message. In other situations, false negatives are more serious. In a medical screening, a false negative (missing a disease that is actually present) could be life-threatening.  The choice of how to balance these errors depends on the application. This is often represented using a confusion matrix confusion matrix , which shows the counts of true positives, false positives, true negatives, and false negatives. From this matrix, we can compute various performance metrics, such as accuracy, precision, and recall.  Ultimately, evaluating a machine learning model requires assessing its performance across hundreds or thousands of individual predictions. A truly successful model does not simply score well on its training data—it demonstrates strong generalization when presented with new, unseen data in real-world scenarios.   Generalization generalization is the ability of a model to perform well on new, unseen data. This is the ultimate goal of machine learning. A model that cannot generalize is not learning—it is merely memorizing.  Achieving good generalization requires a balance of several factors: having enough high-quality training data, choosing a model of appropriate complexity, using regularization techniques to prevent overfitting, and thoroughly evaluating the model on a held-out test set. The entire machine learning process is designed with generalization in mind: training, validation, and testing are all steps toward building a model that can succeed in the real world.     Card Sort: Model Evaluation Terms   Match each term to its correct definition.    Overfitting occurs when a model memorizes training data, generalization measures how well it performs on unseen data, the validation set helps fine-tune hyperparameters, and the test set provides the final unbiased evaluation.     Overfitting  When a model performs well on training data but poorly on new data    Validation Set  Data used to fine-tune model settings and detect overfitting during development    Generalization  A model's ability to perform well on new, unseen data    Test Set  Data held back for the final, unbiased assessment of the trained model      "
},
{
  "id": "intro-evaluating-success-1",
  "level": "2",
  "url": "sec-evaluating-success.html#intro-evaluating-success-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "validity "
},
{
  "id": "subsec-data-splitting-2",
  "level": "2",
  "url": "sec-evaluating-success.html#subsec-data-splitting-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "validation set overfitting "
},
{
  "id": "subsec-data-splitting-5",
  "level": "2",
  "url": "sec-evaluating-success.html#subsec-data-splitting-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bias-variance tradeoff "
},
{
  "id": "par-training-set-2",
  "level": "2",
  "url": "sec-evaluating-success.html#par-training-set-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "training set "
},
{
  "id": "par-validation-set-2",
  "level": "2",
  "url": "sec-evaluating-success.html#par-validation-set-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "validation set "
},
{
  "id": "par-test-set-2",
  "level": "2",
  "url": "sec-evaluating-success.html#par-test-set-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "test set "
},
{
  "id": "subsec-data-splitting-10",
  "level": "2",
  "url": "sec-evaluating-success.html#subsec-data-splitting-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperparameters "
},
{
  "id": "subsec-loss-functions-2",
  "level": "2",
  "url": "sec-evaluating-success.html#subsec-loss-functions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "loss function "
},
{
  "id": "par-false-positive-2",
  "level": "2",
  "url": "sec-evaluating-success.html#par-false-positive-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "false positive "
},
{
  "id": "par-false-negative-2",
  "level": "2",
  "url": "sec-evaluating-success.html#par-false-negative-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "false negative "
},
{
  "id": "subsec-classification-errors-6",
  "level": "2",
  "url": "sec-evaluating-success.html#subsec-classification-errors-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "confusion matrix "
},
{
  "id": "subsec-classification-errors-8",
  "level": "2",
  "url": "sec-evaluating-success.html#subsec-classification-errors-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Generalization "
},
{
  "id": "model-evaluation-card-sort",
  "level": "2",
  "url": "sec-evaluating-success.html#model-evaluation-card-sort",
  "type": "Reading Question",
  "number": "5.5.4.1",
  "title": "Card Sort: Model Evaluation Terms.",
  "body": " Card Sort: Model Evaluation Terms   Match each term to its correct definition.    Overfitting occurs when a model memorizes training data, generalization measures how well it performs on unseen data, the validation set helps fine-tune hyperparameters, and the test set provides the final unbiased evaluation.     Overfitting  When a model performs well on training data but poorly on new data    Validation Set  Data used to fine-tune model settings and detect overfitting during development    Generalization  A model's ability to perform well on new, unseen data    Test Set  Data held back for the final, unbiased assessment of the trained model    "
},
{
  "id": "sec-mythbusting-ch5",
  "level": "1",
  "url": "sec-mythbusting-ch5.html",
  "type": "Section",
  "number": "5.6",
  "title": "Mythbusting",
  "body": " Mythbusting   Now that you have a better understanding of how machines actually learn—from supervised and unsupervised learning to reinforcement learning—let's officially dispel some myths about how AI learns, whether it truly learns like humans, and what it actually takes to build these systems.    Misconception: AI learns like humans  Reality: While there are superficial similarities in the learning processes of humans and AI, AI systems have no understanding of meaning, context, or cause and effect. They are fundamentally making statistical associations based on patterns in their training data. What they learn depends entirely on what data they are given. For example, face analysis systems trained on data with too few people of color cannot accurately process faces with dark skin. A medical system might miss significant patient background information, and a robot judge might suggest that someone is guilty because of previous convictions or the neighborhood they live in.  Why it matters: AI can find patterns that a human might miss due to the sheer size of the datasets they learn from, but this pattern recognition is fundamentally different from human comprehension. Unlike humans, AI does not learn from embodied experience and social interaction. It primarily relies on datasets, algorithms, and computing power. This means AI cannot develop true understanding or common sense, and its outputs are only as good as the data it was trained on.    Misconception: AI systems learn autonomously and without human programming  Reality: AI systems do not somehow learn by themselves if only their goal is specified. Training AI systems typically involves humans who select and prepare data, AI model architectures, and training algorithms. Dedicated human effort puts machine-learning algorithms in the right place where they can be most effective in extracting patterns and insights from data. The selection of the model is done on the basis of the experience and more or less subjective impression of the researcher, who decides what models should be explored, how they should be deployed, and how they should be evaluated.  Why it matters: Believing that AI learns autonomously underestimates the significant human effort involved in developing and maintaining AI systems. It also creates the false impression that AI is self-sufficient and requires less oversight than it actually does. Understanding the role of human expertise in AI development is crucial for proper governance, accountability, and realistic expectations about what AI can achieve.    Misconception: AI systems are easy to build and anyone can do it  Reality: Building sophisticated AI systems requires a significant investment of time, skill, and resources. It is not a solitary task but requires a collaborative effort of various experts, including data scientists, engineers, and domain specialists. This has not changed even though AI tools and frameworks have become more accessible and user-friendly. It is still necessary to understand the underlying principles. Insufficient awareness and careless use may lead to untrustworthy applications and ethical problems.  Why it matters: The misconception that anyone can easily build AI systems leads to unrealistic expectations, poor-quality applications, and potential harm from systems that are not properly designed or tested. This is particularly concerning in educational and business contexts where people may assume they can implement AI without adequate expertise. Recognizing the complexity of AI development helps promote responsible practices and appropriate allocation of resources.    Misconception: To improve an AI system, just add more data  Reality: Data quantity is fundamental for training AI models, but improving overall performance requires a holistic approach beyond simply increasing data volume. Ensuring high data quality, modifying the AI model architecture, and adjusting training methods are also essential strategies. Adding more data to an AI system without focusing on quality is akin to throwing more ingredients into a pastry bowl trying to adjust a poorly crafted recipe.  Why it matters: The belief that more data always makes AI better leads to wasted resources and unrealistic expectations. Poor-quality data can actively harm AI performance, producing unreliable and untrustworthy results. Emphasizing data quality over quantity helps build more effective AI systems and prevents the spread of biases and errors through poorly curated datasets.    Misconception: AI systems operate without human intervention  Reality: During its operational phase, an AI system usually still requires human oversight and maintenance to ensure that it keeps working as intended. Humans can play a central role in correcting errors, handling unforeseen circumstances, and updating the AI system. Humans can also review critical decisions in areas such as healthcare, law enforcement, or hiring. Many AI systems are designed to enhance and support human decision-making, rather than replace it.  Why it matters: Believing that AI systems operate without human intervention overlooks the ongoing human effort required to maintain and oversee AI systems. This misconception can lead to overreliance on AI and insufficient preparation for failures or unexpected outcomes. Understanding the need for human oversight helps ensure that AI is used responsibly and that human expertise is valued in AI deployment.    Misconception: The current most successful AI methods address complex questions  Reality: The current most successful AI methods, namely neural network neural networks, do not address complex questions but simple ones such as classification or regression for high-dimensional data. This goes counter to the tradition of AI taking on novel and complex problems. These complex questions are addressed reductionistically, dissecting the original problem into smaller subproblems rather than addressing them as a whole. This may be considered a maturing process of AI settling after a rebellious adolescence against the limitations of existing fields like control theory, signal processing, or statistics.  Why it matters: Recognizing that AI currently excels at solving simple, well-defined problems for high-dimensional data helps set realistic expectations about what AI can achieve. It also highlights that AI is not a magical solution to all problems but a tool that works best when applied to appropriate tasks. This understanding is crucial for businesses, researchers, and policymakers when deciding where to invest in AI.      Which of the following statements about AI learning are supported by the section?      The statistical patterns AI identifies are ultimately a reflection of human decisions about what data to collect and how to structure learning problems.    Correct. AI algorithms learn strictly from datasets curated, structured, and supplied by human developers.      AI's inability to understand cause and effect means it cannot reliably determine whether a correlation in its training data represents a causal relationship.    Correct. AI identifies mathematical patterns and correlations rather than understanding causal relationships.      Because AI processes data at a scale beyond human capability, its pattern recognition can sometimes approximate true comprehension of complex phenomena.    Incorrect. Processing data at scale allows for complex statistical matching, but scale does not equal true comprehension.      The way AI learns from datasets shares fundamental similarities with how humans learn from social interaction, just at a much faster pace.    Incorrect. Human learning relies on social interaction, semantics, and context, whereas AI relies on mathematical pattern prediction across datasets.      An AI system trained on biased data will produce biased outputs, even if the algorithm itself is mathematically neutral.    Correct. AI outputs inherit whatever biases exist in the underlying training data.      Remember that AI models perform statistical pattern prediction rather than genuine human comprehension or cause-and-effect reasoning.     AI limitations   Which of the following implications follow from the section's claim that AI systems have no understanding of meaning, context, or cause and effect ?      An AI trained to detect disease from medical images cannot explain why a particular pattern indicates illness in biological terms.    Correct. The AI spots visual data correlations in scans, but lacks biological or semantic understanding.      An AI system could identify that people with certain zip codes are more likely to default on loans, but it cannot determine whether zip code is a legitimate factor or a proxy for discriminatory redlining.    Correct. AI detects statistical relationships but lacks the social, historical, and moral context to recognize proxy variables.      If an AI system is trained on sufficient data from diverse sources, it can eventually develop contextual awareness equivalent to a human expert.    Incorrect. Adding more data refines statistical accuracy, but it does not grant an algorithm genuine contextual awareness or human-level comprehension.      The outputs of an AI system should be treated as probabilistic suggestions rather than definitive judgments.    Correct. Because AI outputs are generated from statistical probabilities rather than true understanding, they require human evaluation.      Consider which scenarios demonstrate a lack of real-world context or moral reasoning.     "
},
{
  "id": "ai-learning",
  "level": "2",
  "url": "sec-mythbusting-ch5.html#ai-learning",
  "type": "Reading Question",
  "number": "5.6.1",
  "title": "",
  "body": "  Which of the following statements about AI learning are supported by the section?      The statistical patterns AI identifies are ultimately a reflection of human decisions about what data to collect and how to structure learning problems.    Correct. AI algorithms learn strictly from datasets curated, structured, and supplied by human developers.      AI's inability to understand cause and effect means it cannot reliably determine whether a correlation in its training data represents a causal relationship.    Correct. AI identifies mathematical patterns and correlations rather than understanding causal relationships.      Because AI processes data at a scale beyond human capability, its pattern recognition can sometimes approximate true comprehension of complex phenomena.    Incorrect. Processing data at scale allows for complex statistical matching, but scale does not equal true comprehension.      The way AI learns from datasets shares fundamental similarities with how humans learn from social interaction, just at a much faster pace.    Incorrect. Human learning relies on social interaction, semantics, and context, whereas AI relies on mathematical pattern prediction across datasets.      An AI system trained on biased data will produce biased outputs, even if the algorithm itself is mathematically neutral.    Correct. AI outputs inherit whatever biases exist in the underlying training data.      Remember that AI models perform statistical pattern prediction rather than genuine human comprehension or cause-and-effect reasoning.   "
},
{
  "id": "ai-implications-understanding",
  "level": "2",
  "url": "sec-mythbusting-ch5.html#ai-implications-understanding",
  "type": "Reading Question",
  "number": "5.6.2",
  "title": "",
  "body": " AI limitations   Which of the following implications follow from the section's claim that AI systems have no understanding of meaning, context, or cause and effect ?      An AI trained to detect disease from medical images cannot explain why a particular pattern indicates illness in biological terms.    Correct. The AI spots visual data correlations in scans, but lacks biological or semantic understanding.      An AI system could identify that people with certain zip codes are more likely to default on loans, but it cannot determine whether zip code is a legitimate factor or a proxy for discriminatory redlining.    Correct. AI detects statistical relationships but lacks the social, historical, and moral context to recognize proxy variables.      If an AI system is trained on sufficient data from diverse sources, it can eventually develop contextual awareness equivalent to a human expert.    Incorrect. Adding more data refines statistical accuracy, but it does not grant an algorithm genuine contextual awareness or human-level comprehension.      The outputs of an AI system should be treated as probabilistic suggestions rather than definitive judgments.    Correct. Because AI outputs are generated from statistical probabilities rather than true understanding, they require human evaluation.      Consider which scenarios demonstrate a lack of real-world context or moral reasoning.   "
},
{
  "id": "sec-artificial-neurons",
  "level": "1",
  "url": "sec-artificial-neurons.html",
  "type": "Section",
  "number": "6.1",
  "title": "Artificial Neurons",
  "body": " Artificial Neurons   The human visual system is one of the wonders of the world. Consider the following sequence of handwritten digits:   A sequence of six handwritten digits.   A sequence of handwritten digits showing the numbers 5, 0, 4, 1, 9, and 2.   A horizontal row displaying six handwritten numerical digits: 5, 0, 4, 1, 9, and 2. The digits vary in stroke thickness and slight slant, reflecting natural human handwriting styles.     Most people effortlessly recognize those digits as 504192. That ease is deceptive. In each hemisphere of our brain, humans have a primary visual cortex, also known as V1, containing 140 million neurons, with tens of billions of connections between them. And yet human vision involves not just V1, but an entire series of visual cortices—V2, V3, V4, and V5—doing progressively more complex image processing. We carry in our heads a supercomputer, tuned by evolution over hundreds of millions of years, and superbly adapted to understand the visual world. Recognizing handwritten digits isn't easy. Rather, we humans are astoundingly good at making sense of what our eyes show us. But nearly all that work is done unconsciously. And so we don't usually appreciate how tough a problem our visual systems solve.  The difficulty of visual pattern recognition becomes apparent if you attempt to write a computer program to recognize digits like those above. What seems easy when we do it ourselves suddenly becomes extremely difficult. Simple intuitions about how we recognize shapes – a 9 has a loop at the top, and a vertical stroke in the bottom right – turn out to be not so simple to express algorithmically. When you try to make such rules precise, you quickly get lost in a morass of exceptions and caveats and special cases. It seems hopeless.   A grid of 100 handwritten digits.   A grid of 100 handwritten digits.   A 10x10 grid displaying 100 handwritten numerical digits, each varying in style, thickness, and slant, showcasing the diversity of human handwriting.      Artificial neural networks artificial neural network ( ANNs ANN ) approach the problem in a different way. The idea is to take a large number of examples, known as training examples (as seen above), and then develop a system which can learn from those training examples. In other words, the neural network uses the examples to automatically infer rules. To understand how this works, we must look at the basic neuron models.   Look Closer..  Why do we need neural networks for something as simple as recognizing numbers? Think about trying to write strict code for every possible way someone could write a loop or a curve. A person's handwriting might be slanted, cramped, or messy, completely breaking rigid programmatic rules. Neural networks bypass this by learning the flexible features of each digit straight from data, much like how humans learn to read handwriting through exposure rather than memorizing a rulebook.     Perceptrons  To get started, we'll explain a type of artificial neuron called a perceptron perceptron . Perceptrons were developed in the 1950s and 1960s by the scientist Frank Rosenblatt Rosenblatt, Frank , inspired by earlier work by Warren McCulloch McCulloch, Warren and Walter Pitts Pitts, Walter .  A way you can think about the perceptron is that it's a device that makes decisions by weighing up evidence. A perceptron takes several binary inputs and produces a single binary output (either a 0 or a 1). To determine this output, Rosenblatt introduced two key parameters:     Weights weights  Real numbers expressing the importance of the respective inputs to the output.    Bias bias  A measure of how easy it is to get the perceptron to output a 1. It replaces the concept of a rigid threshold.     These terms are further discussed in section 6.2. By varying the weights and the bias, we can get different models of decision-making. A many-layer network of perceptrons can engage in sophisticated decision-making, where a perceptron in the second layer can make a decision at a more complex and more abstract level than perceptrons in the first layer.    The Learning Problem  While perceptrons are a useful model, a network of perceptrons cannot easily learn. The problem is that a small change in the weights or bias of any single perceptron in the network can sometimes cause the output of that perceptron to completely flip, say from 0 to 1.  That flip may then cause the behavior of the rest of the network to completely change in some very complicated way. That makes it difficult to see how to gradually modify the weights and biases so that the network gets closer to the desired behavior. Luckily there's a clever way of getting around this problem.    Sigmoid Neurons  We can overcome this problem by introducing a new type of artificial neuron called a sigmoid neuron sigmoid neuron . Sigmoid neurons are similar to perceptrons, but modified so that small changes in their weights and bias cause only a small change in their output. That's the crucial fact which will allow a network of sigmoid neurons to learn.  Just like a perceptron, the sigmoid neuron has inputs, weights, and a bias. But instead of being just 0 or 1, the inputs and output can take on any real numbers between 0 and 1 (for example, 0.638...).   The smooth S-shaped graph of the sigmoid activation function.   A graph plotting the smooth S-curve of a sigmoid function ranging from 0 to 1.   A Cartesian coordinate plot illustrating the sigmoid function curve. The vertical axis ranges from 0 to 1, while the horizontal axis represents inputs, demonstrating a smooth, continuous S-shape transition from 0 up to 1.     To calculate this output, the sigmoid neuron uses a specific function called the sigmoid function sigmoid function (or logistic function). The mathematical hook of the sigmoid function is its shape when plotted on a graph: it is a smooth, S-shaped curve.  Because of this geometric smoothness, a small change in the weights or bias of a sigmoid neuron will produce a small change in the output. In fact, the output changes linearly and predictably with small modifications. This smooth responsiveness is what makes it possible for a neural network to gradually tune its parameters, learn from data, and improve its performance over time.   "
},
{
  "id": "fig-handwritten-6-digits",
  "level": "2",
  "url": "sec-artificial-neurons.html#fig-handwritten-6-digits",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": " A sequence of six handwritten digits.   A sequence of handwritten digits showing the numbers 5, 0, 4, 1, 9, and 2.   A horizontal row displaying six handwritten numerical digits: 5, 0, 4, 1, 9, and 2. The digits vary in stroke thickness and slight slant, reflecting natural human handwriting styles.    "
},
{
  "id": "fig-handwritten-100-digits",
  "level": "2",
  "url": "sec-artificial-neurons.html#fig-handwritten-100-digits",
  "type": "Figure",
  "number": "6.1.2",
  "title": "",
  "body": " A grid of 100 handwritten digits.   A grid of 100 handwritten digits.   A 10x10 grid displaying 100 handwritten numerical digits, each varying in style, thickness, and slant, showcasing the diversity of human handwriting.    "
},
{
  "id": "intro-artificial-neurons-6",
  "level": "2",
  "url": "sec-artificial-neurons.html#intro-artificial-neurons-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Artificial neural networks ANNs "
},
{
  "id": "subsec-perceptrons-2",
  "level": "2",
  "url": "sec-artificial-neurons.html#subsec-perceptrons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "perceptron "
},
{
  "id": "subsec-perceptrons-4",
  "level": "2",
  "url": "sec-artificial-neurons.html#subsec-perceptrons-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Weights Bias "
},
{
  "id": "subsec-sigmoid-neurons-2",
  "level": "2",
  "url": "sec-artificial-neurons.html#subsec-sigmoid-neurons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sigmoid neuron "
},
{
  "id": "fig-sigmoid-curve",
  "level": "2",
  "url": "sec-artificial-neurons.html#fig-sigmoid-curve",
  "type": "Figure",
  "number": "6.1.3",
  "title": "",
  "body": " The smooth S-shaped graph of the sigmoid activation function.   A graph plotting the smooth S-curve of a sigmoid function ranging from 0 to 1.   A Cartesian coordinate plot illustrating the sigmoid function curve. The vertical axis ranges from 0 to 1, while the horizontal axis represents inputs, demonstrating a smooth, continuous S-shape transition from 0 up to 1.    "
},
{
  "id": "subsec-sigmoid-neurons-5",
  "level": "2",
  "url": "sec-artificial-neurons.html#subsec-sigmoid-neurons-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sigmoid function "
},
{
  "id": "sec-inputs-weights-and-biases",
  "level": "1",
  "url": "sec-inputs-weights-and-biases.html",
  "type": "Section",
  "number": "6.2",
  "title": "Inputs, Weights, and Biases",
  "body": " Inputs, Weights, and Biases   Inputs, weights, and biases are three of the most fundamental concepts in artificial neural networks (ANNs), and the relationship between them forms the backbone of the entire system.   Look Closer..  Think of an artificial neuron like making a group decision with friends about where to eat dinner. Each friend's suggestion is an \"input.\" The friends you trust most on food recommendations get higher \"weight\" in your decision. Your baseline mood—whether you are starving and eager to agree to anything, or picky and hard to satisfy—acts as your \"bias.\" Combining how much you weight everyone's input with your internal baseline determines whether you decide to say yes or no.     The Role of Each Component  To understand how a neuron computes an answer, we first break down the three primary building blocks that drive its calculation:     Inputs   Inputs inputs represent the evidence or raw features passed forward from the preceding layer of neurons. In the very first layer of a network (the input layer), these values correspond to the raw data itself, such as the pixel intensities of an image. In subsequent layers, the inputs are the activation outputs generated by the hidden neurons that came before them.    Weights   Weights weights are parameters that express the importance of the respective inputs to the output. You can think of the network as weighing up evidence. If a particular input is highly significant to the correct decision, it is assigned a large weight. Conversely, if an input is of little consequence, its weight will hover close to zero. Negative weights represent evidence that actively contradicts or suppresses a particular outcome.    Biases  The bias bias is a measure of how easy it is to get the neuron to output a 1. To put it in more biological terms, the bias is a measure of how easy it is to get the artificial neuron to fire. For a neuron with a really big bias, it's extremely easy to output a 1. But if the bias is very negative, then it's difficult for the neuron to fire. The bias serves as an internal threshold, determining how much total weighted evidence a neuron must accumulate before it shifts its state.       How the Layer Activates  What do we mean by activates ? To understand this phrase, recall our biological analogy. In the human brain, a neuron fires (or activates) when it receives a strong enough electrical signal. In an ANN, a layer activates when it takes incoming data, weighs the evidence, and calculates a final numeric output. How a layer activates is simply the mechanical process of deciding how strongly each neuron will fire its signal forward.   The single artificial neuron: conceptual workflow.   Diagram showing inputs multiplied by weights, summed together with bias, and passed to an activation function.   A flow diagram illustrates the step-by-step mathematical process inside a single artificial neuron. It starts with three distinct input values, labeled Input 1, Input 2, and Input 3. Each input is multiplied by its corresponding weight parameter, denoted as w1, w2, and w3. Text above these connections explains this action as \"Multiplying inputs by weights.\"  The resulting products (e.g., Input 1 * Weight 1) are channeled into a central, blue circular node representing the summing function, indicated by a large summation symbol (Σ). The text \"Σ(Input × Weight)\" details this operation. A separate orange block for \"BIAS\" adds a parameter 'b' directly into the summation node, with text explaining that the bias acts as \"Adjusting the output threshold.\"  An arrow carries the combined sum to an orange rectangle labeled \"ACTIVATION FUNCTION.\" This step is described as \"Applying a non-linear rule.\" The box includes graphical representations of common activation functions: a \"Step Function\" with a chart showing a sharp on\/off threshold, and a \"Sigmoid Function\" with an S-curve chart and its corresponding formula, f(z) = 1\/(1+e⁻ᶻ). A final output value, labeled \"OUTPUT,\" emerges from the activation function node, completing the workflow.     To calculate the active signal of a single neuron in a new layer, the network performs a straightforward, step-by-step process:      Weighing the Evidence: We multiply each incoming activation from the previous layer of neurons by its corresponding weight.     Summing the Values: We add all of these weighted inputs together to create a single sum.     Adding the Bias: We add the neuron's individual bias to this sum.     Applying the Activation Function: Finally, we pass this entire total through our activation function (the sigmoid function) to get the neuron's final output.     Applying this process to all the neurons at once gives us a global way of thinking about how layers interact: we apply the weight matrix to the previous layer's activations, add the bias vector, and apply our activation function to the total.    Activation Functions  The activation function activation function acts as a mathematical filter that shapes the final output of the neuron, compressing the calculated value into a predictable range (such as a smooth gradient between 0 and 1). While we have focused on the sigmoid function as our primary example, modern AI utilizes a variety of other activation functions to filter signals differently depending on the specific problem the network is trying to solve. Two of the most common include:     Rectified Linear Unit (ReLU) rectified linear unit ReLU  A simple, fast activation function that outputs the input directly if it is positive, and outputs zero if it is negative (mathematically, ). It is the default choice for many deep neural networks because it helps prevent training bottlenecks.    Hyperbolic Tangent (tanh) hyperbolic tangent tanh  An S-shaped curve similar to the sigmoid function, but it maps input values to a range between -1 and 1. Because its outputs are zero-centered, it often makes optimization easier during training.      Graphs comparing common activation functions: Sigmoid, Step, ReLU, and tanh.   A grid of four graphs, each showing the curve and formula for a different neural network activation function: Sigmoid, ReLU, Tanh, and Step.   A 2x2 grid of graphs compares four common activation functions. Each graph includes a curve of the function, its name, and its mathematical formula.  The top-left graph shows the \"SIGMOID ACTIVATION FUNCTION (σ(x) = 1 \/ (1 + e⁻ˣ))\". A blue S-shaped curve rises from near 0 at input -5 to near 1 at input 5. It passes through the y-intercept at f(0) = 0.5.  The top-right graph shows the \"ReLU ACTIVATION FUNCTION (f(x) = max(0, x))\". A red line is flat at y=0 for all negative inputs (from -5 to 0) and then rises diagonally (where y=x) for all positive inputs (from 0 up to 5).  The bottom-left graph shows the \"TANH ACTIVATION FUNCTION (f(x) = (eˣ - e⁻ˣ) \/ (eˣ + e⁻ˣ))\". A green S-shaped curve, similar to the sigmoid, is zero-centered. It rises from near -1 at input -5, passes through the origin (0, 0), and reaches near 1 at input 5.  The bottom-right graph shows the \"STEP ACTIVATION FUNCTION (f(x) = 1 if x ≥ 0; 0 if x < 0)\". A purple plot shows a function that is flat at y=0 for all negative inputs, jumps directly to 1 at input 0 (represented by a solid dot at (0,1) and an open dot at (0,0)), and remains flat at y=1 for all positive inputs.  A \"KEY CHARACTERISTICS\" section at the bottom provides short descriptions of each function, such as \"Sigmoid: Bounded 0 to 1,\" \"ReLU: computationally efficient,\" \"Tanh: zero-centered,\" and \"Step: Discrete binary output.\"     Without an activation function, a neural network would merely perform basic addition and multiplication. This means the entire system would collapse into a simple, flat linear calculation, making it mathematically impossible for the network to understand or infer complex, non-linear patterns. The non-linear nature of the activation function bends the signal, enabling the network to learn intricate and highly abstract behaviors.      Match each neural network component on the left with its correct function on the right. Each function may describe only one component.    Think about what each component does in the flow of information through a neuron. What enters the neuron? What determines how much each input matters? What allows the neuron to fire more or less easily? What transforms the final signal into a usable output?     The raw evidence or features passed into the neuron from the previous layer or from the data itself  Inputs    Parameters that express how much influence each incoming signal has on the neuron's decision  Weights    A parameter that makes it easier or harder for the neuron to fire by shifting the activation threshold  Bias    A mathematical filter that compresses the neuron's total signal into a specific output range  Activation Function      "
},
{
  "id": "subsec-role-of-components-3",
  "level": "2",
  "url": "sec-inputs-weights-and-biases.html#subsec-role-of-components-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inputs Inputs Weights Weights Biases bias "
},
{
  "id": "fig-neuron-activation-process",
  "level": "2",
  "url": "sec-inputs-weights-and-biases.html#fig-neuron-activation-process",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " The single artificial neuron: conceptual workflow.   Diagram showing inputs multiplied by weights, summed together with bias, and passed to an activation function.   A flow diagram illustrates the step-by-step mathematical process inside a single artificial neuron. It starts with three distinct input values, labeled Input 1, Input 2, and Input 3. Each input is multiplied by its corresponding weight parameter, denoted as w1, w2, and w3. Text above these connections explains this action as \"Multiplying inputs by weights.\"  The resulting products (e.g., Input 1 * Weight 1) are channeled into a central, blue circular node representing the summing function, indicated by a large summation symbol (Σ). The text \"Σ(Input × Weight)\" details this operation. A separate orange block for \"BIAS\" adds a parameter 'b' directly into the summation node, with text explaining that the bias acts as \"Adjusting the output threshold.\"  An arrow carries the combined sum to an orange rectangle labeled \"ACTIVATION FUNCTION.\" This step is described as \"Applying a non-linear rule.\" The box includes graphical representations of common activation functions: a \"Step Function\" with a chart showing a sharp on\/off threshold, and a \"Sigmoid Function\" with an S-curve chart and its corresponding formula, f(z) = 1\/(1+e⁻ᶻ). A final output value, labeled \"OUTPUT,\" emerges from the activation function node, completing the workflow.    "
},
{
  "id": "subsec-activation-function-2",
  "level": "2",
  "url": "sec-inputs-weights-and-biases.html#subsec-activation-function-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "activation function "
},
{
  "id": "subsec-activation-function-3",
  "level": "2",
  "url": "sec-inputs-weights-and-biases.html#subsec-activation-function-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Rectified Linear Unit (ReLU) Hyperbolic Tangent (tanh) "
},
{
  "id": "fig-activation-functions-comparison",
  "level": "2",
  "url": "sec-inputs-weights-and-biases.html#fig-activation-functions-comparison",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": " Graphs comparing common activation functions: Sigmoid, Step, ReLU, and tanh.   A grid of four graphs, each showing the curve and formula for a different neural network activation function: Sigmoid, ReLU, Tanh, and Step.   A 2x2 grid of graphs compares four common activation functions. Each graph includes a curve of the function, its name, and its mathematical formula.  The top-left graph shows the \"SIGMOID ACTIVATION FUNCTION (σ(x) = 1 \/ (1 + e⁻ˣ))\". A blue S-shaped curve rises from near 0 at input -5 to near 1 at input 5. It passes through the y-intercept at f(0) = 0.5.  The top-right graph shows the \"ReLU ACTIVATION FUNCTION (f(x) = max(0, x))\". A red line is flat at y=0 for all negative inputs (from -5 to 0) and then rises diagonally (where y=x) for all positive inputs (from 0 up to 5).  The bottom-left graph shows the \"TANH ACTIVATION FUNCTION (f(x) = (eˣ - e⁻ˣ) \/ (eˣ + e⁻ˣ))\". A green S-shaped curve, similar to the sigmoid, is zero-centered. It rises from near -1 at input -5, passes through the origin (0, 0), and reaches near 1 at input 5.  The bottom-right graph shows the \"STEP ACTIVATION FUNCTION (f(x) = 1 if x ≥ 0; 0 if x < 0)\". A purple plot shows a function that is flat at y=0 for all negative inputs, jumps directly to 1 at input 0 (represented by a solid dot at (0,1) and an open dot at (0,0)), and remains flat at y=1 for all positive inputs.  A \"KEY CHARACTERISTICS\" section at the bottom provides short descriptions of each function, such as \"Sigmoid: Bounded 0 to 1,\" \"ReLU: computationally efficient,\" \"Tanh: zero-centered,\" and \"Step: Discrete binary output.\"    "
},
{
  "id": "cardsort-neural-network-components",
  "level": "2",
  "url": "sec-inputs-weights-and-biases.html#cardsort-neural-network-components",
  "type": "Reading Question",
  "number": "6.2.4.1",
  "title": "",
  "body": "  Match each neural network component on the left with its correct function on the right. Each function may describe only one component.    Think about what each component does in the flow of information through a neuron. What enters the neuron? What determines how much each input matters? What allows the neuron to fire more or less easily? What transforms the final signal into a usable output?     The raw evidence or features passed into the neuron from the previous layer or from the data itself  Inputs    Parameters that express how much influence each incoming signal has on the neuron's decision  Weights    A parameter that makes it easier or harder for the neuron to fire by shifting the activation threshold  Bias    A mathematical filter that compresses the neuron's total signal into a specific output range  Activation Function    "
},
{
  "id": "sec-the-power-of-layers",
  "level": "1",
  "url": "sec-the-power-of-layers.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Power of Layers",
  "body": " The Power of Layers   To build intuition about how networks function, let's look at how we might approach a complex problem like face detection. We could attack this by using the pixels in an image as input to a neural network.  Forgetting neural networks entirely for the moment, a heuristic we could use is to decompose the problem into sub-problems:     Does the image have an eye in the top left?    Does it have an eye in the top right?    Does it have a nose in the middle?    Does it have a mouth in the bottom middle?    Is there hair on top?     If the answers to several of these questions are yes , or even just probably yes , then we'd conclude that the image is likely to be a face. Conversely, if the answers to most of the questions are no , then the image probably isn't a face.  It's also plausible that the sub-problems can be further decomposed. Suppose we're considering the question: Is there an eye in the top left? This can be decomposed into questions such as: Is there an eyebrow? ; Are there eyelashes? ; Is there an iris? ; and so on.   Hierarchical decomposition: breaking down a complex visual problem (face detection) into progressively simpler feature checks.   A top-down flowchart illustrating how a full image of a face breaks down into component parts, basic primitives, and fundamental edge\/line orientations.   A structured tree diagram titled \"HIERARCHICAL DECOMPOSITION: BREAKING DOWN COMPLEX VISUAL PROBLEMS\" illustrates the multi-level feature breakdown used in computer vision tasks like face detection.  At the top, labeled \"COMPLEX OBJECT: FACE DETECTION,\" is an image of a complete human face inside a framed box.  An arrow points down to the second tier, labeled \"MID-LEVEL FEATURES: COMPONENT PARTS.\" This level breaks the face down into four distinct, color-coded component categories: \"EYES\" (blue), \"NOSE\" (green), \"MOUTH\" (orange), and \"FACE SHAPE\" (yellow).  Arrows lead down to the third tier, labeled \"LOW-LEVEL FEATURES: BASIC PRIMITIVES.\" Here, each component is decomposed further:  \"EYES\" decomposes into \"EYE CURVE,\" \"EYELID LINE,\" and \"PUPIL CIRCLE.\"  \"NOSE\" decomposes into \"BRIDGE EDGE\" and \"NOSTRIL CURVE.\"  \"MOUTH\" decomposes into \"LIP LINE\" and \"MOUTH CURVE.\"  \"FACE SHAPE\" decomposes into \"JAWLINE\" and \"CHEEK CURVE.\"  Finally, arrows lead down to the bottom tier, labeled \"BASE FEATURES: EDGES, LINES, AND ORIENTATIONS.\" At this foundational level, primitives are reduced to raw geometric elements and directional filters, such as \"VERTICAL EDGE,\" \"HORIZONTAL LINE,\" \"DIAGONAL ORIENTATION,\" \"SMALL CURVE,\" and pixel-level Gabor\/edge filter patches.     The end result is a network which breaks down a very complicated question—does this image show a face or not—into very simple questions answerable at the level of single pixels.   Look Closer..  Think of hierarchical learning like building with toy blocks. Instead of manufacturing a whole toy castle out of plastic all at once, you assemble simple individual blocks into walls, combine walls into towers, and connect towers into a finished castle. Deep layers work the exact same way: early layers assemble raw pixels into simple edges, middle layers combine edges into shapes like eyes or noses, and final layers combine those shapes to identify an entire face.     Deep Networks and the Mystery of Layers  Networks with this kind of many-layer structure—two or more hidden layers—are called deep neural networks deep neural network .  So far, we have studied what are called fully connected neural networks fully connected neural networks , in which all of the units at one layer are connected to all of the units in the next layer. This is a good arrangement when we don’t know anything about what kind of mapping from inputs to outputs we will be asking the network to learn to approximate.  But if we do know something about our problem, it is better to build it into the structure of our neural network. Doing so can save computation time and significantly diminish the amount of training data required to arrive at a solution that generalizes robustly.  The reason deep nets perform far better on many problems than shallow neural networks (networks with just a single hidden layer) is their ability to build up a complex hierarchy of concepts. It's a bit like the way conventional programming languages use modular design and ideas about abstraction to enable the creation of complex computer programs.  Comparing a deep network to a shallow network is a bit like comparing a programming language with the ability to make function calls to a stripped-down language with no ability to make such calls. Abstraction takes a different form in neural networks than it does in conventional programming, but it's just as important.    Architectural Divergence: CNNs & RNNs  As neural networks evolved, specific arrangements of layers were developed to process different types of data structures. One very important application domain of neural networks, where the methods have achieved an enormous amount of success in recent years, is signal processing. Signals might be spatial (in two-dimensional camera images or three-dimensional depth or CAT scans) or temporal (speech or music). If we know that we are addressing a signal-processing problem, we can take advantage of invariant properties of that problem.   Convolutional Neural Networks (CNNs) convolutional neural network CNN : In fully connected layers, the inputs are treated as a simple, flat vertical line of neurons. In a convolutional net, it helps to think instead of the inputs as a square or two-dimensional array of pixels, whose values correspond to pixel intensities (such as three integer values encoding intensity levels in red, green, and blue color channels).  There are two important pieces of prior structural knowledge we can bring to bear on visual problems:     Spatial Locality   spatial locality The set of pixels we will have to take into consideration to find an object will be near one another in the image. We won’t have to consider some combination of pixels in the four corners of the image in order to see if they encode an object.    Translation Invariance   translation invariance The pattern of pixels that characterizes an object is the same no matter where in the image the object occurs. Objects don’t look different if they’re on the left or the right side of the image.     To exploit these properties, convolutional networks pass a filter (also called a convolutional kernel convolutional kernel ) along the image, multiplying the filter's values by the corresponding pixel values in each local neighborhood and summing them up at each step. This process of applying the filter to the image to create a new image is called convolution convolution .  A layer is formally defined by engineering traits that control this window:      Filter Size: The dimensions of the local window scanning the input pixels (such as a 5-by-5 square). This area of an input image that a filter is being applied to is called the receptive field receptive field .     Padding: How many extra pixels—typically with value 0—we add around the edges of the input. We generally pad the input image with 0 values to ensure that the output image maintains a proper shape when accessing pixels beyond the bounds of the original image.     Stride: The spacing at which we apply the filter to the image. A stride of one moves the window step-by-step. If we \"skip\" and apply the filter only at wider intervals, the stride increases, producing a resulting image of a smaller size.     Channels: Applying multiple filters to the original image results in new images called channels. Stacking all these new images up creates a cube of data, and these multi-dimensional chunks of data are called tensors tensors .      Max Pooling Layers: It is typical to structure filter banks into a pyramid, in which the image sizes get smaller in successive layers of processing. The idea is that we find local patterns, like bits of edges in the early layers, and then look for patterns in those patterns. Having a stride greater than one makes the images smaller, but does not necessarily aggregate information over that spatial range.  Another common layer type, which accomplishes this aggregation, is max pooling max pooling . A max pooling layer operates like a filter, but has no weights. It is a pure functional layer that simply returns the maximum value in its field. As a result of applying a max pooling layer, we don’t keep track of the precise location of a pattern. This helps our filters to learn to recognize patterns independent of their location.   Recurrent Neural Networks (RNNs) recurrent neural network RNN : While CNNs focus on spatial, grid-like data, other networks are explicitly built for temporal or sequential problems. In standard networks, there are no loops—information is always fed forward, never fed back.  There are also other models of artificial neural networks in which feedback loops are possible. These models are called recurrent neural networks.  In these models, neurons turn on for a brief moment and then go quiet. Before they shut off, they trigger neighboring neurons to fire shortly after, creating a chain reaction over time. This continuous looping effect is what allows the network to remember past information. Think of these neurons like a row of falling dominoes that loop back on themselves. One neuron fires briefly, triggers the next one a moment later, and shuts off, creating a continuous wave of activity that keeps the memory of past inputs alive in the network.    A Typical Network Architecture  Here is the form of a typical convolutional network:    Input Image  Filter \/ Convolution Layer  ReLU Layer  Max Pooling Layer  Fully Connected Layer  Output    After each filter layer there is generally a ReLU layer; there may be multiple filter\/ReLU layers, then a max pooling layer, then some more filter\/ReLU layers, then max pooling. Once the output is down to a relatively small size, there is typically a last fully-connected layer, leading into an activation function that produces the final classification output.  The critical point for us is that this is all just a big neural network, which takes an input and computes an output. The mapping is a differentiable function of the weights, which means we can adjust the weights to decrease the loss by performing gradient descent, and we can compute the relevant gradients using back-propagation. This will be discussed more in the next section.   "
},
{
  "id": "fig-hierarchical-decomposition",
  "level": "2",
  "url": "sec-the-power-of-layers.html#fig-hierarchical-decomposition",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": " Hierarchical decomposition: breaking down a complex visual problem (face detection) into progressively simpler feature checks.   A top-down flowchart illustrating how a full image of a face breaks down into component parts, basic primitives, and fundamental edge\/line orientations.   A structured tree diagram titled \"HIERARCHICAL DECOMPOSITION: BREAKING DOWN COMPLEX VISUAL PROBLEMS\" illustrates the multi-level feature breakdown used in computer vision tasks like face detection.  At the top, labeled \"COMPLEX OBJECT: FACE DETECTION,\" is an image of a complete human face inside a framed box.  An arrow points down to the second tier, labeled \"MID-LEVEL FEATURES: COMPONENT PARTS.\" This level breaks the face down into four distinct, color-coded component categories: \"EYES\" (blue), \"NOSE\" (green), \"MOUTH\" (orange), and \"FACE SHAPE\" (yellow).  Arrows lead down to the third tier, labeled \"LOW-LEVEL FEATURES: BASIC PRIMITIVES.\" Here, each component is decomposed further:  \"EYES\" decomposes into \"EYE CURVE,\" \"EYELID LINE,\" and \"PUPIL CIRCLE.\"  \"NOSE\" decomposes into \"BRIDGE EDGE\" and \"NOSTRIL CURVE.\"  \"MOUTH\" decomposes into \"LIP LINE\" and \"MOUTH CURVE.\"  \"FACE SHAPE\" decomposes into \"JAWLINE\" and \"CHEEK CURVE.\"  Finally, arrows lead down to the bottom tier, labeled \"BASE FEATURES: EDGES, LINES, AND ORIENTATIONS.\" At this foundational level, primitives are reduced to raw geometric elements and directional filters, such as \"VERTICAL EDGE,\" \"HORIZONTAL LINE,\" \"DIAGONAL ORIENTATION,\" \"SMALL CURVE,\" and pixel-level Gabor\/edge filter patches.    "
},
{
  "id": "subsec-deep-networks-mystery-2",
  "level": "2",
  "url": "sec-the-power-of-layers.html#subsec-deep-networks-mystery-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deep neural networks "
},
{
  "id": "subsec-deep-networks-mystery-3",
  "level": "2",
  "url": "sec-the-power-of-layers.html#subsec-deep-networks-mystery-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fully connected neural networks "
},
{
  "id": "subsec-cnns-and-rnns-3",
  "level": "2",
  "url": "sec-the-power-of-layers.html#subsec-cnns-and-rnns-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Convolutional Neural Networks (CNNs) "
},
{
  "id": "subsec-cnns-and-rnns-5",
  "level": "2",
  "url": "sec-the-power-of-layers.html#subsec-cnns-and-rnns-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Spatial Locality Translation Invariance "
},
{
  "id": "subsec-cnns-and-rnns-6",
  "level": "2",
  "url": "sec-the-power-of-layers.html#subsec-cnns-and-rnns-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convolutional kernel convolution "
},
{
  "id": "subsec-cnns-and-rnns-8",
  "level": "2",
  "url": "sec-the-power-of-layers.html#subsec-cnns-and-rnns-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "receptive field tensors "
},
{
  "id": "subsec-cnns-and-rnns-10",
  "level": "2",
  "url": "sec-the-power-of-layers.html#subsec-cnns-and-rnns-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "max pooling "
},
{
  "id": "subsec-cnns-and-rnns-11",
  "level": "2",
  "url": "sec-the-power-of-layers.html#subsec-cnns-and-rnns-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Recurrent Neural Networks (RNNs) "
},
{
  "id": "sec-training-the-network",
  "level": "1",
  "url": "sec-training-the-network.html",
  "type": "Section",
  "number": "6.4",
  "title": "Training the Network",
  "body": " Training the Network   Cost Function  To write an algorithm that can learn, we need a way to track how well it is doing. Our absolute goal in training a neural network is to find a specific combination of weights and biases which minimize a cost function.  A cost function cost function (sometimes called a loss function ) is a mathematical yardstick that measures a neural network's performance by calculating how far off its predictions are from the correct answers, outputting a single error score that we try to get as close to zero as possible. An example is the quadratic cost function quadratic cost function or mean squared error mean squared error .  The quadratic cost function works through a clear, systematic process:     We take a training input and pass it through the network to generate a prediction output.    We compare this prediction against the desired, correct output provided by our training data.    We calculate the difference between the network's guess and the correct answer, and then we square that difference.    Finally, we repeat this step for every single training input and compute the average value of all these squared differences.     If the actual outputs are approximately the same as the desired outputs for all training inputs, then the cost will be small. Conversely, if it is not, the cost will be large. The goal of our training algorithm is to find a set of weights and biases which make the cost as small as possible.   Look Closer..  Imagine learning to shoot a basketball in total darkness. You can't see the hoop, but someone calls out how many inches to the left or right your shot missed. Every shot gives you a specific error distance (your cost). Based on that feedback, you slightly tweak your arm angle and force (your weights and biases) for the next try. Over many throws, each small adjustment brings your shots closer and closer to a swish.     Learning with Gradient Descent  To minimize this cost function, we use an optimization algorithm called gradient descent gradient descent .   The Valley Analogy: The way the gradient descent algorithm works is to repeatedly compute the gradient and move in the opposite direction, falling down the slope of the valley.   A 3D cost surface landscape illustrating gradient descent, accompanied by a 2D cross-sectional view of calculated downhill steps.   Diagram featuring a 3D parabolic cost surface showing a ball descending into a valley along with an inset 2D cross-sectional view of the slope.   A diagram titled \"3D COST SURFACE VISUAL\" showing gradient descent optimization across an error landscape:   Central 3D Surface Plot: Displays a continuous cost surface (error space). A ball labeled \"START\" begins near a high-cost peak and follows a sequence of downward arrows down the slope, coming to rest at the lowest valley labeled \"MINIMUM.\"   Left Panel (Gradient Descent Iteration): Explains that each step moves downhill by analyzing the current surface slope, repeating until a low-cost valley is reached.   Right Panel (Local 2D View): Shows an inset 2D cross-section of the curve, illustrating the ball taking discrete, calculated steps down the slope toward the bottom.   Lower-Right Summary: Notes that combining the 3D surface and 2D cross-section shows both the overall error space topography and a localized view of the calculations.     We can visualize it as a ball rolling down into a valley. Notice that with our mathematical rule, gradient descent doesn't reproduce real physical motion. In real life, a ball has momentum, and that momentum may allow it to roll across the slope, or even momentarily roll uphill. It's only after the effects of friction set in that the ball is guaranteed to roll down into the valley.  By contrast, our rule for choosing updates says go down, right now . That's still a pretty good rule for finding the minimum!    Stochastic Gradient Descent (SGD)  To compute the exact direction down the valley, we technically need to average our calculations over all training inputs simultaneously. If the training set is very large, this can take a long time, and learning occurs slowly.  To speed up learning, we use stochastic gradient descent stochastic gradient descent SGD . This works by randomly choosing a small sample of training inputs, known as a mini-batch mini-batch . By averaging the gradient over this small sample, we can quickly estimate the true direction we need to go, allowing us to make rapid, frequent updates to the weights and biases.    The Backpropagation Algorithm  The backpropagation algorithm backpropagation gives us a way of computing how quickly the cost changes when we make small changes to any weight or bias in the network. It allows us to calculate all of these partial derivatives simultaneously and extremely quickly.   The two-phase iterative cycle of backpropagation: a forward pass calculates network predictions, followed by a backward pass that transmits error signals to update weights.   High-level diagram showing data moving rightward during the forward pass and error moving leftward during the backward pass across network layers.   A clean, two-phase schematic titled \"BACKPROPAGATION: A TWO-PHASE LEARNING CYCLE\" demonstrating network training.   Network Structure: Three visual blocks in the center mark the sequence of network layers: Input Layer, Hidden Layers, and Output Layer.   Phase 1 (Forward Pass): An upper blue arrow points left-to-right from an input (e.g., a cat image) through the layers to generate an output prediction. Neural activations are calculated forward to form this guess.   Phase 2 (Backward Pass): A lower orange arrow points right-to-left from the output back through the hidden layers toward the input. Prediction error signals travel backward to compute required weight updates (gradients).   Iterative Loop: A circular arrow on the side emphasizes that this forward-and-backward cycle repeats iteratively to continuously improve performance.     It operates through the step-by-step process listed below:     The Forward Pass   forward pass An input is sent forward through the network, layer by layer, calculating the active values of each neuron up to the final output layer.    Output Error   output error We calculate how far off our final predictions are from the correct, desired labels at the very end of the network.    Backpropagating the Error   backpropagating error We trace this error backward through the network, layer by layer, starting from the output layer and working back to the first hidden layer.    Updating the Parameters   updating parameters These backpropagated errors provide the exact information needed to make a small step down the cost landscape using gradient descent. Through millions of these tiny, layer-by-layer adjustments, the network gradually learns, refining its internal parameters until it can reliably solve complex real-world problems.         Consider the difference between standard gradient descent and stochastic gradient descent (SGD). Which of the following statements are true? Select all that apply.      Standard gradient descent computes the gradient using the entire training dataset for each update, while SGD computes it using a small mini-batch.    Correct. The \"stochastic\" part refers to using random mini-batches rather than the full dataset to estimate the gradient.      SGD is typically faster per update than standard gradient descent because it processes fewer examples.    Correct. Think about the math—if you compute a gradient using 100 examples versus 100,000 examples, which calculation finishes faster? SGD's speed advantage comes directly from processing less data per update.      Standard gradient descent will always find the global minimum of the cost function regardless of the network's architecture.    Incorrect. This statement overpromises what gradient descent can achieve. Neural networks have non-convex cost functions with many local minima. While gradient descent will reduce the cost, it does not guarantee finding the global minimum.      SGD introduces randomness into the training process because each mini-batch provides a different estimate of the true gradient.    Correct. The randomness from mini-batch sampling is what makes SGD \"stochastic.\" This noise can actually be beneficial, as it helps the network escape shallow local minima.      Using SGD rather than standard gradient descent guarantees the network will converge to a lower cost value.    Incorrect. This is an overstatement. SGD is not guaranteed to find a lower cost value than standard gradient descent. The noisy estimates mean SGD often converges to a slightly higher training cost, but it does so much faster and can sometimes find more generalizable solutions.       "
},
{
  "id": "subsec-cost-function-3",
  "level": "2",
  "url": "sec-training-the-network.html#subsec-cost-function-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cost function quadratic cost function mean squared error "
},
{
  "id": "subsec-gradient-descent-2",
  "level": "2",
  "url": "sec-training-the-network.html#subsec-gradient-descent-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient descent "
},
{
  "id": "fig-cost-surface-gradient-descent",
  "level": "2",
  "url": "sec-training-the-network.html#fig-cost-surface-gradient-descent",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " A 3D cost surface landscape illustrating gradient descent, accompanied by a 2D cross-sectional view of calculated downhill steps.   Diagram featuring a 3D parabolic cost surface showing a ball descending into a valley along with an inset 2D cross-sectional view of the slope.   A diagram titled \"3D COST SURFACE VISUAL\" showing gradient descent optimization across an error landscape:   Central 3D Surface Plot: Displays a continuous cost surface (error space). A ball labeled \"START\" begins near a high-cost peak and follows a sequence of downward arrows down the slope, coming to rest at the lowest valley labeled \"MINIMUM.\"   Left Panel (Gradient Descent Iteration): Explains that each step moves downhill by analyzing the current surface slope, repeating until a low-cost valley is reached.   Right Panel (Local 2D View): Shows an inset 2D cross-section of the curve, illustrating the ball taking discrete, calculated steps down the slope toward the bottom.   Lower-Right Summary: Notes that combining the 3D surface and 2D cross-section shows both the overall error space topography and a localized view of the calculations.    "
},
{
  "id": "subsec-stochastic-gradient-descent-3",
  "level": "2",
  "url": "sec-training-the-network.html#subsec-stochastic-gradient-descent-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stochastic gradient descent mini-batch "
},
{
  "id": "subsec-backpropagation-2",
  "level": "2",
  "url": "sec-training-the-network.html#subsec-backpropagation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "backpropagation algorithm "
},
{
  "id": "fig-backpropagation-flow",
  "level": "2",
  "url": "sec-training-the-network.html#fig-backpropagation-flow",
  "type": "Figure",
  "number": "6.4.2",
  "title": "",
  "body": " The two-phase iterative cycle of backpropagation: a forward pass calculates network predictions, followed by a backward pass that transmits error signals to update weights.   High-level diagram showing data moving rightward during the forward pass and error moving leftward during the backward pass across network layers.   A clean, two-phase schematic titled \"BACKPROPAGATION: A TWO-PHASE LEARNING CYCLE\" demonstrating network training.   Network Structure: Three visual blocks in the center mark the sequence of network layers: Input Layer, Hidden Layers, and Output Layer.   Phase 1 (Forward Pass): An upper blue arrow points left-to-right from an input (e.g., a cat image) through the layers to generate an output prediction. Neural activations are calculated forward to form this guess.   Phase 2 (Backward Pass): A lower orange arrow points right-to-left from the output back through the hidden layers toward the input. Prediction error signals travel backward to compute required weight updates (gradients).   Iterative Loop: A circular arrow on the side emphasizes that this forward-and-backward cycle repeats iteratively to continuously improve performance.    "
},
{
  "id": "subsec-backpropagation-5",
  "level": "2",
  "url": "sec-training-the-network.html#subsec-backpropagation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Forward Pass Output Error Backpropagating the Error Updating the Parameters "
},
{
  "id": "select-all-gradient-descent",
  "level": "2",
  "url": "sec-training-the-network.html#select-all-gradient-descent",
  "type": "Reading Question",
  "number": "6.4.5.1",
  "title": "",
  "body": "  Consider the difference between standard gradient descent and stochastic gradient descent (SGD). Which of the following statements are true? Select all that apply.      Standard gradient descent computes the gradient using the entire training dataset for each update, while SGD computes it using a small mini-batch.    Correct. The \"stochastic\" part refers to using random mini-batches rather than the full dataset to estimate the gradient.      SGD is typically faster per update than standard gradient descent because it processes fewer examples.    Correct. Think about the math—if you compute a gradient using 100 examples versus 100,000 examples, which calculation finishes faster? SGD's speed advantage comes directly from processing less data per update.      Standard gradient descent will always find the global minimum of the cost function regardless of the network's architecture.    Incorrect. This statement overpromises what gradient descent can achieve. Neural networks have non-convex cost functions with many local minima. While gradient descent will reduce the cost, it does not guarantee finding the global minimum.      SGD introduces randomness into the training process because each mini-batch provides a different estimate of the true gradient.    Correct. The randomness from mini-batch sampling is what makes SGD \"stochastic.\" This noise can actually be beneficial, as it helps the network escape shallow local minima.      Using SGD rather than standard gradient descent guarantees the network will converge to a lower cost value.    Incorrect. This is an overstatement. SGD is not guaranteed to find a lower cost value than standard gradient descent. The noisy estimates mean SGD often converges to a slightly higher training cost, but it does so much faster and can sometimes find more generalizable solutions.     "
},
{
  "id": "sec-large-language-models",
  "level": "1",
  "url": "sec-large-language-models.html",
  "type": "Section",
  "number": "6.5",
  "title": "Large Language Models",
  "body": " Large Language Models   The Backstory of Large Language Models   Large language models large language model (LLMs) LLM have become one of the most revolutionary advancements in artificial intelligence. These powerful systems can understand, generate, and even reason with human language in ways that were previously impossible. The key insight behind LLMs is that knowledge of the world and language can be learned simply by predicting the next word in a sentence over and over again. This approach has shifted how we build AI systems: instead of creating specialized models for each task, we now train one foundation model that can be adapted for many different problems.  The breakthrough came with the introduction of the Transformer transformer architecture in 2017. Transformers use a mechanism called self-attention self-attention that allows them to weigh the importance of different words in a sentence when making predictions. This made it possible to train much larger models on much more data. The result was a new generation of models—the large language models we use today—that exhibit remarkable capabilities in understanding and generating human language.  These models are called \"large\" because they have an enormous number of parameters parameters —the internal values the model learns during training. For example, GPT-3 has 175 billion parameters. When a model generates text, it does so step by step, predicting one token at a time and using that prediction to inform the next one. This autoregressive process is what allows LLMs to produce coherent, extended text.   Look Closer...  Imagine trying to predict the next word in a sentence like \"The cat sat on the ___.\" If you have read millions of sentences, you would know that \"mat\" is a very likely guess. Large language models do this on an unimaginable scale—they are trained on billions of sentences from books, websites, and articles. By repeatedly predicting the next word, they don't just learn language rules; they learn facts, reasoning patterns, and even some common sense about how the world works.     Training Large Language Models  Training an LLM is a massive undertaking. The model learns by predicting the next token and comparing its prediction to the actual token. The difference is measured by a loss function, and the model adjusts its parameters to reduce this loss over time. This process, called gradient descent gradient descent , is repeated billions of times across trillions of tokens of text.  The amount of data required is staggering. Modern LLMs are trained on datasets ranging from hundreds of billions to trillions of tokens, drawn from books, websites, articles, and code. The quality and diversity of this data are crucial—models trained on high-quality, diverse data perform better and generalize more effectively to new tasks. However, this also introduces challenges. Web-scraped data can contain errors, harmful content, and biases that the model may learn and reproduce.  A key finding in LLM research is the concept of scaling laws scaling laws . These laws show that model performance improves predictably as we increase the amount of data, the size of the model, and the computational resources used for training. This has motivated researchers to keep building larger and larger models. As models scale up, they sometimes exhibit emergent abilities emergent abilities —new capabilities that were not present in smaller versions.   Look Closer...  Training a large language model is like teaching a student by having them read billions of books. The student learns grammar, facts, and reasoning patterns just by absorbing all that text. But here's the catch—the student needs an enormous library and an army of teachers (computers) working around the clock. Training a model like GPT-3 costs millions of dollars in computing power alone.     Fine-Tuning and Alignment  After an LLM is pre-trained, it can be adapted for specific tasks. The most common method is fine-tuning fine-tuning , where the model is trained further on a smaller dataset of task-specific examples. Instruction fine-tuning instruction fine-tuning is a popular approach where the model learns to follow instructions by training on examples that pair instructions with desired outputs. This allows the model to understand and respond to a wide variety of user requests.  An important step in developing safe and useful LLMs is alignment alignment —ensuring that the model's behavior matches human values and intentions. Alignment is challenging because human values are diverse, subjective, and often context-dependent. A widely used alignment technique is reinforcement learning from human feedback reinforcement learning from human feedback ( RLHF RLHF ). In RLHF, humans evaluate model outputs by ranking them according to quality. These rankings are used to train a reward model reward model that predicts which outputs humans would prefer. The LLM is then fine-tuned using reinforcement learning to maximize the rewards predicted by this model.    Prompting and Reasoning  One of the most powerful features of LLMs is their ability to be prompted prompting —to perform tasks simply by being given instructions in natural language. This has given rise to prompt engineering prompt engineering , the practice of designing effective prompts to elicit desired responses. A good prompt can make the difference between a correct answer and an incorrect one.  A related concept is in-context learning in-context learning , where the model learns to perform a new task by seeing examples included in the prompt. This can be zero-shot zero-shot learning (no examples), one-shot one-shot learning (one example), or few-shot few-shot learning (several examples). In-context learning is remarkable because the model adapts to new tasks without any updates to its parameters—it simply uses the context provided in the prompt to infer what is expected.  A powerful prompting technique is chain-of-thought (CoT) chain-of-thought CoT prompting. In CoT, the model is encouraged to generate intermediate reasoning steps before arriving at a final answer. This is particularly effective for complex problems like math, logic, and commonsense reasoning. Instead of directly answering a math problem, a CoT prompt includes step-by-step reasoning in the examples, teaching the model to think through the problem systematically.  Another important technique is retrieval-augmented generation retrieval-augmented generation ( RAG RAG ). RAG enhances LLM responses by retrieving relevant information from external sources, such as a knowledge base or document collection, and including that information in the prompt. This allows the model to access up-to-date or specialized knowledge that may not have been in its training data, reducing the risk of generating factually incorrect information.    Inference   Inference inference is the process of using a trained LLM to generate predictions on new inputs. When you interact with a chatbot, you are performing inference. The model considers possible outputs, assigns probabilities to each, and selects the most likely response.  The way an LLM selects its output is controlled by decoding algorithms decoding algorithm . The simplest method is greedy decoding greedy decoding , which always picks the most likely next token. Beam search beam search keeps track of multiple possible sequences, improving output quality at the cost of more computation. Sampling-based methods sampling-based decoding , like top-k and top-p sampling, introduce randomness for more diverse and creative outputs.  Evaluating LLM inference involves both quality and efficiency metrics. Request latency request latency measures the time to receive a complete response. Throughput throughput measures how many tokens the model can process per second. Time to first token time to first token and inter-token latency inter-token latency measure the speed of token generation. These metrics are crucial for deploying LLMs in real-world applications.   Look Closer...  When you type a question into a chatbot, the model is doing inference. It's not learning anything new—it's using everything it already learned during training to generate a response. The \"thinking\" happens in real-time, and the model considers many possible next words before choosing one. This is why generating a response can take a few seconds, especially for longer answers.     Challenges  Despite their remarkable capabilities, LLMs face several significant challenges. Bias is a major concern—models trained on internet data can learn and amplify societal biases related to gender, race, and other characteristics. Privacy is another concern, as LLMs can memorize and reproduce sensitive information from their training data.   Hallucination hallucination —when a model generates plausible-sounding but factually incorrect information—is a persistent problem, especially in high-stakes applications. The computational cost of LLMs is also substantial. Training and running these models requires enormous amounts of energy and specialized hardware, raising environmental and economic concerns.  Finally, AI safety and alignment remain open challenges. As LLMs become more capable, ensuring they act in ways that are safe, ethical, and aligned with human values becomes increasingly critical.    Summary  Large language models represent a paradigm shift in artificial intelligence. Built on Transformer architectures and trained on massive amounts of text, these models can understand, generate, and reason with human language at an unprecedented scale. Their success is driven by scaling laws that show predictable improvements with more data, larger models, and greater computational resources.  After pre-training, LLMs can be adapted through fine-tuning and alignment techniques like RLHF. They can be prompted to perform new tasks without additional training, using in-context learning and chain-of-thought reasoning. Retrieval-augmented generation extends their capabilities by incorporating external knowledge. However, LLMs also face significant challenges including bias, privacy concerns, hallucinations, and high computational costs.  As these models become more powerful, ensuring they are safe, ethical, and aligned with human values becomes increasingly urgent. The future of LLMs lies not just in making them bigger, but in making them more reliable, efficient, and beneficial to society.   "
},
{
  "id": "subsec-llms-backstory-2",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-llms-backstory-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Large language models "
},
{
  "id": "subsec-llms-backstory-3",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-llms-backstory-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transformer self-attention "
},
{
  "id": "subsec-llms-backstory-4",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-llms-backstory-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameters "
},
{
  "id": "subsec-training-llms-2",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-training-llms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient descent "
},
{
  "id": "subsec-training-llms-4",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-training-llms-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scaling laws emergent abilities "
},
{
  "id": "subsec-fine-tuning-and-alignment-2",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-fine-tuning-and-alignment-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fine-tuning Instruction fine-tuning "
},
{
  "id": "subsec-fine-tuning-and-alignment-3",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-fine-tuning-and-alignment-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "alignment reinforcement learning from human feedback RLHF reward model "
},
{
  "id": "subsec-prompting-and-reasoning-2",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-prompting-and-reasoning-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prompted prompt engineering "
},
{
  "id": "subsec-prompting-and-reasoning-3",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-prompting-and-reasoning-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "in-context learning zero-shot one-shot few-shot "
},
{
  "id": "subsec-prompting-and-reasoning-4",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-prompting-and-reasoning-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chain-of-thought (CoT) "
},
{
  "id": "subsec-prompting-and-reasoning-5",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-prompting-and-reasoning-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "retrieval-augmented generation RAG "
},
{
  "id": "subsec-inference-2",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-inference-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inference "
},
{
  "id": "subsec-inference-3",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-inference-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decoding algorithms greedy decoding Beam search Sampling-based methods "
},
{
  "id": "subsec-inference-4",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-inference-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Request latency Throughput Time to first token inter-token latency "
},
{
  "id": "subsec-challenges-3",
  "level": "2",
  "url": "sec-large-language-models.html#subsec-challenges-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hallucination "
},
{
  "id": "sec-mythbusting-ch6",
  "level": "1",
  "url": "sec-mythbusting-ch6.html",
  "type": "Section",
  "number": "6.6",
  "title": "Mythbusting",
  "body": " Mythbusting   Now that you have a better understanding of how neural networks actually function—from artificial neurons and activation functions to the backpropagation algorithm—let's officially dispel some myths about whether AI works like a brain, what it truly is, and how it processes information.    Misconception: AI methods work similar to the human brain  Reality: This is not true. Even though the most popular methods of AI are called neural networks and are inspired by biological brains, they do not present physiological neural models. Neither the model of a neuron nor the connectivity between the neurons in neural networks is biologically plausible or realistic. The connectivity structure of convolutional neural networks, deep feedforward neural networks, or other deep learning architectures are not biologically realistic. In contrast, a physiological model of a biological neuron is the Hodgkin-Huxley model or the FitzHugh-Nagumo model, and the large-scale connectivity of the brain is to date largely unknown. AI systems have different environments and action spaces and do not need to engage in human activities such as sleeping, eating, or maintaining physical bodies.  Why it matters: Describing AI as working like the brain gives it an aura of magic and leads to hype. People claim things that are not true, which has contributed to AI winters in the past when promised capabilities were not delivered. Understanding that AI is a mathematical and statistical tool rather than a replica of human cognition helps set realistic expectations and prevents the attribution of human-like characteristics or capabilities to systems that do not possess them.    Misconception: AI is a technology  Reality: AI is a methodology. The methods behind AI are mathematical learning algorithms that adjust the parameters of methods via learning rules. When implementing AI methods, certain problems may require optimization of the method in combination with computer hardware, such as using a GPU, to improve computation time. This combination may give the impression that AI is a technology, but by downscaling a problem, one can always reduce the hardware requirements, demonstrating the principle workings of a method. The intellectual component of AI is not the computer itself but the software implementing learning rules.  Why it matters: Viewing AI as a methodology rather than a technology emphasizes that it is the algorithms and mathematical principles that matter, not just the hardware. This understanding is crucial for educators, policymakers, and the public to recognize that AI is about how we process and learn from data rather than simply about computing power.    Misconception: AI is all algorithms  Reality: Algorithms are step-by-step procedures for solving problems. They are fundamental components of AI systems, but reducing AI to just algorithms is overly simplistic. AI is a multidisciplinary field in which the quality and quantity of data are at least equally important. Many products that involve AI also require the design of appropriate user interfaces. The field of AI research intersects with many other fields and their techniques, including neuroscience. Data-centric AI postulates that improvements in data and label quality are more important for performance than adjustments to learning algorithms.  Why it matters: Focusing only on algorithms neglects the crucial roles that data quality, user experience, and interdisciplinary collaboration play in successful AI development. This misconception can lead to poor investments in AI projects that emphasize algorithm development while neglecting data quality. Understanding the full scope of what AI entails helps in creating more effective and responsible AI systems.    Misconception: AI automatically accounts for pre-established facts and common sense  Reality: AI systems do not automatically comprehend things that seem obvious to humans. They may have trouble with contextual and causal understanding, common sense, and the laws of physics. Generally, they may have difficulty recognizing or inferring obvious information that goes beyond the inherent knowledge of their training data. To mitigate this limitation, AI systems need to be trained with suitable algorithms and relevant data.  Why it matters: AI lacks the common-sense reasoning that humans take for granted. This means AI systems can make errors that seem nonsensical to humans, such as misinterpreting basic physical principles or social contexts. When deploying AI in real-world situations, we must be aware that it cannot automatically understand the world the way humans do and requires careful design and oversight to handle novel situations appropriately.     algorithmic bias  mythbusting   A company announces that their new AI hiring system is \"completely objective\" because it uses algorithms rather than human judgment. Based on the Mythbusting section, which response best addresses this claim?      This claim is plausible because algorithmic decision-making eliminates the unconscious biases that human recruiters bring to the hiring process, even if the algorithm is not perfect.    Incorrect. This reflects the common misconception that algorithms are inherently neutral. The section states that AI \"reflects and amplifies the biases present in its training data\"—consistency does not equal objectivity.      This claim is misleading because AI systems reflect and amplify the biases present in their training data, and they are optimized for plausible outputs rather than verified truth.    Correct. This directly matches the section's argument: AI absorbs biases from training data and optimizes for plausible-sounding outputs, not verified truth. The company's claim ignores both of these fundamental issues.      This is true only if the system was trained on a diverse dataset; otherwise, it will reflect the demographics of whoever built it.    Incorrect. This oversimplifies the problem. The section does not claim diversity alone guarantees objectivity—historical bias can persist in diverse datasets. The issue is about patterns in training data, not just who built the system.      This claim is false because AI systems are intentionally programmed with the biases of their developers to achieve corporate goals.    Incorrect. This mischaracterizes how bias enters AI systems. The section describes bias as emerging unintentionally from training data and optimization choices—not as intentional programming by developers.       "
},
{
  "id": "multiple-choice-ai-objectivity",
  "level": "2",
  "url": "sec-mythbusting-ch6.html#multiple-choice-ai-objectivity",
  "type": "Reading Question",
  "number": "6.6.1",
  "title": "",
  "body": " algorithmic bias  mythbusting   A company announces that their new AI hiring system is \"completely objective\" because it uses algorithms rather than human judgment. Based on the Mythbusting section, which response best addresses this claim?      This claim is plausible because algorithmic decision-making eliminates the unconscious biases that human recruiters bring to the hiring process, even if the algorithm is not perfect.    Incorrect. This reflects the common misconception that algorithms are inherently neutral. The section states that AI \"reflects and amplifies the biases present in its training data\"—consistency does not equal objectivity.      This claim is misleading because AI systems reflect and amplify the biases present in their training data, and they are optimized for plausible outputs rather than verified truth.    Correct. This directly matches the section's argument: AI absorbs biases from training data and optimizes for plausible-sounding outputs, not verified truth. The company's claim ignores both of these fundamental issues.      This is true only if the system was trained on a diverse dataset; otherwise, it will reflect the demographics of whoever built it.    Incorrect. This oversimplifies the problem. The section does not claim diversity alone guarantees objectivity—historical bias can persist in diverse datasets. The issue is about patterns in training data, not just who built the system.      This claim is false because AI systems are intentionally programmed with the biases of their developers to achieve corporate goals.    Incorrect. This mischaracterizes how bias enters AI systems. The section describes bias as emerging unintentionally from training data and optimization choices—not as intentional programming by developers.     "
},
{
  "id": "sec-algorithmic-bias-and-echo-chambers",
  "level": "1",
  "url": "sec-algorithmic-bias-and-echo-chambers.html",
  "type": "Section",
  "number": "7.1",
  "title": "Algorithmic Bias and Echo Chambers",
  "body": " Algorithmic Bias and Echo Chambers  To anticipate, prevent, and mitigate undesirable downstream consequences, it is critical that we understand when and how harm might be introduced throughout the machine learning life cycle. As the authors of A People's Guide to AI note, The consequences of AI affect everyone, but especially traditionally disadvantaged communities like low-income groups and people of color. However, these are precisely the communities least included in conversations about the technology. This section describes how these issues arise, their relevance to particular applications, and the different mitigations they motivate.   Historical bias historical bias arises even when the data used to train a model reflects the world as it is or as it was. Even if the data is perfectly measured and sampled, the resulting model can still produce harmful outcomes. Such a system, even if it accurately reflects the world, can still inflict harm on a population. Considerations of historical bias often involve evaluating the representational harm representational harm (such as reinforcing a stereotype) to a particular group. If a hiring algorithm is trained on historical employment data that reflects past discriminatory practices, it will then learn to copy those patterns without taking into account whether it is right or wrong.  Historical bias is not limited to hiring. It can also appear in seemingly neutral algorithmic processes, such as redistricting. A study on algorithmic redistricting in Alabama and Michigan examined four different neutral algorithms. All four plans provided fewer districts where Black voters would be expected to decide the election's outcome. These plans underperformed relative to both the proportion of Black people in their populations and the number of Black opportunity districts in the plans actually enacted by their state legislatures.  Bias can also become embedded in the language models that power many AI applications. Word embeddings word embedding are learned vector representations of words that encode semantic meaning, and are widely used for natural language processing ( NLP ) natural language processing NLP applications. Recent research has shown that word embeddings, which are learned from large corpora of text (e.g., Google News, web pages, Wikipedia), reflect human biases. One such study demonstrates that word embeddings reflect real-world biases against women and ethnic minorities, and that an embedding model trained on data from a particular decade reflects those biases. For example, gendered occupation words like nurse or engineer are highly associated with words that represent women or men, respectively. A range of NLP applications (e.g., chatbots, machine translation, speech recognition) are built using these types of word embeddings, and as a result, can encode and reinforce harmful stereotypes. These models do not simply mirror bias, but instead, they normalize it. They increasingly influence user perceptions and decision-making processes.  Ultimately, these examples illustrate that bias is not a single problem to be solved, but a recurring challenge that arises throughout the AI lifecycle—from the data collected to the models built to the way the models are interacted with. Recognizing these sources of harm is the first step towards mitigation. Even after identifying bias, it remains difficult to understand how AI systems make their decisions.  "
},
{
  "id": "sec-algorithmic-bias-and-echo-chambers-3",
  "level": "2",
  "url": "sec-algorithmic-bias-and-echo-chambers.html#sec-algorithmic-bias-and-echo-chambers-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Historical bias representational harm "
},
{
  "id": "sec-algorithmic-bias-and-echo-chambers-5",
  "level": "2",
  "url": "sec-algorithmic-bias-and-echo-chambers.html#sec-algorithmic-bias-and-echo-chambers-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Word embeddings natural language processing NLP "
},
{
  "id": "sec-the-black-box-problem",
  "level": "1",
  "url": "sec-the-black-box-problem.html",
  "type": "Section",
  "number": "7.2",
  "title": "The Black Box Problem",
  "body": " The Black Box Problem  To understand the challenges of modern AI, we must start with how these systems process information. With traditional computing, humans write the explicit logic. As Mimi Onuoha and Diana Nucera define it, an algorithm algorithm is a series of steps (or set of rules) for solving or performing a task.  However, nowadays modern systems do not operate under these clear, human-written rules. These tools interact with our world through hardware: sensors sensors , devices that detect and respond to some type of input from the physical environment. When physical inputs are processed by complex algorithms, the internal reasoning becomes hidden. The user can’t see how the system is getting the outcomes and this is what is referred to as the Black Box Problem  black box problem . The algorithms are so complicated that the processes behind them are hidden, even to the people creating them.  As these systems are used for high-stakes societal tasks, the lack of transparency becomes dangerous. Social decision-making Social decision-making is the act of making decisions that have social consequences, or ramifications that can be felt by individual people. Now that AI is deeply integrated into our world, these high-stakes societal tasks are integrated in fields like education, employment, resource allocation, and healthcare. Because these black boxes operate without clear transparency, individuals are left without a way to see or challenge the systems governing these critical societal decisions.  Another negative outcome of the black box is structural racism  structural racism . This is a system in which public policies, institutional practices, cultural representations, and other norms work in mutually reinforcing ways to perpetuate racial group inequality. A structural analysis of racism identifies dimensions of our history and culture that have allowed privileges associated with whiteness and disadvantages associated with color to endure and adapt over time. Structural racism is not something that a few people or institutions choose to practice. Instead, it is a feature of the social, economic, and political systems in which we all exist.  When an AI system operates within these deeply ingrained social structures, the inequality might seem like it is created out of nowhere, but it is encoded directly through the data choices made during development. Because the internal reasoning remains hidden from view, affected individuals are left without the means to question or challenge decisions that directly impact their lives.  "
},
{
  "id": "sec-the-black-box-problem-2",
  "level": "2",
  "url": "sec-the-black-box-problem.html#sec-the-black-box-problem-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algorithm "
},
{
  "id": "sec-the-black-box-problem-3",
  "level": "2",
  "url": "sec-the-black-box-problem.html#sec-the-black-box-problem-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sensors Black Box Problem "
},
{
  "id": "sec-the-black-box-problem-4",
  "level": "2",
  "url": "sec-the-black-box-problem.html#sec-the-black-box-problem-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Social decision-making "
},
{
  "id": "sec-the-black-box-problem-5",
  "level": "2",
  "url": "sec-the-black-box-problem.html#sec-the-black-box-problem-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "structural racism "
},
{
  "id": "sec-environmental-impacts",
  "level": "1",
  "url": "sec-environmental-impacts.html",
  "type": "Section",
  "number": "7.3",
  "title": "Environmental Impacts",
  "body": " Environmental Impacts   As we've seen throughout this book, artificial intelligence has the power to transform nearly every aspect of our lives. But like all powerful technologies, AI comes with significant environmental costs that we need to understand and address. In this section, we'll explore the environmental footprint of AI systems—from the energy they consume to the water they use and the electronic waste they generate.    The Energy Demands of AI  When you ask an AI chatbot a question or use an AI-powered feature on your phone, you're tapping into a vast network of computers working behind the scenes. These aren't the laptops or phones in your hands—they're powerful servers located in massive facilities called data centers.   Data Centers: The Engines of AI  Data centers data center are the physical infrastructure that makes modern AI possible. These facilities house thousands of specialized computers that train and run AI models. Think of them as giant warehouses filled with computing power.  The energy consumption of data centers has grown dramatically as AI has expanded:    In 2024, data centers worldwide consumed approximately 415 terawatt-hours (TWh) of electricity—about 1.5% of all electricity used globally    Data center electricity consumption has been growing at about 12% per year, which is more than four times faster than total global electricity growth    By 2030, data center electricity consumption is projected to more than double to around 945 TWh    To put this in perspective, a large AI-focused data center can consume as much electricity as 100,000 households. The largest data centers under construction today may consume 20 times that amount.    Training vs. Inference  AI models consume energy in two main phases:   Training training is the process where an AI model learns from data. This is incredibly energy-intensive. For example, training GPT-4—one of the most powerful language models—required approximately 42.4 GWh of electricity. That's enough to power about 28,500 households for a day.   Inference inference happens when you actually use a trained AI model. Each time you ask ChatGPT a question, the model performs millions of calculations to generate a response. While individual queries use less energy than training, the massive scale of users means inference can dominate total energy consumption over time.  The energy cost varies widely depending on the task:   A simple text response might use about 0.24 Wh of electricity  Generating a single image uses about 1.7 Wh   Generating a short video can consume 115 Wh—equivalent to charging a laptop twice      Why Energy Efficiency Matters  You might be wondering: If AI is so energy-hungry, why doesn't efficiency keep pace? The answer lies in what economists call the rebound effect rebound effect —when improvements in efficiency actually lead to increased consumption. Here's how it works:   AI models become more efficient (using less energy per calculation)  This makes them cheaper to run  Cheaper AI encourages more people to use it  More users mean more total energy consumption   This pattern is similar to what happened with cars: as engines became more fuel-efficient, people drove more, and total fuel consumption didn't drop as much as expected.     The Water Footprint of AI  Energy isn't the only resource AI consumes. Data centers require massive amounts of water for cooling.   Water for Cooling  The computers in data centers generate enormous amounts of heat. If not cooled properly, they would overheat and fail. Many data centers use water-based cooling systems that evaporate water to remove heat.  A medium-sized data center (15 megawatts) uses as much water as three average-sized hospitals or more than two 18-hole golf courses.  For a typical AI text prompt (like asking Gemini or ChatGPT a question), the water consumption is about 0.26 mL—roughly five drops of water. While this seems tiny, consider that billions of prompts are processed every day, adding up to significant water usage.    The Water-Energy Connection  There's also an indirect water cost: the water used to generate the electricity that powers data centers. Electricity generation—especially from coal, natural gas, and nuclear power—requires water for cooling. When you factor this in, the water footprint of AI grows even larger.    Geographic Concentration and Water Stress  Data centers aren't spread evenly across the world. They tend to cluster in specific regions—Northern Virginia, California, Texas in the United States; Dublin in Ireland; and Singapore in Asia. Many of these regions already face water stress.  About 20% of data center servers in the United States draw their water from moderately to highly stressed watersheds. This means AI infrastructure is competing with agriculture, municipal water supplies, and ecosystems for limited water resources.     Electronic Waste (E-Waste)  The hardware that powers AI has a limited lifespan—typically just 3 to 5 years. As AI models grow more powerful, the equipment that runs them becomes obsolete quickly, generating a growing stream of electronic waste.   The Scale of the Problem   electronic waste Electronic waste ( e-waste e-waste ) refers to discarded electronic devices and components. Between 2020 and 2030, it's estimated that AI-related servers will generate approximately 16 million tons of e-waste. This is about 11% of all global e-waste during that period.  To give you a sense of how fast this is growing:   AI-related e-waste is growing at about 110% per year  Global conventional e-waste grows at about 2.8% per year     What's in AI E-Waste?  Server equipment contains valuable and hazardous materials:  Valuable metals that can be recycled:   Gold, silver, platinum, and palladium (used in circuit boards)  Copper, aluminum, nickel, and tin   Toxic materials that pose environmental risks:   Lead and chromium (found in circuit boards)  Cadmium and mercury   If properly recycled, the valuable materials in AI server e-waste could be worth approximately 70 billion dollars. If improperly disposed of, the toxic materials can contaminate soil and groundwater, damaging ecosystems and public health.    The Geography of E-Waste  Most AI servers are concentrated in just a few regions:   North America: 58%  East Asia: 25%  Europe: 14%   This means the e-waste problem is also concentrated. However, the supply chains that produce the hardware span the globe, with semiconductor manufacturing concentrated in East Asia and mineral extraction occurring worldwide.     What Can Be Done?  Despite these environmental challenges, there are many promising strategies to reduce AI's ecological footprint.   Efficiency Improvements  Google, Microsoft, and other companies have made significant progress in improving energy efficiency:    Google improved energy efficiency per AI inference by over 30 times between 2023 and 2024 alone    Modern data centers have Power Usage Effectiveness (PUE) ratings as low as 1.1, meaning only 10% of energy goes to non-computing functions like cooling    Advanced cooling technologies like liquid immersion cooling can reduce energy and water use      Circular Economy Strategies  The concept of a circular economy—where materials are reused rather than discarded—can help address e-waste:    Lifespan Extension lifespan extension — Extending the average lifespan of servers by just one year could reduce e-waste by about 58%.    Module Reuse module reuse — Reusing components like GPUs, CPUs, and memory modules from obsolete servers in other applications could reduce e-waste by about 21%.    Material Recycling material recycling — Properly recovering valuable metals from retired equipment reduces the need for new mining and provides economic value.      Strategic Location  Where data centers are built matters tremendously. A data center's environmental impact can vary by 50 times or more depending on its location. Factors that matter:    Climate: Cooler regions require less energy for cooling    Grid mix: Regions with more renewable energy produce fewer carbon emissions    Water availability: Regions with abundant water create less stress on local supplies      Clean Energy Procurement  Major tech companies are increasingly powering their data centers with renewable energy:    Google and Microsoft are leading in purchasing renewable energy    Corporate power purchase agreements (PPAs) for renewable energy from data center operators account for over 30% of all corporate PPAs globally      Transparency and Policy  One of the biggest challenges is that much of the environmental impact of AI is hidden from the public. Currently:    Less than a third of data center operators track water consumption    Many companies treat water use as proprietary information    Standardized environmental reporting for AI systems is just beginning to emerge    Better transparency would allow:   Consumers to make informed choices about AI services  Researchers to identify improvement opportunities  Policymakers to develop effective regulations      Artificial intelligence offers tremendous potential benefits—advances in medicine, scientific discovery, climate modeling, and countless other areas. But these benefits come with real environmental costs.  The key question isn't whether we should use AI, but how we can develop and deploy it responsibly. This requires:   Continuing efficiency improvements in both hardware and software  Transitioning to renewable energy for data centers  Developing circular economy approaches to hardware  Making environmental impacts transparent so we can track progress  Strategic planning about where to build new infrastructure   As AI becomes increasingly integrated into our lives, understanding its environmental impacts isn't just academic—it's essential for making informed decisions about the kind of future we want to build.      A technology company announces plans to build a new AI-focused data center. They emphasize that the facility will use the most energy-efficient servers available. Which of the following statements best explains why this efficiency alone may not reduce the facility's overall environmental impact?      Energy-efficient servers require more specialized manufacturing processes that produce higher carbon emissions during production, offsetting operational savings over the servers' lifespan.    Incorrect. While manufacturing emissions are a real concern, this is not the primary reason efficiency gains fail to reduce overall impact.      The rebound effect means that as AI becomes more efficient and cheaper to run, more people and organizations will use it, potentially increasing total energy consumption.    Correct. The rebound effect occurs when efficiency improvements make AI cheaper to run, which encourages more usage, and more users mean more total energy consumption. This is similar to how fuel-efficient cars led to more driving, not less total fuel consumption.      Energy-efficient servers actually consume more water for cooling because they operate at higher densities, creating a trade-off between energy and water consumption.    Incorrect. Water consumption is a concern, but that does not mean that energy-efficient servers necessarily consume more water.      The energy savings from efficiency improvements are negligible compared to the energy required to train large AI models, which dominates total data center consumption.    Incorrect. While training is energy-intensive, the use of trained models can dominate total energy consumption over time due to the massive scale of users. Efficiency improvements apply to both phases.       "
},
{
  "id": "ssec-data-centers-the-engines-of-ai-2",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-data-centers-the-engines-of-ai-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data centers "
},
{
  "id": "ssec-training-vs-inference-3",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-training-vs-inference-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Training "
},
{
  "id": "ssec-training-vs-inference-4",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-training-vs-inference-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Inference "
},
{
  "id": "ssec-why-energy-efficiency-matters-2",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-why-energy-efficiency-matters-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rebound effect "
},
{
  "id": "ssec-the-scale-of-the-problem-2",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-the-scale-of-the-problem-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "electronic waste Electronic waste e-waste e-waste "
},
{
  "id": "ssec-circular-economy-strategies-3-1-1",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-circular-economy-strategies-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lifespan Extension "
},
{
  "id": "ssec-circular-economy-strategies-3-2-1",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-circular-economy-strategies-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Module Reuse "
},
{
  "id": "ssec-circular-economy-strategies-3-3-1",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-circular-economy-strategies-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Material Recycling "
},
{
  "id": "ssec-strategic-location-3-1-1",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-strategic-location-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Climate: "
},
{
  "id": "ssec-strategic-location-3-2-1",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-strategic-location-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Grid mix: "
},
{
  "id": "ssec-strategic-location-3-3-1",
  "level": "2",
  "url": "sec-environmental-impacts.html#ssec-strategic-location-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Water availability: "
},
{
  "id": "multiple-choice-environmental-impacts",
  "level": "2",
  "url": "sec-environmental-impacts.html#multiple-choice-environmental-impacts",
  "type": "Reading Question",
  "number": "7.3.5.1",
  "title": "",
  "body": "  A technology company announces plans to build a new AI-focused data center. They emphasize that the facility will use the most energy-efficient servers available. Which of the following statements best explains why this efficiency alone may not reduce the facility's overall environmental impact?      Energy-efficient servers require more specialized manufacturing processes that produce higher carbon emissions during production, offsetting operational savings over the servers' lifespan.    Incorrect. While manufacturing emissions are a real concern, this is not the primary reason efficiency gains fail to reduce overall impact.      The rebound effect means that as AI becomes more efficient and cheaper to run, more people and organizations will use it, potentially increasing total energy consumption.    Correct. The rebound effect occurs when efficiency improvements make AI cheaper to run, which encourages more usage, and more users mean more total energy consumption. This is similar to how fuel-efficient cars led to more driving, not less total fuel consumption.      Energy-efficient servers actually consume more water for cooling because they operate at higher densities, creating a trade-off between energy and water consumption.    Incorrect. Water consumption is a concern, but that does not mean that energy-efficient servers necessarily consume more water.      The energy savings from efficiency improvements are negligible compared to the energy required to train large AI models, which dominates total data center consumption.    Incorrect. While training is energy-intensive, the use of trained models can dominate total energy consumption over time due to the massive scale of users. Efficiency improvements apply to both phases.     "
},
{
  "id": "sec-deepfakes-and-disinformation",
  "level": "1",
  "url": "sec-deepfakes-and-disinformation.html",
  "type": "Section",
  "number": "7.4",
  "title": "Deepfakes and Disinformation",
  "body": " Deepfakes and Disinformation   Harmful lies are nothing new. But the ability to distort reality has taken an exponential leap forward with deepfake technology deepfake . This capability makes it possible to create audio and video of real people saying and doing things they never said or did. Machine learning techniques are escalating the technology's sophistication, making deepfakes ever more realistic and increasingly resistant to detection. Deepfake technology has characteristics that enable rapid and widespread diffusion, putting it into the hands of both sophisticated and unsophisticated actors.  Consequently, while deepfake technology will bring certain benefits, it will also introduce many harms. The marketplace of ideas already suffers from truth decay as our networked information environment interacts in toxic ways with our cognitive biases. Deepfakes will exacerbate this problem significantly. Individuals and businesses will face novel forms of exploitation, intimidation, and personal sabotage. The risks to our democracy and to national security are profound as well.    How to Navigate in a World of Synthetic Media  To address these growing threats, responding to the diffusion of generative falsifications requires coordinated measures across multiple sectors. As surveyed by researchers, these include the role of technological solutions; criminal penalties, civil liability, and regulatory action; military and covert-action responses; economic sanctions; and market developments. In practice, navigating this ecosystem effectively requires four foundational pillars:   Technical Solutions : Implementing cryptographic authentication trails and provenance tracking to verify content origins.   Legal & Regulatory Action : Updating civil liability and criminal penalties to prosecute malicious impersonation and fraud.   Platform Governance : Enforcing clear detection protocols and labeling mechanisms across digital sharing platforms.   Educational Literacy educational literacy : Developing critical evaluation skills, such as learning to always verify facts and citations provided by AI, treating AI as a collaborative tool rather than a substitute for one's own reasoning, and understanding how AI models can hallucinate or confidently generate false information based on patterns rather than truth.   "
},
{
  "id": "intro-deepfakes-1",
  "level": "2",
  "url": "sec-deepfakes-and-disinformation.html#intro-deepfakes-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deepfake technology "
},
{
  "id": "ssec-navigating-synthetic-media-3",
  "level": "2",
  "url": "sec-deepfakes-and-disinformation.html#ssec-navigating-synthetic-media-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Technical Solutions "
},
{
  "id": "ssec-navigating-synthetic-media-4",
  "level": "2",
  "url": "sec-deepfakes-and-disinformation.html#ssec-navigating-synthetic-media-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Legal & Regulatory Action "
},
{
  "id": "ssec-navigating-synthetic-media-5",
  "level": "2",
  "url": "sec-deepfakes-and-disinformation.html#ssec-navigating-synthetic-media-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Platform Governance "
},
{
  "id": "ssec-navigating-synthetic-media-6",
  "level": "2",
  "url": "sec-deepfakes-and-disinformation.html#ssec-navigating-synthetic-media-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Educational Literacy "
},
{
  "id": "sec-copyright-intellectual-property-and-the-creative-economy",
  "level": "1",
  "url": "sec-copyright-intellectual-property-and-the-creative-economy.html",
  "type": "Section",
  "number": "7.5",
  "title": "Copyright, Intellectual Property, and the Creative Economy",
  "body": " Copyright, Intellectual Property, and the Creative Economy   As generative AI systems become more powerful and widely used, questions about copyright, intellectual property, and the creative economy have become increasingly urgent. The Artifacts artifacts they create—standalone content (code, documents) that you can edit and download separately—raise questions about ownership and authorship. The data used to train these models, the outputs they produce, and the impact on human creators all raise complex legal and ethical questions that society is only beginning to address.    Non-Consensual Training and Data Extraction  The source text data used for training is an issue. Typically, foundation models use self-supervised (i.e., unsupervised and unlabeled) pre-training from a good portion of the Internet. A proportion of that data will be intellectual property, perhaps even carrying copyright notices. Other parts may be private—names, addresses, etc.—and an LLM will have the ability to collate such information. Furthermore, a nefarious user, using the right sequence of prompts, may be able to get the LLM to collate information across disparate sources.    Ethics of AI Art Generation and Creative Labor  Beyond the ethical concerns of data collection, the creative labor of human artists is also under threat. The image generators DALL-E and Stable Diffusion can produce images in the style of well-known artists or video game illustrators. The images are not copies of images, but the style can be a copy of a style. This might be a problem. Illustrators may have an identity in part established by their style (and sometimes make a good living through their identity). LLMs seemingly can allow bad actors to steal a professional identity from others.  For example, there are now hundreds of thousands of images on the web that look as though they had been created by Greg Rutkowski (many produced by the LLM Stable Diffusion). Then the question arises: why would any company or creator pay Greg Rutkowski for an image, for use in a video game, when they can produce one for themselves essentially free?  Moreover, LLMs can give completely wrong or inappropriate responses. They will have learned enough grammar and vocabulary to ensure that what they generate will be entirely well-formed and well-written language. That may be good enough in one sense for fiction or poetry (although those literary forms may have additional desirable qualities which an LLM may or may not be able to provide). But non-fiction is another realm. The LLMs are working with probabilities.   Look Closer...   An example of this is a fundamental problem with Galactica: it is not able to distinguish truth from falsehood, a basic requirement for a language model designed to generate scientific text. People found that it made up fake papers (sometimes attributing them to real authors), and generated wiki articles about the history of bears in space as readily as ones about protein complexes and the speed of light.    In addition, LLMs can create fake content and deepfakes—not by accident, as it were, but because the user was trying to do exactly that. A deepfake deepfake is an image, a video, or a voice recording intended to simulate or portray an individual.    Copyright and Ownership of AI-Generated Work  Turning to the legal dimension, as librarians license access to content from vendors, we need to ensure that contracts do not preclude our users from conducting text and data-mining research, algorithmically based research, and machine learning.  A foundational principle here is that copyright concerns the expression of ideas, not the ideas themselves. So, when Einstein wrote the theory of relativity, his actual words might have had some copyright protections but the theory of relativity itself did not. As a result, when NLP abstracts, or paraphrases, or summarizes, or text-data-mines documents or collections in its own words, it might be that there would be no copyright concerns. In contrast, extractive abstracts or summaries, or quotation of passages verbatim, etc., might be problematic.  Additionally, many copyright laws have exceptions for fair use which might include use for research, teaching, and non-commercial uses. When the authors of the resources license their work with Creative Commons licenses, the resources become Open Educational Resources and the teacher can reuse, transform, remix, and redistribute them freely. The only obligation, usually, is to quote the original author correctly. Therefore, it is important to identify when a resource is open or not.      An artist discovers that hundreds of images on the web appear to be in their distinctive artistic style, generated by an AI model. The artist is concerned about their livelihood because companies can now generate images in their style for free rather than paying for commissions. Which of the following best describes the legal and ethical landscape of this situation?      This is illegal because copyright law protects artistic style, and the AI has infringed the artist's intellectual property and style.    Incorrect. Copyright law does not protect artistic style—it protects specific works and expression. Style itself is not covered by copyright, so this is not automatically illegal.      While the AI-generated images are technically different from the artist's work, they are legally treated as copies of the artist's works, making this a straightforward case of copyright infringement.    Incorrect. The images are not exact copies; they are in the artist's style. The section explains that \"the images are not copies of images, but the style can be a copy of a style.\" This is not a straightforward copyright case.      While there are concerns about identity appropriation and market displacement, copyright law generally protects specific works and expression, not artistic style itself.    Correct. This matches the section's explanation. The Greg Rutkowski example illustrates that style replication raises ethical and economic concerns, but copyright law does not straightforwardly protect style.      Legally, there are no concerns because AI-generated images are original works and do not affect human artists in any meaningful way.    Incorrect. Due to numerous ethical concerns, AI-generated images do affect human artists in many meaningful ways.       "
},
{
  "id": "intro-copyright-ip-1",
  "level": "2",
  "url": "sec-copyright-intellectual-property-and-the-creative-economy.html#intro-copyright-ip-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Artifacts "
},
{
  "id": "ssec-ethics-ai-art-6",
  "level": "2",
  "url": "sec-copyright-intellectual-property-and-the-creative-economy.html#ssec-ethics-ai-art-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deepfake "
},
{
  "id": "multiple-choice-copyright-artistic-style",
  "level": "2",
  "url": "sec-copyright-intellectual-property-and-the-creative-economy.html#multiple-choice-copyright-artistic-style",
  "type": "Reading Question",
  "number": "7.5.4.1",
  "title": "",
  "body": "  An artist discovers that hundreds of images on the web appear to be in their distinctive artistic style, generated by an AI model. The artist is concerned about their livelihood because companies can now generate images in their style for free rather than paying for commissions. Which of the following best describes the legal and ethical landscape of this situation?      This is illegal because copyright law protects artistic style, and the AI has infringed the artist's intellectual property and style.    Incorrect. Copyright law does not protect artistic style—it protects specific works and expression. Style itself is not covered by copyright, so this is not automatically illegal.      While the AI-generated images are technically different from the artist's work, they are legally treated as copies of the artist's works, making this a straightforward case of copyright infringement.    Incorrect. The images are not exact copies; they are in the artist's style. The section explains that \"the images are not copies of images, but the style can be a copy of a style.\" This is not a straightforward copyright case.      While there are concerns about identity appropriation and market displacement, copyright law generally protects specific works and expression, not artistic style itself.    Correct. This matches the section's explanation. The Greg Rutkowski example illustrates that style replication raises ethical and economic concerns, but copyright law does not straightforwardly protect style.      Legally, there are no concerns because AI-generated images are original works and do not affect human artists in any meaningful way.    Incorrect. Due to numerous ethical concerns, AI-generated images do affect human artists in many meaningful ways.     "
},
{
  "id": "sec-ai-as-a-disruptor-in-the-workforce",
  "level": "1",
  "url": "sec-ai-as-a-disruptor-in-the-workforce.html",
  "type": "Section",
  "number": "7.6",
  "title": "AI as a Disruptor in the Workforce",
  "body": " AI as a Disruptor in the Workforce   While the race for AI supremacy between corporations and governments continues, one thing is clear: job displacement because of automation is increasing by the minute. As researchers examine the potential increase of AI in the job market, a trend becomes increasingly clear: while job displacement in some industries seems inevitable, the potential for new career opportunities in other industries with the help of AI seems real. A report by Goldman Sachs suggests that AI could replace the equivalent of 300 million full-time jobs.    New Jobs with the Rise of AI  It is important to recognize that while AI may displace some jobs, it will also create new ones, such as AI developers, data scientists, and AI ethicists. With AI's help, people can train themselves and create their own qualifications, rather than depending on institutions that often involve bureaucracy and paperwork. This shift will put the labor market more under the control of the workers themselves. They will be able to get and identify the qualifications they need, determine wage rates, set working hours, and define time frames, among other aspects.  Ultimately, this newfound control can lead to a more efficient, responsive, and equitable labor market, tailored to the needs and capabilities of the workforce. Looking at specific sectors, artificial intelligence is transforming the retail industry across its value chain. On the demand side, businesses are shifting from traditional in-store channels to e-commerce channels, especially digital platforms, to anticipate demand and personalize the customer experience. On the supply side, AI is being applied to improve inventory forecasts, optimize merchandising and product assortment, and automate warehousing and store operations. Overall employment in retail is likely to continue to decline, but the demand for humans in routine and nonroutine cognitive tasks in such areas as customer service, management, and technology deployment and maintenance is likely to increase.  In the health care sector, job growth is likely to remain strong. Indeed, both pre- and post-COVID, the health sector has topped the list of projected job growth in the advanced economies. Health care jobs cover a broad range of skills and incomes, from low-skill, low-wage jobs like orderlies and home care assistants through middle-skill, middle-wage jobs like lab technicians and paramedics to high-skill jobs like nurses, dentists, radiology technologists, and physicians. All of these job categories are projected to grow to keep pace with rising demand for health care services.   Look Closer...   Within health care, AI is likely to complement the demand for high-wage workers performing nonroutine tasks requiring specialized skills and education while substituting for workers performing routine tasks. In particular, AI applications are likely to substitute for humans in data-dependent cognitive tasks in administrative and office support activities and patient relationship management while increasing the demand for humans in work performed by health professionals like nurses, doctors, physical therapists, and dentists whose responsibilities require high-level cognitive and\/or highly skilled physical and social interaction tasks.     "
},
{
  "id": "sec-mythbusting-ch7",
  "level": "1",
  "url": "sec-mythbusting-ch7.html",
  "type": "Section",
  "number": "7.7",
  "title": "Mythbusting",
  "body": " Mythbusting   Now that you have a better understanding of the societal implications of AI—from algorithmic bias and environmental impacts to workforce disruption and creative labor—let's officially dispel some myths about AI's objectivity, its role in our lives, and how we should think about its development and regulation.    Misconception: AI is objective and infallible  Reality: AI reflects and amplifies the biases present in its training data. Rather than being objective, AI systems absorb all the biases and flaws of the data they are trained on. Additionally, many AI systems are optimized to produce plausible-sounding outputs rather than verified ones. This is a phenomenon known as hallucination hallucination , where the system generates confident but factually incorrect information because it has been trained to prioritize coherence and completion over accuracy. Studies have shown that AI still struggles with generating sexist, homophobic, racist, or xenophobic content. Algorithms developed for AI systems are criticized not only for the biased content embedded in their training data, but also for exploiting this data without proper consent.  Why it matters: AI is a tool that should be evaluated critically, not trusted blindly. When we assume AI is objective, we risk automating and scaling discrimination in areas like hiring, lending, and criminal justice. The automation bias automation bias , which is the tendency to trust computer-generated outputs, can lead us to accept false or biased information simply because a machine produced it. These practices have extensive social impacts, from reinforcing systemic discrimination in hiring and lending to eroding public trust in digital information.    Misconception: AI will take our jobs  Reality: There is a widely-held and understandable fear that AI will destroy a significant portion of current jobs over the coming years, with the concern that replacements will mostly be lower-paying, routine tasks. However, we tend to vastly overestimate AI's capabilities and underestimate the flexibility and judgement needed in many manual or cognitive jobs. Historically, technological shifts have often disrupted specific occupations while creating new ones. The Industrial Revolution displaced agricultural and craft workers but gave rise to factory and office jobs. More recently, the rise of personal computers eliminated many secretarial and typist roles while creating entirely new industries in software development, IT support, and digital design.  Why it matters: Whether AI will follow this same pattern or represent a fundamentally different kind of disruption remains an open question. However, the fear of AI taking over all human jobs is an overstated concern which obscures the vast networks of human labor which underpin the systems we see and shape their outcomes and actions. Much of the seemingly automated work delegated to AI is based on invisible labor delegated to an underpaid workforce, either offshored or at precarious career stages, such as the workers who label data, moderate content, or perform micro-tasks on platforms like Amazon Mechanical Turk.    Misconception: AI is capable of autonomous actions  Reality: We are frequently shown footage of robots that makes them appear much more successful than they actually are. In reality, most of these videos are staged to one degree or another. Some robots are remotely controlled, while others might show one successful run out of a hundred. Scientists still do not possess the necessary knowledge to allow AI to combine skills of perception, analysis, and reaction in the way living creatures can. Even humble lifeforms like slugs have surprisingly complex and nuanced cognition. Overconfidence in designing intelligent systems may have disastrous consequences. Driverless cars have caused fatal accidents when they meet unexpected situations.  Why it matters: Our understanding of how cognition works is patchy and shallow. Scientists still do not fully understand how human cognition integrates perception, memory, reasoning, and action in real time. We lack comprehensive models of how the brain processes context, handles ambiguity, or generalizes knowledge from one situation to another. All of these are essential capabilities that AI systems have not yet mastered. AI programs are very specialized, matching some human capabilities only in very specific, well-understood environments such as playing chess, translating text, or recognizing objects in clear photographs. They fail when placed within new contexts, such as a self-driving car trained in sunny California struggling with snow-covered roads.    Misconception: AI is immaterial  Reality: While popular conception often characterizes AI and other computing technologies as intangible entities, AI's functioning primarily relies on concrete, physical infrastructures including data centers filled with servers, fiber-optic cables, electricity grids, and myriad electronic devices. Training a single large language model can consume as much electricity as hundreds of homes use in a year, and the cooling systems required to prevent servers from overheating demand vast amounts of water. The physical location of these data centers also matters. They are often built near cheap energy sources or in cooler climates to reduce costs, meaning AI's environmental footprint is unevenly distributed across the globe.  Why it matters: AI is deeply interwoven with physical realities around the globe. Without this physical backbone, including the cold, secure, and electricity-rich environments in which it operates, the advanced software capabilities of AI would be unable to function. A growing amount of research is focusing on the environmental impact of AI, its carbon and water footprint required to train its algorithms, as well as the high mineral cost to produce its supporting hardware. These costs have engendered conflicts, forced labor and displacement within local communities. Such realities are often obscured by the hype about solving climate change and addressing social issues by applying AI systems.    Misconception: AI is inherently good (or bad)  Reality: AI technology comprises a landscape of tools. As such, it is neutral and has no inherent ethical or moral value. It is the way in which AI is used by humans that can be considered good or bad. For example, facial recognition technology can be used for security and law enforcement purposes, but it also enables mass surveillance in undesirable contexts. Autonomous cars can save lives by reducing human error, but they can also cause accidents due to programming errors.  Why it matters: Treating AI as inherently good or bad distracts from the real issues of how it is developed and deployed. It is the responsibility of developers, users, and policymakers to ensure AI is used ethically and beneficially. This misconception can lead to either uncritical adoption or blanket rejection of AI, neither of which is productive. A nuanced understanding acknowledges that AI is a tool whose impact depends on human choices.    Misconception: AI will only affect routine and manual jobs  Reality: It is true that AI technology has the potential to automate repetitive and simple tasks traditionally performed by humans. However, it reaches far beyond simple automation. Advancements in machine learning have already affected white-collar jobs such as legal document review, medical diagnostics, financial analysis, and journalism. AI can now produce content, analyze complex data, and assist in decision-making across many professional fields. No sector is immune to AI's impact.  Why it matters: Believing that AI only affects routine jobs can leave professionals in cognitive or creative fields unprepared for the changes AI brings. It can also lead to a false sense of security among those in white-collar professions. Understanding the broad reach of AI helps individuals and organizations prepare for workforce transformations and identify opportunities for human-AI collaboration rather than competition.    Misconception: AI will destroy our privacy  Reality: While AI systems certainly have the ability and need to collect and analyze more information, the threat to privacy is little greater than the non-AI systems of today. Many organizations already collect personally identifiable data. The rules that govern data use and protect privacy today will also cover data analyzed by AI. Privacy issues will be with us regardless of whether AI progresses or not. In fact, AI approaches are already used to improve network security, where systems adapt to attacks and malware.  Why it matters: While privacy concerns about AI are valid, they should not be used to halt AI development. Instead, the focus should be on establishing reasonable boundaries and regulations for how AI systems collect and use data. The impact of AI on privacy depends on how it is used, and with proper safeguards, AI can enhance privacy protection as well as potentially threaten it.    Misconception: AI cannot be or should not be regulated  Reality: Despite the potential benefits of AI, it can affect us in unintended ways. Major risks associated with AI stem from malicious uses, military and corporate AI races, and AI agents that autonomously pursue dangerous goals. AI should not be developed without constraints if it can undermine human rights or be otherwise dangerous. Because not all technological progress is desirable, reasonable regulation can help prevent harmful outcomes while fostering beneficial progress. The impact on society depends on the users and controllers of an AI system, their intentions, and the way people are affected, all of which lend themselves as targets for regulation.  Why it matters: The belief that AI cannot be regulated leads to a lack of oversight and potentially harmful outcomes. Effective regulation, such as that used in the aviation industry, proves that even complex technologies can be regulated to ensure safety and accountability. Understanding that AI can be regulated helps create a framework for responsible development and use.      A technology journalist writes an article making three claims:  AI will destroy millions of jobs and create widespread unemployment;  AI systems are inherently dangerous because they make autonomous decisions without human oversight, and  AI will inevitably destroy personal privacy.  Which of the following statements accurately respond to the journalist's claims?      AI will displace some jobs but also create new ones, as has happened with previous technological shifts.    Correct. While job displacement is real, AI will create new roles like AI developers and data scientists. Historical shifts have disrupted some occupations while creating entirely new industries.      The journalist is right to be alarmed. AI is fundamentally different from previous technologies and will eliminate far more jobs than it creates.    Incorrect. Privacy concerns from AI are not entirely new—organizations already collect personal data without AI. Existing regulations can be updated to address AI, and complexity does not make regulation impossible.      The claim that AI operates autonomously is inaccurate. AI systems fail in unfamiliar contexts and require human oversight.    Correct. Scientists do not yet know how to combine perception, analysis, and reaction like living creatures can. AI programs are specialized and fail when placed in new contexts.      Privacy risks from AI are unprecedented and cannot be effectively regulated because AI systems are too complex and opaque.    Incorrect. Privacy concerns from AI are not entirely new—organizations already collect personal data without AI. Existing regulations can be updated to address AI, and complexity does not make regulation impossible.      Privacy concerns about AI are valid, but they are not unique to AI and can be managed through updated regulations.    Correct. Organizations already collect personal data, and privacy issues will exist regardless of AI. The focus should be on establishing reasonable boundaries and regulations.      The journalist is wrong about everything. AI is a neutral tool, so it cannot cause real harm, and privacy is not a concern because AI only uses anonymized data.    Incorrect. AI reflects patterns in its training data, including biases. Privacy concerns are also real—AI processes personal information, not just anonymized data. Valid concerns exist even if some claims are overstated.      AI is a tool without inherent moral value, but it reflects and amplifies biases in its training data, so its impact depends on human choices in development and deployment.    Correct. AI is neutral as a tool, but it reflects and amplifies biases. The impact depends on how humans develop and use it, not on the technology itself.       "
},
{
  "id": "asm-myth-ai-objective-and-infallible-2",
  "level": "2",
  "url": "sec-mythbusting-ch7.html#asm-myth-ai-objective-and-infallible-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hallucination hallucination "
},
{
  "id": "asm-myth-ai-objective-and-infallible-3",
  "level": "2",
  "url": "sec-mythbusting-ch7.html#asm-myth-ai-objective-and-infallible-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "automation bias automation bias "
},
{
  "id": "sa-mythbusting-jobs-privacy-neutrality",
  "level": "2",
  "url": "sec-mythbusting-ch7.html#sa-mythbusting-jobs-privacy-neutrality",
  "type": "Reading Question",
  "number": "7.7.1",
  "title": "",
  "body": "  A technology journalist writes an article making three claims:  AI will destroy millions of jobs and create widespread unemployment;  AI systems are inherently dangerous because they make autonomous decisions without human oversight, and  AI will inevitably destroy personal privacy.  Which of the following statements accurately respond to the journalist's claims?      AI will displace some jobs but also create new ones, as has happened with previous technological shifts.    Correct. While job displacement is real, AI will create new roles like AI developers and data scientists. Historical shifts have disrupted some occupations while creating entirely new industries.      The journalist is right to be alarmed. AI is fundamentally different from previous technologies and will eliminate far more jobs than it creates.    Incorrect. Privacy concerns from AI are not entirely new—organizations already collect personal data without AI. Existing regulations can be updated to address AI, and complexity does not make regulation impossible.      The claim that AI operates autonomously is inaccurate. AI systems fail in unfamiliar contexts and require human oversight.    Correct. Scientists do not yet know how to combine perception, analysis, and reaction like living creatures can. AI programs are specialized and fail when placed in new contexts.      Privacy risks from AI are unprecedented and cannot be effectively regulated because AI systems are too complex and opaque.    Incorrect. Privacy concerns from AI are not entirely new—organizations already collect personal data without AI. Existing regulations can be updated to address AI, and complexity does not make regulation impossible.      Privacy concerns about AI are valid, but they are not unique to AI and can be managed through updated regulations.    Correct. Organizations already collect personal data, and privacy issues will exist regardless of AI. The focus should be on establishing reasonable boundaries and regulations.      The journalist is wrong about everything. AI is a neutral tool, so it cannot cause real harm, and privacy is not a concern because AI only uses anonymized data.    Incorrect. AI reflects patterns in its training data, including biases. Privacy concerns are also real—AI processes personal information, not just anonymized data. Valid concerns exist even if some claims are overstated.      AI is a tool without inherent moral value, but it reflects and amplifies biases in its training data, so its impact depends on human choices in development and deployment.    Correct. AI is neutral as a tool, but it reflects and amplifies biases. The impact depends on how humans develop and use it, not on the technology itself.     "
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
