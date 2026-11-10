# Visual Physics · Experiment Gallery

A bilingual, static research gallery of real RGB-D tracking and 3D physical prediction experiments.

**Website:** https://fangxinyue05.github.io/visual-physics-lab/

The gallery includes all ten previously used EV-RealPhys bottle recordings, ten frozen future-prediction videos and two official FoundationPose tracking comparisons. Visitors can inspect a single panel, filter by object, switch languages and compare overall or per-recording results. It runs without an application backend or external font service.

## Real Push-T comparison

The [Push-T section](https://fangxinyue05.github.io/visual-physics-lab/#pusht) shows a 1080p comparison on 26 scoreable windows in six held-out recordings. The predictor receives the initial RGB pose and a planned command sequence. Update methods share four support clips and the same 240-model bank. The retained model has the lowest mean error. The video uses brief RGB excerpts from the [Diffusion Policy Real Push-T release](https://diffusion-policy.cs.columbia.edu/data/training/) (Chi et al.) with common crops, slow playback and labeled prediction outlines.

## EV-RealPhys scientific scope

- These are diagnostics on previously used recordings, not an independent new-object/action confirmation.
- Tracking comparisons use the same official FoundationPose model with 2 or 10 tracking iterations. The latter uses additional computation; it is not a new equal-budget tracking method.
- The four physical controls share the same FP-10 prefix, known mesh/camera/mass and simulation-call budget: 15 observed frames, 3 new optimizer seeds, 8,185 objective calls per seed. Seeds are selected using only prefix objectives.
- Physical prediction is evaluated on the following second against independent motion capture. Whole-body ADD uses 256 fixed surface points.
- The 33-variable fit includes initial pose/twist, friction/damping, inertia, center of mass and contact calibration. It fits extracted 6D poses and does not guarantee global optimality.
- No winning new mechanism, SOTA, selective-editing guarantee or publication acceptance is claimed.

Numerical data: [per recording](data/per-recording-results.csv), [object means](data/summary.csv), [protocol and gallery manifest](data/experiments.json), [video checksums](data/video-manifest.json).

## Footage integrity and attribution

Original RGB frames are shown with a common follow crop, labelled CAD projection envelopes and text. Playback is 3× slower with frame holds. No future scene frames are synthesized. Future images are displayed to viewers, never passed to the frozen physical predictor. The two highlighted tracking clips were the largest original tracking errors; all ten physical forecast recordings are provided, including negative cases.

The bottle videos are adapted from **EV-RealPhys**, accompanying Kandukuri, Strecke and Stueckler, *Physics-Based Rigid Body Object Tracking and Friction Filtering From RGB-D Videos*.

- [Original paper](https://arxiv.org/abs/2309.15703)
- [Original data](https://keeper.mpdl.mpg.de/d/5ec213b655b44e40a382/)
- Media: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), with [license text](assets/media-license.txt).
- [FoundationPose official implementation](https://github.com/NVlabs/FoundationPose), commit `a1b694b83e633c2cb6115b9063d940a687759392`. No network weights are redistributed.
- Self-hosted DM Sans, Newsreader and Noto Sans SC fonts are under their included SIL Open Font Licenses in `assets/fonts/`.

## Local preview

Serve this directory with a static HTTP server, for example `python -m http.server 8000`, then open `http://localhost:8000/`. GitHub Pages serves the root of the `main` branch; `.nojekyll` keeps the static files unchanged.

This repository contains only the public gallery, curated numerical data, figures and media. It does not contain research-machine access details, private manuscript sources or credentials.
