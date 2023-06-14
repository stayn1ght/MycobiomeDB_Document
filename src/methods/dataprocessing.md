---
title: Data processing and quality control
description: Data processing and quality control
order: 2
---
# Data processing and quality control

## Data processing

The original ITS data will be processed using [Qiime2](https://qiime2.org/). Firstly, the raw sequencing reads will be dumultiplexed to determain which sample each read came from. Subsequently, q2-dada2 plugin will be applied for Dada2 denoising, resulting in the generation of <code>ASVs</code> (amplicon sequence variants). In this step. the paired-end sequencing reads will be merged automatically. ASVs can be considered as more precise and reproducible than <code>OTUs</code> (operational taxonomic units) and will be used for downstream analysis as an alternative to traditional OTUs.[Wikipedia: ASV](https://en.wikipedia.org/wiki/Amplicon_sequence_variant). Since Dada2 includes internal chimera checking and abundance filtering, no additional filtering steps are required. 

## Quality control

Two rounds of quality control procedures were applied. First, samples (runs) with less than 20,000 <code>clean reads</code> were removed from subsequent analysis, and marked as "failed QC (QC status == 0)" in 
<b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>.

Then, after taxonomy assignment, samples contain only a single taxon (i.e., a species or genus accounts for more than 99.99% of total abundance) will be marked as "failed QC (QC status == 0)".

## Taxonomic assignment to the sequenced reads

In the process of species classification annotation, we first imported a Qiime2-compatible version of the [UNITE database](https://unite.ut.ee/) for training the feature classifier. Although various classification methods from scikit-learn can be chosen during the training process, the classify-sklearn method using the Naive Bayes classifier has shown slight advantages over other methods in classifying 16S rRNA gene and fungal ITS sequences according to multiple evaluation criteria. Therefore, we employed a machine learning approach based on the Naive Bayes algorithm to train the feature classifier. Subsequently, we used the trained classifier to process the obtained feature table, allowing us to determine the species abundance composition for each sample. Relative abundances were then calculated for each sample, with the totaling abundance values of 100% respectively.

## Identification of taxon co-occurrence

Co-occurred taxa can be functionally relavent. In <b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b>, co-occurred taxon pairs were identified for health and each disease separately. 

To investigate the co-occurrence patterns of microbial communities within each phenotype, we utilized a dataset containing over 50 samples. For each phenotype, we employed the software sparCC to calculate the co-occurrence between every pair of microbes. Microbes with p-values greater than 0.05 were filtered out.