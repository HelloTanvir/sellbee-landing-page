import React from 'react';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { IoLogoTwitter } from 'react-icons/io';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => (
    <div
        className="flex flex-col items-center gap-12 pt-12 mt-32 pb-9"
        style={{ backgroundColor: '#493548' }}
    >
        <div className="flex gap-32">
            <div className="mr-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="138"
                    height="30"
                    viewBox="0 0 138 30"
                >
                    <defs>
                        <pattern
                            id="pattern"
                            preserveAspectRatio="xMidYMid slice"
                            width="100%"
                            height="100%"
                            viewBox="0 0 512 114"
                        >
                            <image
                                width="512"
                                height="114"
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAByCAYAAAAlDWkZAAAACXBIWXMAAAsSAAALEgHS3X78AAAVKElEQVR4nO3dX2hc1b4H8JWeYz2eh9OZWE4hIJnmiDcFNSP1IT51IhWsoE0oFRGkKU1bKlajoEmlXOOTE1swtSBtWjGC+NBamuCDgpVMXkrFEzJBQTxc08RwvAZiZuaAbdWLc1k9v+1dd9x/1t6z9t5r7f39wFBN5s/eu92zfmut3/qtlnq9zgyRZ4xlGGNlxljVlIMmBfqzFPuRAABA6nHrDLgKGWo45xhj04yxCmNsRIPjktFPwco0PRYpkAEAAIiVCSMAvPHfZvPz5xljYzEcj6w8BS2NaoyxnIGjGAAAkCC6BwC8obzq8vv7aEpAN9ZURbvDcfUxxiY1PG4AAEgJ3acAch6/n6TGVjeTLo2/zHkBAACESvcAoERD5k54IzsR7yH+zojDlIUIyYAAABArE5IAvRL+djLGBiM6Fi882/8Vj+dMaTptAQAAKWLKMsBJaujdxJ0PkKEs/w0uz5mnIAEJgAAAECsTRgAYLadb8nhO3PkAkx6Nf01YFggAABArUwIA3mj2ejwnznwAmXn/QQz9AwCALkwJABg1ns97PGdnDEWCZOb939UwWREAAFLMpFLAFpl8gJ6IMu0x7w8AAEYyMQDwKrLDIqy251SlUDyOAob+AQBANyZNAVhk8gE2RFBpD/P+AABgLBMDAEaN6l6P52wLMR+gF/P+AABgMhOnAES8gd3j8RzV+QA5CkAw7w8AAMYyPQCwtgrucnmO6nyAssTnYd4fAAC0ZuoUgKVKxXXc9gtQmQ8w5tH4M8z7AwCACUwPABg1tl57AajIB+Dz/s95PAfz/gAAYIQwpwD4sHteeIhlevM2veQS9ejLAefsw8wHkJ33z/t837xwnXIN2wRvo/LHi8LPmr1GAAAAN6kOAHrpUfBYpy9jnhq5ScnGLsx8AJl5/3xDY20nJ1yfgkdAIWOGrs+kxGcDAAD8RkUAkKPh9V4FDZqTGjVyEx7BQJ5+r7KnPiYx9N/nkmeQozyFfgVBkZspuj5h1z8AAIAEaCYAsBp+r2F31ZaooZtw6PXyhvYdj888IZE3wCiouRjgvTL02n6JYkGqLdHfC3IRAADAUZAAIEMNjFevOAozQjAgkskHcOu1s4Dz/nkKBsIcDZE1gxUJAADgxG8AUKDGNcyh7CBqdFxjNCogmw/gNm8vO+9vlSYelFgiGIdXY9ghEQAANOcnAOAN3BsG/IXOCLkCQTP3ZUYQXhWS+uLu7XuZoeNEZUIAALhJNgCQaRB1U6PevVevvHEOXyaHwETzFARgtQAAAEgFAIEb/3K5zD7++OPKV199de3y5cv/Y/38hx9+yNx+++2/9UbvuuuudZ2dnesfffTRTfl8nmUyGcf3DImVDyCziiAMNRqtKLv00q1aAc1MM6BMMQAA3OQVAPhu/HmjPzIysvLRRx/95eeff74tyGVua2tb2bFjxx+eeeaZjTwgiEBNyG+IYh6/JtQ3KPnslWfoWHsDTj+o3hsBAAAM5BYAjEhsefubUqnEDh8+vPLll19uUnkZstls7aWXXvr1iSeeyOZyOYlXBFYLuedfE4r2qFqrby03HPGZmCm7W2GWMXag4Wf8/zscnj/OGFto+Nmoj+MCAICIOAUAMuvfb6pWq6yvr2+1VCptDPuQu7u7l/ft27dxYGAg0MhCTGaEAj1h9rp9BWy0b0F/w8+2M8a2MsZ2058qVYRgYJz+HwAAYmIXAGRoSNqzN8x7/Q8//PCNn3766U9RHv769euvP/XUUz8ePXp0Y8ijAkE1LktslriXwqLLe+Z9TmPw3IdlaviLEV8jKyCYZYxdCvB6PgrxTQjHFaWHPM5d9Tny0Zm/xXi+STsfpvG/w2Hhv/l1Oh/iZ6XhXmRJPE+73QAnZBr/s2fPXu/p6WFRN/4czy14++23N27evJndc889K/xYoj4GB7y3v5ca60FFjT//+5hjjE3T4yq971jD5kGMkvsKdBwy+JfC32No/BlNL/DP/YQxtsYYG6KfAUDzisLjHGOsTo3XEAX8AL8LAHjjsdPrsvAGd//+/VoMw/OcA34st9566/Xh4eHa4mLkq9xqtJRws5BIqEq/QxJmO1ViLNsU+anScbwrcQx/VHiszbCCAR4InHbJMQCA4Dpsgm5IscYAwLNi3IULF67p0viL+KjA6OjoBj4q8MADDyzz6YmQzVNvP6ewt9/Ia35jA837lxu2W2Z0TPNhX4QQHKCeCoIAgPBYQXcdgUB6iQFAwWvjGt67fvLJJ1t0v1pXrly5g09PtLa21orFYoUnKirEe9Y9wnx7mIl9su/dRcsJxSDAGgmohXRsYTpvs5oAAMJRpKlABN0pIwYAnrvj9fb2rgZd2x+HSqWy4ciRI9lNmzZd7+3tXWliemCJSv9maVg+9OEFMuGjF99lc1xVm0x/E4wbeMwAJttKQQDyA1LECgAyXnP/fOh/fn4+9KV+YeBBy9TU1KbZ2dlrAd9+kqZHoi6eU6WRhr0UgLzr0aPvouRA0Y5oDlWZhYCrAgCgOVnKD0AQkBJWANDrdbr79+//xeRLsm/fvtVdu3b9OeDLn5O5RiGaoACkn/ICTngcqzUVMGRTyEd36P0DxOscpgPSQSoA4Al1fDjd1CvS3t6+dvbs2WZHLyYkkvKiUKXpmr0un5UXMn5NUkEAABC7LK3GgYSzAgDXgvvHjh1bNvUy8KJBpVKpVcFbbaCpgMh3KnIwQdMCdsqG3sDnUSEQQAvbDRw9BJ/WUYPmWkf+0qVLRs79c++//37dq1og38Do888//2+Jt7ObY4/TiE3RHz4ycL+h83jo/QPoYzf+LpJtnVfvn2fOm5T5L5KZ9+dLBB988MHam2+++Z+SS+b2aJZZz5f63UdLEzfTyICJkfslKgsMAHrYjuqcyWZXCvj/iaGynhKy8/4DAwNrPL/hvffe+y+ZpZBkzCtwilhZ2FY4a2jkHmatcgAIBqMACbaOepCOrly5YtycrOy8Py9pfOHCBfF5E5IldHXLBxCFNfQ/ThuM8OvV4vA4SM8Zlng/0QKG/wG0hNUACeY5AvDdd9/9y7TTl533f/rpp+32QpYtoduucF9/lVRv4ztLO64dpN373ALCcXrOKAUIrRQMeK3rR+MP8G/jLgG23eN+usfC6qhhCiDBPAMA0wwNDdVk5v0fe+yx1V9++cXueVVaFimTD7BNs6RAFkIA8HgTZXmtLX8fEoIBOzoEAH6/eFU8UPAImjVL91hrSP+e4ggA0nIvxn6e67yq2917771/Df0yKFIoFFaLxaJnvYK+vr7V5eVlt/yARR+Jfs9plhSocshuQWFN/oowMnBQeN9xLP0DUOLxEO4l3JsJto4SyBzdeeedRqwA4El/Fy9e9Ez6O378+I1SqSSzrHHSZZ19I52SAlVG7GFF/+PCtAKG/wHUqITQk0UAkGCeUwD5vE7J7vaspL9Mxj0nj8/7v/jii3/y8dZ26+zt6JQUqDoACLOg0DiW/gEopfp+QgCQYOu8drbjjWpbW9uKrpfglltuufbZZ5/d5pX0Z633D/ARvbQboJd2my1546B6G11rf37sGQ6gP9U5QMhTSTBrBMA1633Hjh1/0PUSvPXWWy0yoxQ8PyDgfgZ+kgJ1qxSoirWvQF0IBhAQAOglq3gZ8AJG6JLNCgBcRwGOHj2qZSngM2fOXB8YGPDMURgYGFhtcivjso8iQXuonkBcwr5hrWDACgjqNE1g4s6DAElyTvEUIPJzEq6lXr+5FJ73cC+6nWpvb+8K31Nfl8sh2/jzof9isVi7du2a62qHQ4cOfb9ly5YbHm+Xp/l+GXtjCgSKmvTOrSV/YWX5d9BohEku0ZLIuM5xgZIv45K082EhnNM4JcfK2kq9/iHFjX+Frq3MvZuGe5El8TytAIDRULdj48ZLAm/evDmMA/RNtvHXQBxBwG7qCejEWgK4oLDkLwIA/xAAqGfiv0MZj/u4VxEA6Mv1PMVVAK4NFU+y40V24j5Ngxp/7h1aSRAlHbfUzdLIxDmaMiiGkKwEAGqMYm+OdBADAM/kNV5kp6urazWOK8OX+s3NzTGDGn/LKzGMAoxG/Hl+8eHKvzPGPkEgAKCV8QB7eYChxABgUWYjHF5EhxfdifJ0+ed9/fXXt5lQk8DBHkokdF+rqA6/iU3Yw2E7BQJh1hoAADmjPvMPwHCNhYBGvJa78boA5XK5NaoggO/pv7i42Oq1zt8AXT5XEzSD71HwR4OuzQEKBLDzGED0FmieGD3/lGkMABZl5qytIGDXrl2hBQHZbLY2PT3NZPb0F+VyubWWlhbm9/Hss88+zxjrCfDwkxfBkyzfoGWXYQ1njNCKDtcNkTS0lYIATAkARKdCjT8K/qQRXwVg8yjVJX3wwQc/ZrPZqrAmvKkHf68zZ85ck/180bFjx6438dkFh2vh9RgMcqxkol6v5wJ+buODH/9iE8eii7V6vb5V4nw7DDy3T3z+nao+x28U/VsL+kja+Zj679DOOcn7Lq33YiLP02kvANnKd4xvvbu2traBZ+fzXnvQGOqOO+5Y5e/B3ytIoh9fpvjyyy//GvTzmzDmVUnRBc8NuEojAv0Byghn6HX89dNUjth02RAKmgCAu93Ix0kfpwCA9+gLfoa3eaPNG2+eqf/CCy+sdHZ2/pNn7js9n+8v0N3dvfzaa69Vrl69yr799tuNzWT4Dw4Orjjs7x+FZuf1t9GSwQo15iMUhBUagoICPUZo86EKvW5bTOcdFqvaIABEy9r7A1NxKSAWArKTpwYpSA393/DeOX+wf9fkV35VFRUp6uFTH028vmRIQ/wPxthdGhyHDLe5SRQC8g+FgNRLaiEg5iM3AIWA9CVdCMhO2e9IgB2ewc8b/jAaf0a9/1De2B8TNgE6wRj7D/rS1L1WAKNhSQCIxzmMBCSbVwDAhCAg6Dx3qHjvX5M9CiYltw2Oy15hqmKBlvy00LpfXYOB3cgFAIgN8nESTiYAYEIQcEK3y3Hq1KnYyxMLdBwF4IHbfS7VCMeFYMBaC6zLFqCqtzcFAH+Qj5NgsgEAo8TAQVonH+VogGuv+tSpU3Fk/juZ9Ph9lNeNB0avUh5HWfI1l2g04H5hdGA45jXCKA4EaTJO916Qx+MhFfM5gPswmYJUi7OK2PRTQNAV0pWZoV4rb7zm7J5QLpdZrVZTMjx1+PBhVYV5llyW45Uou9/K8m8qudJBjUYixihoa4a1H7g1RZAV9vxXvf2ok6i+ePxuwwqgG2sDn/MhzN8fiLBSYFruxdjPs5lysRP0KFAwoKJBm6dGcoyqEjK3JXZ8bwCPVQx+vKHqjVzk6bysNf+99Nip4L2naARiUkHD76QiBAPWn0P0RRNWwh7mHwH8WaDRAJUZ61EGABARFfXiS/Rgwjr1PG184zY6UKPevfUoCY2+yNgdgGyIywSrQhCVEa5bga6dW1GfWsN1K3k0+h30pRAGMYHwtDBCoAoCAAD/FiiXR9UoQJbeS5f8IFBA9YYxYjAgygsFbfyutTd+F6AGdnPyVaH3bvf8oNfOco7+DHuf74P0xYOkIYD4VRQfQQcCgGSJasc42SQ0O0mrcue33G8z145RFr3VCzhHN/C4ML+v2nnFAYDqLzGAtFA9eoZEwITxswoA1Ih6SmOo4f+30lB9nX6n+qZW/aUT1tQFQJJ1oIgPeNE9APDbWzZBlOfU4bGOvkiJQt9QMKBizX1jwNEsjAAA+NMhTPsBOIpqCiAox97yp59++uPU1NSqqg86dOjQ91u2bLmh6O28kviiItsYNxb7uCSs/R+XaISt5YG7Q+h1RFWD4EAICYwyDoY4HdOog0Z+ohCk1nraz6dZuxNSuCcN9yLT4Tx1DwAc8cb/5MmTyhrZkydP9je5GZCIr/N/RdF7BZVtYmnedmE0IM4vkwUkHUHKxNUoyMB0XMIgByC5DiRgCV2U0TgAuIuzIiiEQPcAwLFH3tbW9pdoD8U4qufi4xDmkkUAkDeLfJzkMXYEoLu7W+febdzJi0np/WPIEUAPCMYTyIQAwHa3v0xG6wUCbkv9ml3XL8P03n8FZUcBtFHBdFwymRAA2DaYfB8AjbkdXFh1+i3bE1Cw4yCGGwG0MYr7MZmMDQC4zs7Of0Z7KFJyHpsiqVpp4MT03v8whhsBtHG+Yb8PSBATlgE6BgB79uz585EjR5R8iMLtgHtdfjev6DOceBX+0d04vmwAtDGLLbKTzYQAwLHHPDw8nB0eVjZVHMV2wOj9OxtG4w+gDRMKH0GTTJgCWIyg5xyVsAOAWQMz5yu0dzkafwA9DKPxTwdTlgFOaHAMzao5bPerEh9C/5uwLa/uztPxYs4fIH7W/YhgPCVMCQDCbjijEOU5WIHAQ5rezHx48X7q+SO7GCBeo8L9iNobKWLKXgB8GmCKMbZTg2MJKo5RDGtTn2GhOFCctf1HqZeB+v4A8RrG+n4waTOgMYMDgJkI5v+9WDe6NSJgJQweCLluAL5oAOIjZkkvYLoNRC31elS7aSrBG9FtTm90/PjxG6dPn14J8kGvv/76x319fd8HeGleIjDp0SAAkNG4isBPcCCW7kWDDwCgOdMCAN7Yzjn9slqt8gqBa0tLS60B3rsnwHbAeWrY3Qr/8N5/IcDxAAAAhMa0zYB4UaATTr/k+wOUy+XW9vb2tQiORabx5/ojOBYAAABfTNwNcMStLoAVBHR1da2GeAwFycb/eUpgBAAA0IqJAUCVetW2uwSy/wsCNg4NDTk+pwk8AJmWaPxnKHERAABAOyYGAIymAga9nlQsFjfMzc2xu+++O1BiYIN+6s2/IvHceY89AQAAAGJlagDAaF39Xq8n8W2Dv/jii03T09PskUceWV6/fv11H5+Rpx4/b/jfYYy1S7ymRo1/2Nv+AgAABGbaKgA7/dQ4SyuVSuzDDz9cuXz58s+rq6u/st8vAyxQ4+81zN+oRq913MEQAABAB0kIAFiQICAE89T4o+cPAADaM3kKQMSnA+5jjC3F9PnvovEHAACTJCUAYDTsnqfGOCp8yL+PRiDQ+AMAgDGSFAAwYYlgDy3DCxMvSJRLyE6FAACQMknJAXBSoOWCqjYRqtHa/gkU+AEAAJMlPQCw5GhpXoEefrL7l6jq3yR6+wAAkBRpCQAa5SkoyDv8vko5BWXM7QMAQBKlNQAAAABItaQlAQIAAIAEBAAAAAAphAAAAAAghRAAAAAApBACAAAAgBRCAAAAAJBCCAAAAABSCAEAAABA2jDG/hfoEaNMZj6h0AAAAABJRU5ErkJggg=="
                            />
                        </pattern>
                    </defs>
                    <g id="logo" transform="translate(-73 -2997)">
                        <rect
                            id="Asset_1"
                            data-name="Asset 1"
                            width="138"
                            height="30"
                            transform="translate(73 2997)"
                            fill="url(#pattern)"
                        />
                    </g>
                </svg>
            </div>

            <div className="flex flex-col gap-3">
                <span className="mb-1 text-base font-medium tracking-wide text-white">
                    QUICK LINK
                </span>
                {['Company', 'Our Services', 'Portfolio', 'Contact Us'].map((item) => (
                    <a
                        key={item}
                        href="http://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-light text-gray-100"
                    >
                        {item}
                    </a>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <span className="mb-1 text-base font-medium tracking-wide text-white">
                    CONNECT WITH US
                </span>
                {[
                    { icon: TiSocialFacebook, name: 'Facebook' },
                    { icon: IoLogoTwitter, name: 'Twitter' },
                    { icon: AiFillYoutube, name: 'Youtube' },
                    { icon: AiFillInstagram, name: 'Instagram' },
                ].map((item) => (
                    <a
                        key={item.name}
                        href="http://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2"
                    >
                        <item.icon />
                        <span className="text-sm font-light text-gray-100">{item.name}</span>
                    </a>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <span className="mb-1 text-base font-medium tracking-wide text-white">
                    CNTACT INFO
                </span>
                {[
                    { icon: MdLocationOn, name: 'Dhaka, Bangladesh' },
                    { icon: MdPhone, name: '+880 17 1234 5678' },
                    { icon: GrMail, name: 'tanvirhossain.butex@gmail.com' },
                ].map((item) => (
                    <a
                        key={item.name}
                        href="http://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2"
                    >
                        <item.icon />
                        <span className="text-sm font-light text-gray-100">{item.name}</span>
                    </a>
                ))}
            </div>
        </div>

        <span className="text-sm text-gray-300">Copyright &copy; 2021. All rights reserved</span>
    </div>
);

export default Footer;
