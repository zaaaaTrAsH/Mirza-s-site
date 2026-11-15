// ==========================================================
//  EDIT THIS FILE to add / change assignments.
//  - pages:    list of image files (one per "page") shown in the viewer.
//  - download: link to the original file (kept in assets/downloads/).
// ==========================================================
window.SITE = {
  name: "Mirza's Site",
  tagline: "Website porto and for assignment purposes",
  ig: "_sd.kfz.181",
  email: "2611501806@student.budiluhur.ac.id"
};

// helper: pages("materi-2", 3) -> ["assets/materi-2/1.jpg", ...]
function pages(folder, count) {
  var out = [];
  for (var i = 1; i <= count; i++) out.push("assets/" + folder + "/" + i + ".jpg");
  return out;
}

window.ASSIGNMENTS = [
  { id: "materi-2", title: "Materi #2", desc: "Merangkum materi 2",
    pages: pages("materi-2", 3), download: "assets/downloads/Materi_2.docx" },
  { id: "materi-3", title: "Materi #3", desc: "Merangkum materi 3",
    pages: pages("materi-3", 3), download: "assets/downloads/Materi_3.docx" },
  { id: "materi-4", title: "Materi #4", desc: "Merangkum materi 4",
    pages: pages("materi-4", 3), download: "assets/downloads/Materi_4.docx" },
  { id: "materi-5", title: "Materi #5", desc: "Merangkum materi 5",
    pages: pages("materi-5", 2), download: "assets/downloads/Materi_5.docx" },
  { id: "input-output", title: "Input&Output", desc: "",
    pages: pages("input-output", 4), download: "assets/downloads/Input_dan_Output_Komputer.pdf" },
  { id: "uts-tti", title: "UTS TTI", desc: "",
    pages: pages("uts-tti", 7), download: "assets/downloads/UTS_TTI.doc" }
];
