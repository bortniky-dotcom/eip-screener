(function () {
  var S = [
    ["EMOTIONAL VOLATILITY - WALKING ON EGGSHELLS", ["Her mood felt unpredictable enough that you monitored her tone, face, or energy before acting.","Small things sometimes triggered reactions that felt disproportionate to the situation.","The rules shifted depending on her mood."]],
    ["INVALIDATION - EMOTIONAL REVERSAL", ["When you were upset, the situation often became about her feelings rather than yours.","Expressing a need led to being called too sensitive, selfish, ungrateful, or cruel.","Apologizing, explaining, or defending yourself typically made things worse."]],
    ["FEAR OF ABANDONMENT - GUILT HOOKS", ["She reacted strongly to your becoming independent - dating, moving out, setting limits, keeping things private.","She used guilt, illness, crisis, silence, or emotional collapse to pull you back in.","You felt responsible for keeping her stable."]],
    ["ENMESHMENT - BOUNDARY PROBLEMS", ["She treated you more like a confidant, therapist, or emotional caretaker than a child.","She overshared adult problems - finances, trauma, relationship grievances - with you.","She did not respect privacy: she intruded, interrogated, snooped, or demanded access."]],
    ["SPLITTING - RELATIONAL INSTABILITY", ["You could go from \"amazing\" to \"selfish, hateful, or disrespectful\" quickly in her eyes.","Family members were idealized or demonized depending on the current conflict.","She pressured you to take sides against other relatives."]],
    ["CONTROL - RETALIATION", ["Setting a limit led to rage, withdrawal, punishment, threats, smear campaigns, or a victim stance.","She kept score of what she had done for you.","Love felt conditional on compliance."]],
    ["CURRENT IMPACT", ["You struggle with guilt when saying no.","You over-explain, people-please, freeze, or feel responsible for others' emotional states.","You doubt your own memory or feel confused after interactions with her.","You feel relief at distance, followed by guilt."]]
  ];
  var O = [{ v: 0, l: "No or rarely" }, { v: 1, l: "Sometimes" }, { v: 2, l: "Often or clearly true" }];
  var n = 0, secs = S.map(function (s, si) { return { id: "d" + (si + 1), title: s[0], items: s[1].map(function (t) { n++; var k = n < 10 ? "0" + n : "" + n; return { id: "q" + n, num: k, text: t, opts: O }; }) }; });
  secs.push({ id: "notes", title: "Follow-up and notes", type: "text", items: [{ id: "followup", text: "Follow-up questions and answers (what happened when you said no, repair after conflict, calmer with less contact, etc.)" }, { id: "notes", text: "Clinician notes" }] });
  window.CFG = {
    slug: "eip", short: "EIP", sub: "Relational Pattern Screen: Emotionally Immature or Volatile Parent Dynamics", clinician: true,
    custom: "Not an official or validated evidence-based screening instrument. For clinical discussion only. (C) Yuriy Bortnik.",
    intro: "This is not a diagnostic instrument for the parent. It asks a narrower question: does this history map onto the literature for adult children of emotionally immature, volatile, or borderline-adjacent parents?<br><br><i>\"I'm not trying to diagnose your mother. I want to understand what the emotional climate was like growing up, and whether resources for adult children of emotionally immature or volatile parents might be relevant for you.\"</i><br><br>RATE EACH ITEM: 0 No or rarely, 1 Sometimes, 2 Often or clearly true.",
    sections: secs,
    scoringHint: '<p class="hint">SCORE /44. 0-8: May not fit this framework. Consider general family stress, cultural or family-role expectations, anxiety, depression, or relational conflict. 9-18: Emotionally immature or emotionally unavailable parent literature is likely relevant. 19-30: Stronger fit for emotionally volatile, enmeshed, invalidating, or borderline-adjacent dynamics. 31+: High-impact family-of-origin pattern. Prioritize trauma-informed care, complex trauma framing, and explicit boundary work. Safety planning if threats, self-harm, or violence were present.</p><p class="hint">This screen supports clinical conversation and is not a diagnostic instrument for the patient or the parent. It orients care, not conclusions.</p>',
    footer: "EIP · Relational Pattern Screen · (C) Yuriy Bortnik · not validated",
    score: function (A, H) {
      var t = H.sum(A, H.ids("q", 1, 22)), b;
      if (t === null) b = "Incomplete, not scored";
      else if (t <= 8) b = "0-8: May not fit this framework";
      else if (t <= 18) b = "9-18: Emotionally immature or emotionally unavailable parent literature is likely relevant";
      else if (t <= 30) b = "19-30: Stronger fit for emotionally volatile, enmeshed, invalidating, or borderline-adjacent dynamics";
      else b = "31+: High-impact family-of-origin pattern";
      var rows = [["SCORE (0-44)", t === null ? "Incomplete, not scored" : t], ["Interpretation", b]];
      var k = 1; S.forEach(function (s) { var ii = []; s[1].forEach(function () { ii.push("q" + k); k++; }); var st = H.sum(A, ii); rows.push([s[0] + " (domain, 0-" + ii.length * 2 + ")", st === null ? "incomplete" : st]); });
      return { incomplete: t === null, rows: rows };
    }
  };
})();
