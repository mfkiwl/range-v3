var searchData=
[
  ['remove_1907',['remove',['../group__group-algorithms.html#ga462a21d6b6ab0944c28d7e44c6254058',1,'ranges::remove(I first, S last, T const &amp;val, P proj=P{}) -&gt; I requires permutable&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;indirect_relation&lt; equal_to, projected&lt; I, P &gt;, T const * &gt;'],['../group__group-algorithms.html#ga435ac9770234270704cb373f61410d84',1,'ranges::remove(Rng &amp;&amp;rng, T const &amp;val, P proj=P{}) -&gt; safe_iterator_t&lt; Rng &gt; requires forward_range&lt; Rng &gt; &amp;&amp;permutable&lt; iterator_t&lt; Rng &gt;&gt; &amp;&amp;indirect_relation&lt; equal_to, projected&lt; iterator_t&lt; Rng &gt;, P &gt;, T const * &gt;']]],
  ['remove_5fcopy_1908',['remove_copy',['../group__group-algorithms.html#gad852bad333661acffd3fd5265c95bf48',1,'ranges::remove_copy(I first, S last, O out, T const &amp;val, P proj=P{}) -&gt; remove_copy_result&lt; I, O &gt; requires input_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;weakly_incrementable&lt; O &gt; &amp;&amp;indirect_relation&lt; equal_to, projected&lt; I, P &gt;, T const * &gt; &amp;&amp;indirectly_copyable&lt; I, O &gt;'],['../group__group-algorithms.html#gae1185b7f603d2a4781464b73a01e5dfa',1,'ranges::remove_copy(Rng &amp;&amp;rng, O out, T const &amp;val, P proj=P{}) -&gt; remove_copy_result&lt; safe_iterator_t&lt; Rng &gt;, O &gt; requires input_range&lt; Rng &gt; &amp;&amp;weakly_incrementable&lt; O &gt; &amp;&amp;indirect_relation&lt; equal_to, projected&lt; iterator_t&lt; Rng &gt;, P &gt;, T const * &gt; &amp;&amp;indirectly_copyable&lt; iterator_t&lt; Rng &gt;, O &gt;']]],
  ['remove_5fcopy_5fif_1909',['remove_copy_if',['../group__group-algorithms.html#gaf6edd5fedf64fe6447878cdb0c096b2f',1,'ranges::remove_copy_if(I first, S last, O out, C pred, P proj=P{}) -&gt; remove_copy_if_result&lt; I, O &gt; requires input_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;weakly_incrementable&lt; O &gt; &amp;&amp;indirect_unary_predicate&lt; C, projected&lt; I, P &gt;&gt; &amp;&amp;indirectly_copyable&lt; I, O &gt;'],['../group__group-algorithms.html#ga364855bec8817568b6acb4fa23ec653d',1,'ranges::remove_copy_if(Rng &amp;&amp;rng, O out, C pred, P proj=P{}) -&gt; remove_copy_if_result&lt; safe_iterator_t&lt; Rng &gt;, O &gt; requires input_range&lt; Rng &gt; &amp;&amp;weakly_incrementable&lt; O &gt; &amp;&amp;indirect_unary_predicate&lt; C, projected&lt; iterator_t&lt; Rng &gt;, P &gt;&gt; &amp;&amp;indirectly_copyable&lt; iterator_t&lt; Rng &gt;, O &gt;']]],
  ['remove_5fif_1910',['remove_if',['../group__group-algorithms.html#gad5564c4ecebc4e4ae041229d891f1491',1,'ranges::remove_if(I first, S last, C pred, P proj=P{}) -&gt; I requires permutable&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;indirect_unary_predicate&lt; C, projected&lt; I, P &gt;&gt;'],['../group__group-algorithms.html#ga6a9a8184903ae3931dfd31d1e2010242',1,'ranges::remove_if(Rng &amp;&amp;rng, C pred, P proj=P{}) -&gt; safe_iterator_t&lt; Rng &gt; requires forward_range&lt; Rng &gt; &amp;&amp;permutable&lt; iterator_t&lt; Rng &gt;&gt; &amp;&amp;indirect_unary_predicate&lt; C, projected&lt; iterator_t&lt; Rng &gt;, P &gt;&gt;']]],
  ['replace_1911',['replace',['../group__group-algorithms.html#gac1140f7d360d9cf66591581023ac711f',1,'ranges::replace(I first, S last, T1 const &amp;old_value, T2 const &amp;new_value, P proj={}) -&gt; I requires input_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;writable&lt; I, T2 const &amp; &gt; &amp;&amp;indirect_relation&lt; equal_to, projected&lt; I, P &gt;, T1 const * &gt;'],['../group__group-algorithms.html#gad7acb64bbafb73fecf3cb8e598d80c3e',1,'ranges::replace(Rng &amp;&amp;rng, T1 const &amp;old_value, T2 const &amp;new_value, P proj={}) -&gt; safe_iterator_t&lt; Rng &gt; requires input_range&lt; Rng &gt; &amp;&amp;writable&lt; iterator_t&lt; Rng &gt;, T2 const &amp; &gt; &amp;&amp;indirect_relation&lt; equal_to, projected&lt; iterator_t&lt; Rng &gt;, P &gt;, T1 const * &gt;']]],
  ['replace_5fcopy_1912',['replace_copy',['../group__group-algorithms.html#ga4c5a843b7663cfd1bd361b9dfaefaf01',1,'ranges::replace_copy(I first, S last, O out, T1 const &amp;old_value, T2 const &amp;new_value, P proj={}) -&gt; replace_copy_result&lt; I, O &gt; requires input_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;output_iterator&lt; O, T2 const &amp; &gt; &amp;&amp;indirectly_copyable&lt; I, O &gt; &amp;&amp;indirect_relation&lt; equal_to, projected&lt; I, P &gt;, T1 const * &gt;'],['../group__group-algorithms.html#gaa5f7293875320edb639082858cc6dcd3',1,'ranges::replace_copy(Rng &amp;&amp;rng, O out, T1 const &amp;old_value, T2 const &amp;new_value, P proj={}) -&gt; replace_copy_result&lt; safe_iterator_t&lt; Rng &gt;, O &gt; requires input_range&lt; Rng &gt; &amp;&amp;output_iterator&lt; O, T2 const &amp; &gt; &amp;&amp;indirectly_copyable&lt; iterator_t&lt; Rng &gt;, O &gt; &amp;&amp;indirect_relation&lt; equal_to, projected&lt; iterator_t&lt; Rng &gt;, P &gt;, T1 const * &gt;']]],
  ['replace_5fcopy_5fif_1913',['replace_copy_if',['../group__group-algorithms.html#ga8e14db878b4262fc18acf0571712c6f2',1,'ranges::replace_copy_if(I first, S last, O out, C pred, T const &amp;new_value, P proj={}) -&gt; replace_copy_if_result&lt; I, O &gt; requires input_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;output_iterator&lt; O, T const &amp; &gt; &amp;&amp;indirect_unary_predicate&lt; C, projected&lt; I, P &gt;&gt; &amp;&amp;indirectly_copyable&lt; I, O &gt;'],['../group__group-algorithms.html#gaa27a8faf224a76ed63fd5cf5cdd7b529',1,'ranges::replace_copy_if(Rng &amp;&amp;rng, O out, C pred, T const &amp;new_value, P proj={}) -&gt; replace_copy_if_result&lt; safe_iterator_t&lt; Rng &gt;, O &gt; requires input_range&lt; Rng &gt; &amp;&amp;output_iterator&lt; O, T const &amp; &gt; &amp;&amp;indirect_unary_predicate&lt; C, projected&lt; iterator_t&lt; Rng &gt;, P &gt;&gt; &amp;&amp;indirectly_copyable&lt; iterator_t&lt; Rng &gt;, O &gt;']]],
  ['replace_5fif_1914',['replace_if',['../group__group-algorithms.html#ga84410ac06ba27a46c99e2f1dc752741e',1,'ranges::replace_if(I first, S last, C pred, T const &amp;new_value, P proj=P{}) -&gt; I requires input_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;indirect_unary_predicate&lt; C, projected&lt; I, P &gt;&gt; &amp;&amp;writable&lt; I, T const &amp; &gt;'],['../group__group-algorithms.html#ga2e329647d31be5cae926743c52380549',1,'ranges::replace_if(Rng &amp;&amp;rng, C pred, T const &amp;new_value, P proj=P{}) -&gt; safe_iterator_t&lt; Rng &gt; requires input_range&lt; Rng &gt; &amp;&amp;indirect_unary_predicate&lt; C, projected&lt; iterator_t&lt; Rng &gt;, P &gt;&gt; &amp;&amp;writable&lt; iterator_t&lt; Rng &gt;, T const &amp; &gt;']]],
  ['reverse_1915',['reverse',['../group__group-algorithms.html#gaf4e7367f9ada77b30e1d862bea3d7f31',1,'ranges::reverse(I first, S end_) -&gt; I requires bidirectional_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;permutable&lt; I &gt;'],['../group__group-algorithms.html#ga351313cbb0a065290520980cbc66a629',1,'ranges::reverse(Rng &amp;&amp;rng) -&gt; safe_iterator_t&lt; Rng &gt; requires bidirectional_range&lt; Rng &gt; &amp;&amp;permutable&lt; I &gt;']]],
  ['reverse_5fcopy_1916',['reverse_copy',['../group__group-algorithms.html#gaa95b6255399b071291d37ab727afe2a0',1,'ranges::reverse_copy(I first, S end_, O out) -&gt; reverse_copy_result&lt; I, O &gt; requires bidirectional_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;weakly_incrementable&lt; O &gt; &amp;&amp;indirectly_copyable&lt; I, O &gt;'],['../group__group-algorithms.html#ga483df5fd74ee979c205476aa7f3c0959',1,'ranges::reverse_copy(Rng &amp;&amp;rng, O out) -&gt; reverse_copy_result&lt; safe_iterator_t&lt; Rng &gt;, O &gt; requires bidirectional_range&lt; Rng &gt; &amp;&amp;weakly_incrementable&lt; O &gt; &amp;&amp;indirectly_copyable&lt; iterator_t&lt; Rng &gt;, O &gt;']]],
  ['rotate_1917',['rotate',['../group__group-algorithms.html#ga3d5a4ef6209b296cd606c87895c54657',1,'ranges::rotate(I first, I middle, S last) -&gt; subrange&lt; I &gt; requires permutable&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt;'],['../group__group-algorithms.html#ga0c51098540de4beed710f73f4f2836d8',1,'ranges::rotate(Rng &amp;&amp;rng, I middle) -&gt; safe_subrange_t&lt; Rng &gt; requires range&lt; Rng &gt; &amp;&amp;permutable&lt; I &gt;']]],
  ['rotate_5fcopy_1918',['rotate_copy',['../group__group-algorithms.html#ga2bcfab92e3c9b98eaf1bab6ce9b46306',1,'ranges::rotate_copy(I first, I middle, S last, O out) -&gt; rotate_copy_result&lt; I, O &gt; requires forward_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;weakly_incrementable&lt; O &gt; &amp;&amp;indirectly_copyable&lt; I, O &gt;'],['../group__group-algorithms.html#ga21b4b5a3e7ce0553270a6bb5e1b86dbd',1,'ranges::rotate_copy(Rng &amp;&amp;rng, iterator_t&lt; Rng &gt; middle, O out) -&gt; rotate_copy_result&lt; safe_iterator_t&lt; Rng &gt;, O &gt; requires range&lt; Rng &gt; &amp;&amp;weakly_incrementable&lt; O &gt; &amp;&amp;indirectly_copyable&lt; iterator_t&lt; Rng &gt;, O &gt;']]]
];
