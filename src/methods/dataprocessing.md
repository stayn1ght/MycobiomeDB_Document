---
title: Data Processing & QC
order: 2
---
# Data processing and quality control

## Data processing

[FastQC](http://www.bioinformatics.babraham.ac.uk/projects/fastqc/) (ver 0.11.8) 
was used to evaluate the overall quality of the downloaded data, followed by the use of 
[Trimmomatic](http://www.usadellab.org/cms/?page=trimmomatic) 
to remove vector sequences and low-quality bases. Sequences shorter than 2/3 of the original read length were removed from subsequent analysis. The remaining sequences were referred as to <code>clean data</code> and used for subsequent analysis.

[Seqtk](https://github.com/lh3/seqtk) was used to convert sequences from FASTQ to FASTA.

## Quality control

Two rounds of quality control procedures were applied. First, for the 16S data, samples (runs) with less than 20,000 <code>clean reads</code> were removed from subsequent analysis, and marked as "failed QC (QC status == 0)" in 
<b><span style="color:darkblue">M</span><span style="color:red">ycobiome</span><span style="color:forestgreen">DB</span></b>.

Then, after taxonomy assignment, samples contain only a single taxon (i.e., a species or genus accounts for more than 99.99 percent of total abundance) will be marked as "failed QC (QC status == 0)".

## Taxonomic assignment to the sequenced reads

For <code>16S amplicon sequences</code>, [QIIME2](https://qiime2.org/) was used to analyze the obtained <code>clean data</code> and assign taxonomic classification information to the reads; 
<code>ASV</code> (Amplicon Sequence Variant) instead of <code>OTU</code> (Operational Taxonomic Units) results were used, as the former can provide more precise measurement of sequence variation and be able to easily compare sequences between different studies (tractability and reproducibility) [Wikipedia: ASV](https://en.wikipedia.org/wiki/Amplicon_sequence_variant). Relative abundances were then calculated for each sample, with the totaling abundance values of 100% respectively.

For whole genome (i.e., metagenomic or mNGS) sequences, [MetaPhlAn2](http://segatalab.cibio.unitn.it/tools/metaphlan2/) was used with default parameters for the taxonomic classification of the sequencing reads.

## Identification of taxon co-occurrence

Co-occurred taxa can be functionally relavent. In <b><span style="color:darkblue">M</span><span style="color:red">ycobiome</span><span style="color:forestgreen">DB</span></b>, co-occurred taxon pairs were identified for health and each disease separately. 

Two taxa (i.e., either two species or genera) will be considered as **co-occurred** in a disease (e.g., Crohn Disease) associated samples if they meet all the following criteria:

* a `Fisher's exact test` was used to calculate the odds of the two taxa to co-occur in the disease associated samples/runs based on their presence/absence information. A taxon was considered as present in a sample/run if its relative abundance was higher than 0.01%. A p-value and odds ratio (OR) were reported for each pair. The pair with p-value < 0.05 was selected. The `fisher.test()` function implemented in R was used.

* `Peasrson correlation` analysis was applied to the relative abundances of the two taxa in the disease associated samples. The pair with a p value < 0.05 was selected.

* `Spearman correlation` analysis was applied to the relative abundances of the two taxa in the disease associated samples. The pair with a p value < 0.05 was selected.