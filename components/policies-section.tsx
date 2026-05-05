import { Shield, Eye } from 'lucide-react'

export function PoliciesSection() {
  return (
    <section id="policies" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Niềm tin của bạn, uy tín của chúng tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Chúng tôi cam kết bảo vệ dữ liệu của bạn và duy trì các hoạt động minh bạch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Privacy Policy */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Chính sách trải nghiệm</h3>
                <p className="text-muted-foreground leading-relaxed">
                 Chúng tôi hiểu rằng "trăm nghe không bằng một thấy". Mọi khách hàng đều được hỗ trợ sử dụng thử miễn phí để đánh giá mức độ phù hợp và hiệu năng thực tế trên dàn máy của mình trước khi giao dịch.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Trách nhiệm kỹ thuật</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trong quá trình sử dụng, nếu phần mềm phát sinh các lỗi kẹt (stuck), crash hoặc hoạt động không đúng logic mô tả do lỗi lập trình, chúng tôi chịu trách nhiệm khắc phục trong thời gian sớm nhất và cộng dồn lại thời gian tool bảo trì vào key của bạn.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Đồng bộ cập nhật</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chúng tôi đảm bảo quyền lợi cập nhật phần mềm song hành cùng thời hạn sử dụng. Khi bạn mua key, bạn có toàn quyền sử dụng phiên bản mới nhất. Nếu trong tương lai, Unemployed Team phát hành phiên bản cải tiến (v2.0, v3.0...), key của bạn sẽ được tự động nâng cấp mà không phát sinh thêm chi phí.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Miễn trừ trách nhiệm</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chúng tôi luôn nỗ lực nghiên cứu và tích hợp các công nghệ vượt rào (bypass/anti-detect) an toàn nhất. Mặc dù vậy, bản chất của việc sử dụng phần mềm can thiệp thứ ba luôn có tỷ lệ rủi ro nhất định. Việc quyết định sử dụng tool đồng nghĩa với việc bạn chấp nhận mọi rủi ro về việc tài khoản (account) bị khóa hoặc hạn chế bởi nhà phát hành game.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 rounded-lg bg-background border border-border/50">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Trải nghiệm là trên hết</span> • Chúng tôi luôn lắng nghe và cải thiện để mang đến trải nghiệm tốt nhất cho bạn
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Đồng hành cùng bạn</span> • Chúng tôi cam kết đồng hành cùng bạn trên mọi chặng đường
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
