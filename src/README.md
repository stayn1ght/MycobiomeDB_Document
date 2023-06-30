---
home: true
icon: home
title: Home
heroImage: /assets/logo.svg
heroText: "MycobiomeDB"
tagline: A Curated Database for Human Gut Mycobiome and Disease Marker Discoveries
actions:

  # - text: How to Use MycobiomeDB 💡
  #   link: /usage/databaseoverview
  #   type: primary

  - text: Materials and Methods ⛏️
    link: /methods/
    type: primary

  - text: User friendly web interface 🌈
    link: /webinterface/websiteoverview
    

features:

  # - title: Markdown Enhance
  #   icon: markdown
  #   details: Add align, sup/sub script, footnote, tasklist, tex, flowchart, diagram, mark and presentation support in markdown
  #   link: https://theme-hope.vuejs.press/guide/markdown/
  - title: Emphasize on data quality and re-usability
    details:
    link: /#emphasize-on-data-quality-and-re-usability

  - title: Gain a comprehensive understanding of the human gut mycobiome
    details:
    link: /#gain-a-comprehensive-understanding-of-the-human-gut-mycobiome



  # - title: Make relevant information easier to find
  #   link: /#make-relevant-information-easier-to-find

copyright: false
footer: Theme by <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | MIT Licensed, Copyright © 2019-present Mr.Hope
---

# Home 默认第一个标题不会显示，具体应该看教程
# Welcome to <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>


<!-- <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>
 is a curated database of human gut mycobiome. -->

<!-- ## Citation

Please cite our latest publication if you find this resource useful:

[Dai, D. *et al.* "GMrepo v2: a curated human gut microbiome database with special focus on disease markers and cross-dataset comparison". *Nucleic Acids Res* (2022). Volume 50, Issue D1, Pages D777–D784.](https://doi.org/10.1093/nar/gkab1019).
 -->


## Aims and features of <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>

### Emphasize on data quality and re-usability

With <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>,
we emphasize on **data quality** and **re-usability** (i.e., availability of the host meta-data).
We thus:

* manually extracted and curated relevant meta-data (most of the time with difficulties) from public databases and related publications;
* consistently re-annotated all data using state-of-the-art methods (see the [Materials and methods](methods/dataprocessing.md) page for details);
* applied stringent quality control (QC) procedure  to the data, in order to include only high quality data.


### Gain a comprehensive understanding of the human gut mycobiome

With <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>,
we aim to gain a comprehensive understanding of the mycobiome community in the human gut, including their


* abundances and prevalence,
* co-occurrences between each other, and
* associations with [human diseases](http://mycobiome.humangut.info/phenotypes), 

all of which can be further stratified by using manually curated meta-data:

* population (country),
* gender,
* age, and
* many other available meta data.



<!-- ### Make relevant information easier to find

In order to further facilitate users to find data of interests, we equipped <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b> with
[a graphical query builder (data selector)](https://mycobiome.humangut.info/#/home) to help users to create complex and flexible queries with a few clicks. So far the data selector allows users to filter samples and runs by related technical meta data such as <code>experiment type (16S or Metagenomics)</code>, <code>number of sequenced reads</code>, and host- related meta data, including related phenotype (<code>disease or health</code>), <code>age</code>, <code>sex</code>, and <code>BMI (body mass index)</code>. More filters will be added in the future.
For example, the screenshot below allows users to search for samples (runs) that:

* were taken from healthy individuals with BMI (body mass index) over 25, <code>AND</code>
* were sequenced by either 16S <code>OR</code> metagenomics.

![](/assets/images/index/query_builder_example.png)

See [Use the graphic data selector](usage/graphicquirybuilder.md) for details and more examples. -->